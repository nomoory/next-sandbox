import { observable, action, computed, makeObservable } from "mobx";
import { i18n } from "../i18n";

export const INITIAL_DATA = {
  isLoading: false,
  data: {},
  dataArray: [],
};

export const DATA_COUNT_IN_A_PAGE = 5;

class LangaugeStore {
  @observable lang = "ko";

  constructor(initialState) {
    makeObservable(this);
    this.lang = "ko";
    i18n.changeLanguage(this.lang);
  }

  @action
  setLanguage(lang = "ko") {
    this.lang = lang;
  }

  @action
  toggleLanguage() {
    const nextLang = i18n.language === "en" ? "ko" : "en";
    i18n.changeLanguage(nextLang);
    this.lang = nextLang;
  }
}

export default LangaugeStore;
