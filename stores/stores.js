import { makeObservable } from "mobx";
import { enableStaticRendering } from "mobx-react";
import { useMemo } from "react";

import TemplateStore from "./TemplateStore";
import NewsStore from "./NewsStore";
import AnnouncementStore from "./AnnouncementStore";
import PublicationStore from "./PublicationStore";
import PatentStore from "./PatentStore";
import CareerStore from "./CareerStore";
import MemberStore from "./MemberStore";
import ProductStore from "./ProductStore";
import LanguageStore from "./LanguageStore";
import BioprintingVideoStore from "./BioprintingVideoStore";

const isServer = typeof window === "undefined";
enableStaticRendering(isServer);

let store = null;

export class RootStore {
  // store간 데이터 연결이 필요할 때, RootStore에 작성함으로 Circular structure가 생기지 않도록합니다.

  constructor(initialData = {}) {
    this.languageStore = new LanguageStore(initialData, this.languageStore);
    this.templateStore = new TemplateStore(initialData.templateStore);
    this.announcementStore = new AnnouncementStore(
      initialData.announcementStore,
      {
        languageStore: this.languageStore,
      }
    );
    this.newsStore = new NewsStore(initialData.newsStore, {
      languageStore: this.languageStore,
    });
    this.publicationStore = new PublicationStore(initialData.publicationStore);
    this.patentStore = new PatentStore(initialData.patentStore, {
      languageStore: this.languageStore,
    });
    this.careerStore = new CareerStore(initialData.careerStore);
    this.memberStore = new MemberStore(initialData.memberStore, {
      languageStore: this.languageStore,
    });
    this.productStore = new ProductStore(initialData.productStore, {
      languageStore: this.languageStore,
    });
    this.bioprintingVideoStore = new BioprintingVideoStore(
      initialData.bioprintingVideoStore,
      {
        languageStore: this.languageStore,
      }
    );
  }
}

export default function initializeStore(initialData) {
  if (isServer) {
    return new RootStore(initialData);
  }
  if (store === null) {
    store = new RootStore(initialData);
  }
  return store;
}

export function useStore(initialState) {
  const store = useMemo(() => initializeStore(initialState), [initialState]);
  return store;
}
