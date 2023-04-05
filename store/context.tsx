import React, { useEffect, useState } from 'react';
type ContextType = {
  children: React.ReactNode;
}
export interface IListItem {
  id: number;
  title: string;
  time: string;
  description: string;
}
const Context = React.createContext({});

const ContextProvider = ({children}:ContextType) => {
  const [listItems, setListItems] = useState<IListItem[]>([
    {id: 1, title: "#Фолди", time: new Date().toLocaleDateString(), description: "#Нет дополнительного текста"}, // description => content
    {id: 2, title: "#Заметка2", time: new Date().toLocaleDateString(), description: "#Нет дополнительного текста"},
    {id: 3, title: "#Заметка3", time: new Date().toLocaleDateString(), description: "Нет дополнительного текста"},
  ]);
  const [markDownIds, setMarkDownIds] = useState([]);
  const [title, setTitle] = useState("");
  const [item, setItem] = useState("");
  const [filteredNotesList, setFilteredNotesList] = useState();
  const saveBodyText = (newText: string) => {
    setTitle(newText)
  };
  // useEffect(() => {
  //   const itemData = JSON.parse(localStorage.getItem("item") as string);
  //   if(itemData) setItem(itemData);
  // }, []);
  // useEffect(() => {
  //   localStorage.setItem("item", JSON.stringify(item));
  // }, [item]);

  // useEffect(() => {
  //   const titleData = JSON.parse(localStorage.getItem("title") as string);
  //   if(titleData) setTitle(titleData);
  // }, []);
  //
  // useEffect(() => {
  //   localStorage.setItem("title", JSON.stringify(title));
  // }, [title]);

  useEffect(() => {
    const listData = JSON.parse(localStorage.getItem("listItem") as string);
    if(listData) setListItems(listData);
  }, []);
  useEffect(() => {
    localStorage.setItem("listItem", JSON.stringify(listItems));
  }, [listItems]);

  const addToList = (listItem: IListItem) => {
    setListItems((prev: any) => [...prev, listItem]);
  }

  const chooseMarkDownIds = (id: any) => {
    const filteredItems = listItems.filter((item: any) => item.id === id);
    // @ts-ignore
    setMarkDownIds(filteredItems)
  }

  return (
    <Context.Provider value={{
      listItems,
      addToList,
      chooseMarkDownIds,
      markDownIds,
      saveBodyText,
      title,
      setItem,
      item,
      filteredNotesList,
      setFilteredNotesList
    }}>
      {children}
    </Context.Provider>
  )
}
export {ContextProvider, Context};