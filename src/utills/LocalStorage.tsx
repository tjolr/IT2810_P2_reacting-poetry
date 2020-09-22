import { useState } from 'react';

export enum StorageType {
  LocalStorage = 'localStorage',
  SessionStorage = 'sessionStorage',
}

export const useWebStorage = (key, initialValue, storageType: StorageType) => {
  const [storedValue, setStoredValue] = useState(() => {
    try {
      const item = window[storageType].getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (err) {
      console.error(err);
      return initialValue;
    }
  });

  const setValue = (value) => {
    try {
      const valueToStore =
        value instanceof Function ? value(storedValue) : value;
      setStoredValue(valueToStore);
      window[storageType].setItem(key, JSON.stringify(valueToStore));
    } catch (err) {
      console.error(err);
    }
  };

  return [storedValue, setValue];
};

export default useWebStorage;
