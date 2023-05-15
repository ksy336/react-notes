import React, { useState } from 'react';
import { IListItem } from '../../../store/context';
import ReactMarkdown from 'react-markdown';
import TextArea from '../TextArea/TextArea';
import "./MainInfo.css";

type MainInfoProps = {
  item: IListItem
}

const MainInfo = ({item}: MainInfoProps) => {
  const [editMode, setEditMode] = useState(false);

  const handleEditorClick = () => {
    setEditMode(true);
  }
  const date = new Date().toLocaleDateString("ru", {year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric',})
  return (
    <div className="main-block-container" onClick={handleEditorClick} onBlur={() => setEditMode(false)}>
      {editMode ? (
        <TextArea item={item} />
      ) : (
        <>
          <div className="date-note">{date}</div>
          <ReactMarkdown children={item?.title}/>
          <ReactMarkdown children={item?.content}/>
        </>
      )}
    </div>
  );
};

export default MainInfo;