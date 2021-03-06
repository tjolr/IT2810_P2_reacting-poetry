import { useState } from 'react';

export enum StorageType {
  LocalStorage = 'localStorage',
  SessionStorage = 'sessionStorage',
}

/* Web storage code snippet from dev.to: https://dev.to/sanderdebr/building-a-custom-react-localstorage-hook-2bja */

/* Tilpasset til å kunne bruke Local og Session storage i samme funksjon */
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
/* end of code snippet */

export default useWebStorage;
