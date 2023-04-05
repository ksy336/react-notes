import React, { useContext, useEffect, useState } from 'react';
import iconNotes from "../../../public/Edit_icon-icons.com_71853.svg";
import iconFonts from "../../../public/icons8-font-size-64.svg";
import search from "../../../public/free-icon-search-2997940.svg";
import "./TopRightBar.css";
import { Context, IListItem } from '../../../store/context';

const TopRightBar = () => {
  // @ts-ignore
  const {listItems, setFilteredNotesList} = useContext(Context);
  const [searchText, setSearchText] = useState("");
  const filteredNotes = listItems
    ?.slice()
    ?.reverse()
    ?.filter((item: IListItem) => item?.title?.toLowerCase()?.includes(searchText.toLowerCase()))
    ?.reverse();

  useEffect(() => {
    setFilteredNotesList(filteredNotes);
  }, [searchText]);

  return (
    <>
      <section className="edit-container">
        <div className="notes-block">
          <img src={iconNotes} alt="notes icon" width="30" height="30" />
        </div>
        <div className="fonts-block">
          <img src={iconFonts} alt="fonts icon" width="24" height="24" />
        </div>
        <div className="search-block">
          <input
            type="text"
            placeholder="Поиск"
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setSearchText(e.target.value)}
          />
          <img src={search} alt="search icon" className="search-icon" />
        </div>
      </section>
    </>
  );
};

export default TopRightBar;