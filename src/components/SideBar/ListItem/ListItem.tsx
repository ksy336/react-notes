import React, { useContext, useState } from 'react';
import Divider from '@mui/material/Divider';
import "./ListItem.css";
import { Context, IListItem } from '../../../../store/context';

type ListItemProp = {
  item: IListItem
}
const ListItem = ({item}: ListItemProp) => {
  // @ts-ignore
  const {chooseMarkDownIds, listItems} = useContext(Context);
  const [isActive, setIsActive] = useState(false);
  const chooseMarkDownText = () => {
    chooseMarkDownIds(item.id);
    setIsActive(true);
  }

  return (
    <>
    <article className={`${isActive ? 'sidebar-content__active' : 'sidebar-content'}`} onClick={chooseMarkDownText}>
      <div> {item.title} </div>
      <div> {item.time}</div>
      <div> {item.description} </div>
    </article>
      <Divider sx={{ backgroundColor: "#a9a9a9" }}  />
    </>
  );
};

export default ListItem;