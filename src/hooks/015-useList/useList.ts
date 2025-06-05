import React from 'react';

export default function useList<T>(defaultList: T[]) {
  const [list, setList] = React.useState(defaultList);

  const push = React.useCallback((item: T) => {
    setList((currList) => [...currList, item]);
  }, []);

  const removeAt = React.useCallback((idxToRemove: number) => {
    setList((currList) => {
      const clonedList = [...currList];
      clonedList.splice(idxToRemove, 1);
      return clonedList;
    });
  }, []);

  const insertAt = React.useCallback((idxToInsert: number, element: T) => {
    setList((currList) => {
      const clonedList = [...currList];
      clonedList.splice(idxToInsert, 0, element);
      return clonedList;
    });
  }, []);

  const updateAt = React.useCallback((idxToUpdate: number, element: T) => {
    setList((currList) => {
      const clonedList = [...currList];
      clonedList[idxToUpdate] = element;
      return clonedList;
    });
  }, []);

  const clear = React.useCallback(() => {
    setList([]);
  }, []);

  return [
    list,
    { set: setList, push, removeAt, insertAt, updateAt, clear },
  ] as const;
}
