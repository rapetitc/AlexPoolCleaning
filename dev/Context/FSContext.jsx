import React, { createContext } from "react";
import { ref, getDownloadURL, listAll } from "firebase/storage";
import { storage } from "../src/FB";

export const FSContext = createContext();
const FSProvider = ({ children }) => {
  const getImgFrom = async (path) => {
    const reference = ref(storage, path);
    const url = await getDownloadURL(reference);
    return url;
  };

  const getAllImgsFrom = async (folderPath) => {
    const referenceList = ref(storage, folderPath);
    const list = await listAll(referenceList);
    const urls = [];
    for (const iterator of list.items) {
      const url = await getDownloadURL(iterator);
      urls.push(url);
    }
    return urls;
  };

  const value = { getImgFrom, getAllImgsFrom };

  return <FSContext.Provider value={value}>{children}</FSContext.Provider>;
};

export default FSProvider;
