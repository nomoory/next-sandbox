import { observable, action, computed, makeObservable } from "mobx";
import db from "../db";

export const TARGET_COLLECTION = "members";
export const INITIAL_DATA = {
  isLoading: false,
  data: {},
  dataArray: []
};

class MebmberStore {
  @observable isLoading = INITIAL_DATA.isLoading;
  @observable dataArray = INITIAL_DATA.dataArray;

  constructor(initialData, stores) {
    makeObservable(this);
    this.languageStore = stores.languageStore;
  }

  @computed
  get formattedDataArray() {
    return this.dataArray.map((item) => {
      let formmattedItem = {...item};
      if (this.languageStore.lang === "en") {
        for (let key in item) {
          if (key.includes("_en")) {
            formmattedItem[key.split("_")[0]] = item[key];
          }
        }
      }
      return formmattedItem;
    });
  }
  
  @action
  loadAll() {
    this.isLoading = true;
    return db
      .collection(TARGET_COLLECTION)
      .orderBy("orderNumber", "asc")
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

}

export default MebmberStore;
