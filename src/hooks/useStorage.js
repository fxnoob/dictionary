import { useState, useEffect } from "react";
import dbService from "../services/dbService";
import schema from "../services/schema";
export default function useStorage(key) {
  const [ storedValue, setStoredValue] = useState(schema.data[key]); // default value
  const init = async () => {
    try {
      const { [key]: keyValue } = await dbService.get(key);
      setStoredValue(keyValue);
      // eslint-disable-next-line no-empty
    } catch (e) {}
  };
  useEffect(() => {
    init();
  }, []);
  const setStoredValueCustom = async (keyValue) => {
    await dbService.set({ [key]: keyValue });
    setStoredValue(keyValue);
  };
  return [storedValue, setStoredValueCustom];
}