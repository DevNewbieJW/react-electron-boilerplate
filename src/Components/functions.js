import { createContext } from "react";

import base from "../base/base";

export const AppContext = createContext();

export const makeId = () => Math.random().toString(32).slice(2);

export const useFirestoreCollection = (collection) => {
  return base.firestore().collection(`${collection}`);
};
