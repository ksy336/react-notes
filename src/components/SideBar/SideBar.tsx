import React, { useContext, useState } from 'react';
import ListItem from './ListItem/ListItem';
import { Context, IListItem } from '../../../store/context';



const SideBar = () => {
  // @ts-ignore
  const { listItems, searchText } = useContext(Context);
  const filteredItems = listItems.filter((item: IListItem) => item?.title.toLowerCase().includes(searchText.toLowerCase()))
  return (
    <>
      {filteredItems?.map((item: IListItem) => (
        <ListItem
          key={item.id}
          item={item}
        />
      ))}
    </>
  );
};

export default SideBar;