import React, { useContext } from 'react';
import Divider from '@mui/material/Divider';
import "./ListItem.css";
import { Context, IListItem } from '../../../../store/context';
import ReactMarkdown from 'react-markdown';

type ListItemProp = {
  item: IListItem;
}
const ListItem = ({item}: ListItemProp) => {
  // @ts-ignore
  const {setItemId, itemId} = useContext(Context);

  return (
    <section className="sidebar-block">
    <article className={`${itemId === item.id ? 'sidebar-content__active' : 'sidebar-content'}`} onClick={() => setItemId(item.id)}>
     <div className="sidebar-title">
       <ReactMarkdown children={item?.title} />
     </div>
      <div> {item.time}</div>
      <div className="sidebar-text">
        <ReactMarkdown children={item.content} />
      </div>
    </article>
      <Divider sx={{ backgroundColor: "#a9a9a9" }}  />
    </section>
  );
};

export default ListItem;