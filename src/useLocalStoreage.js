import { useState } from "react";

export function useLocalStorage(key, initialValue) {
  const [storedValue, setStoredValue] = useState(() => {
    try {
      const item = window.localStorage.getItem(key);
      if(!item){
        window.localStorage.setItem(key, JSON.stringify(initialValue));
        return JSON.parse(window.localStorage.getItem(key))

      } else return JSON.parse(item)
    } catch (error) {
      return initialValue;
    }
  });

  const setValue = (value) => {
    try {                         
      setStoredValue(value);
      window.localStorage.setItem(key, JSON.stringify(value));
     
    } catch (error) {
      console.log(error);
    }
  };
  return [storedValue, setValue];
}
