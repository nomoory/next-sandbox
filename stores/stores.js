import { makeObservable } from "mobx";
import { enableStaticRendering } from "mobx-react";
import { useMemo } from "react";

import TemplateStore from "./TemplateStore";
import NewsStore from "./NewsStore";
import AnnouncementStore from "./AnnouncementStore";

const isServer = typeof window === "undefined";
enableStaticRendering(isServer);

let store = null;

export class RootStore {
  // store간 데이터 연결이 필요할 때, RootStore에 작성함으로 Circular structure가 생기지 않도록합니다.
  templateStore;
  announcementStore;
  newsStore;

  constructor(initialData = {}) {
    this.templateStore = new TemplateStore(initialData.templateStore);
    this.newsStore = new NewsStore(initialData.newsStore);
    this.announcementStore = new AnnouncementStore(
      initialData.announcementStore
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
