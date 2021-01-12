import { observable, action, computed, makeObservable } from "mobx";

import db from "../db";

export const TARGET_COLLECTION = "products";
export const INITIAL_DATA = {
  isLoading: false,
  data: {},
  dataArray: []
};

class ProductStore {
  @observable isLoading = INITIAL_DATA.isLoading;
  @observable dataArray = INITIAL_DATA.dataArray;

  constructor() {
    makeObservable(this);
  }

  @computed
  get formattedDataArray() {
    return dataArray;
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

export default ProductStore;
