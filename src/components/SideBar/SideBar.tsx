import React, { useContext } from 'react';
import ListItem from './ListItem/ListItem';
import { Context, IListItem } from '../../../store/context';



const SideBar = () => {
  // @ts-ignore
  const { filteredNotesList } = useContext(Context);
  return (
    <>
      {filteredNotesList?.map((item: IListItem) => (
        <ListItem
          key={item.id}
          item={item}
        />
        ))
      }
      {/*/!*)}*/}
      {/*{filteredNotesList?.length === 0 ? (*/}
      {/*  listItems?.map((item: IListItem) => (*/}
      {/*    <ListItem*/}
      {/*      key={item.id}*/}
      {/*      item={item}*/}
      {/*    />*/}
      {/*  ))*/}
      {/*) : (*/}
      {/*  filteredNotesList?.map((item: IListItem) => (*/}
      {/*    <ListItem*/}
      {/*      key={item.id}*/}
      {/*      item={item}*/}
      {/*    />*/}
      {/*  ))*/}
      {/*)}*/}
    </>
  );
};

export default SideBar;