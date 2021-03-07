import { observable, action, computed, makeObservable } from "mobx";

import db from "../db";

export const TARGET_COLLECTION = "products";
export const INITIAL_DATA = {
  isLoading: false,
  data: {},
  dataArray: [],
};

class ProductStore {
  @observable isLoading = INITIAL_DATA.isLoading;
  @observable dataArray = INITIAL_DATA.dataArray;

  constructor(initialState, { languageStore }) {
    makeObservable(this);
    this.languageStore = languageStore;
  }

  @computed
  get formattedDataArray() {
    return this.dataArray.map((item) => {
      let formmattedItem = { ...item };
      if (this.languageStore.lang === "en") {
        for (let key in item) {
          if (key.includes("_en")) {
            let originKey = key.split("_")[0];
            formmattedItem[originKey] = item[key] || item[originKey];
          }
        }
        formmattedItem.productList = formmattedItem.productList.map(product => {
          const formattedProduct = {...product};
          for (let key in product) {
            if (key.includes("_en")) {
              let originKey = key.split("_")[0];
              formattedProduct[originKey] = product[key] || product[originKey];
            }
          }
          console.log({formattedProduct})
          return formattedProduct;
        })
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
        action((querySnapshot) => {
          const dataArray = [];
          querySnapshot.forEach((doc) => {
            console.log(doc.id, " => ", doc.data());
            dataArray.push({ id: doc.id, ...(doc.data() || {}) });
          });
          this.dataArray = dataArray;
        })
      )
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
}

export default ProductStore;
