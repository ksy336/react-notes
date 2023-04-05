import React from 'react';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import GridViewIcon from '@mui/icons-material/GridView';
import DeleteIcon from '@mui/icons-material/Delete';
import "./TopBar.css";

const TopBar = () => {
    return (
        <section className="topbar">
            <article className="topbar-items">
              <div className="list-icon">
                <FormatListBulletedIcon />
              </div>
              <div className="grid-icon">
                <GridViewIcon />
              </div>
              <div className="grid-delete">
                <DeleteIcon />
              </div>
            </article>
          <div>Сегодня</div>
        </section>
    );
};

export default TopBar;