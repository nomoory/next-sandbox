import { observable, action, computed, makeObservable } from "mobx";

import db from "../db";

const TARGET_COLLECTION = "news";
export const INITIAL_TEMPLATE_DATA = {
  isLoading: false,
  data: {},
  dataArray: [],
};

class DataStore {
  @observable isLoading = false;
  @observable data = {};
  @observable dataArray = [];

  constructor() {
    makeObservable(this)
  }

  @computed 
  get formattedDataArray() {
    return dataArray;
  }

  @action
  setData(data) {
    this.data = data;
  }

  @action
  initData() {
    this.setData(INITIAL_DATA);
  }

  @action
  loadArray() {
    this.isLoading = true;
    return db
      .collection(TARGET_COLLECTION)
      .get()
      .then(action((querySnapshot) => {
        const dataArray = [];
        querySnapshot.forEach((doc) => {
          console.log(doc.id, " => ", doc.data());
          dataArray.push({ id: doc.id, ...(doc.data() || {}) });
        });
        this.dataArray = dataArray;
      }))
      .catch((error) => {
        console.log("Error getting documents: ", error);
        return null;
      })
      .then(
        action(() => {
          this.isLoading = false;
        })
      );
  }

  @action
  loadById(id) {
    if (!id) return new Promise();
    console.log("getUserById", { id });
    return db
      .collection(USERS)
      .doc(id)
      .get()
      .then((userRef) => {
        console.log("collection", { exists: userRef.exists });
        if (userRef.exists) {
          const user = userRef.data();
          console.log("collection", { user });
          return user;
        } else {
          return null;
        }
      })
      .catch((error) => {
        console.log("Error getting documents: ", error);
        return null;
      })
      .then(
        action(() => {
          this.isLoading = false;
        })
      );
  }

  loadByCondition = (key, value, condition = "==") => {
    this.isLoading = true;
    return db
      .collection(TARGET_COLLECTION)
      .where(key, condition, value)
      .get()
      .then((querySnapshot) => {
        if (!querySnapshot.empty) {
          const data = querySnapshot.docs[0].data();
          return data;
        }
        return null;
      })
      .catch((error) => {
        console.log("Error getting documents: ", error);
        return null;
      })
      .then(
        action(() => {
          this.isLoading = false;
        })
      );
  };

  @action
  create() {
    this.isLoading = true;
    const now = Date.now();
    const data = this.data;
    return db
      .collection(TARGET_COLLECTION)
      .add({
        ...data,
        createdAt: now,
        updatedAt: now,
      })
      .then((docRef) => {
        console.log("Document written with ID: ", docRef.id);
      })
      .catch((error) => {
        console.error("Error adding document: ", error);
      })
      .then(
        action(() => {
          this.initData();
          this.isLoading = false;
        })
      );
  }

  createWithDocId(docId) {
    this.isLoading = true;
    const now = Date.now();
    const data = this.data;
    return db
      .collection(TARGET_COLLECTION)
      .doc(docId)
      .set({
        ...data,
        updatedAt: now,
        createdAt: now,
      })
      .then((docRef) => {
        console.log("Document written with ID: ", docRef.id);
      })
      .catch((error) => {
        console.error("Error adding document: ", error);
      })
      .then(
        action(() => {
          this.isLoading = false;
        })
      );
  }

  updateWithDocId(docId) {
    this.isLoading = true;
    const now = Date.now();
    const data = this.data;
    return db
      .collection(TARGET_COLLECTION)
      .doc(docId)
      .set({
        ...data,
        updatedAt: now,
      })
      .then((docRef) => {
        console.log("Document written with ID: ", docRef.id);
      })
      .catch((error) => {
        console.error("Error adding document: ", error);
      })
      .then(
        action(() => {
          this.isLoading = true;
        })
      );
  }
}

export default DataStore;
