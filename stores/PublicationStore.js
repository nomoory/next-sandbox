import { observable, action, computed, makeObservable } from "mobx";

import db from "../db";

export const TARGET_COLLECTION = "publications";
export const INITIAL_DATA = {
  isLoading: false,
  data: {},
  dataArray: []
};
export const DATA_COUNT_IN_A_PAGE = 5;

class PublicationStore {
  @observable isLoading = INITIAL_DATA.isLoading;
  @observable data = INITIAL_DATA.data;
  @observable dataArray = INITIAL_DATA.dataArray;
  @computed
  get lastPageNumber() {
    return Math.round(this.dataArray.length / DATA_COUNT_IN_A_PAGE);
  }

  constructor() {
    makeObservable(this);
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
    this.setData(INITIAL_DATA.data);
  }

  @action
  loadAll() {
    this.isLoading = true;
    return db
      .collection(TARGET_COLLECTION)
      .orderBy("updatedAt", "desc")
      .get()
      .then(
        action(querySnapshot => {
          const dataArray = [];
          querySnapshot.forEach(doc => {
            console.log(doc.id, " => ", doc.data());
            dataArray.push({ id: doc.id, ...(doc.data() || {}) });
          });
          this.dataArray = dataArray;
        })
      )
      .catch(error => {
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
      .collection(TARGET_COLLECTION)
      .doc(id)
      .get()
      .then(
        action(dataRef => {
          console.log(TARGET_COLLECTION, { exists: dataRef.exists });
          if (dataRef.exists) {
            const data = dataRef.data();
            console.log(TARGET_COLLECTION, { data });
            this.data = data;
          } else {
            this.initData();
          }
        })
      )
      .catch(error => {
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
      .then(querySnapshot => {
        if (!querySnapshot.empty) {
          const data = querySnapshot.docs[0].data();
          return data;
        }
        return null;
      })
      .catch(error => {
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
        updatedAt: now
      })
      .then(docRef => {
        console.log("Document written with ID: ", docRef.id);
      })
      .catch(error => {
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
        createdAt: now
      })
      .then(docRef => {
        console.log("Document written with ID: ", docRef.id);
      })
      .catch(error => {
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
        updatedAt: now
      })
      .then(docRef => {
        console.log("Document written with ID: ", docRef.id);
      })
      .catch(error => {
        console.error("Error adding document: ", error);
      })
      .then(
        action(() => {
          this.isLoading = true;
        })
      );
  }
}

export default PublicationStore;
