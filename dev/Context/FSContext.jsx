import React, { createContext } from "react";
import { ref, getDownloadURL, listAll } from "firebase/storage";
import { storage } from "../src/fbconfig";

export const FSContext = createContext();
const FSProvider = ({ children }) => {
  const getFileFrom = async (filepath) => {
    const reference = ref(storage, filepath);
    const url = await getDownloadURL(reference);
    return { title: reference.name, url: url };
  };

  const getFilesFrom = async (folderPath) => {
    const referenceList = ref(storage, folderPath);
    const list = await listAll(referenceList);
    const urls = [];
    for (const item of list.items) {
      const url = await getDownloadURL(item);
      urls.push({ title: item.name, url: url });
    }
    return urls;
  };

  const value = { getFileFrom, getFilesFrom };

  return <FSContext.Provider value={value}>{children}</FSContext.Provider>;
};

export default FSProvider;
