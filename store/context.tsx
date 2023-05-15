import React, { useEffect, useState } from 'react';
type ContextType = {
  children: React.ReactNode;
}
export interface IListItem {
  id: number;
  title: string;
  time: string;
  content: string;
}
const Context = React.createContext({});

const ContextProvider = ({children}:ContextType) => {
  const [listItems, setListItems] = useState<IListItem[]>([
    {id: 1, title: "Фолди", time: new Date().toLocaleDateString(), content: "#Нет дополнительного текста#"},
    {id: 2, title: "Заметка2", time: new Date().toLocaleDateString(), content: "#Нет дополнительного текста#"},
    {id: 3, title: "Заметка3", time: new Date().toLocaleDateString(), content: "Нет дополнительного текста#"},
  ]);
  const [item, setItem] = useState("");
  const [itemId, setItemId] = useState(); // чтобы сохранить id
  const selectedNote = listItems.find((item) => item.id === itemId); // вернет объект
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    const listData = JSON.parse(localStorage.getItem("listItems") as string);
    if(listData) setListItems(listData);
  }, []);
  useEffect(() => {
    localStorage.setItem("listItems", JSON.stringify(listItems));
  }, [listItems]);

  const addToList = (listItem: IListItem) => {
    setListItems((prev: any) => [...prev, listItem]);
  }
  const removeFromList = (id: number) => {
    const filteredList = listItems.filter((item) => item.id !== id);
    setListItems(filteredList);
  }

  return (
    <Context.Provider value={{
      listItems,
      setListItems,
      selectedNote,
      setItem,
      item,
      setItemId,
      itemId,
      removeFromList,
      addToList,
      setSearchText,
      searchText
    }}>
      {children}
    </Context.Provider>
  )
}
export {ContextProvider, Context};