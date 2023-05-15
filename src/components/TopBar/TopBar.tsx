import React, { useContext } from 'react';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import GridViewIcon from '@mui/icons-material/GridView';
import DeleteIcon from '@mui/icons-material/Delete';
import "./TopBar.css";
import { Context } from '../../../store/context';

const TopBar = () => {
  // @ts-ignore
  const {removeFromList, itemId} = useContext(Context);
  const deleteHandler = () => {
    removeFromList(itemId); // id
  }
    return (
        <section className="topbar">
            <article className="topbar-items">
              <div className="list-icon">
                <FormatListBulletedIcon />
              </div>
              <div className="grid-icon">
                <GridViewIcon />
              </div>
              <div className="grid-delete" onClick={deleteHandler}>
                <DeleteIcon />
              </div>
            </article>
          <div>Сегодня</div>
        </section>
    );
};

export default TopBar;