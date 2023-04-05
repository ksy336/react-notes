import React, { useContext, useEffect, useState } from 'react';
import { Context, IListItem } from '../../../store/context';
import ReactMarkdown from 'react-markdown';
import JoditEditorComponent from '../JoditEditor/JoditEditor';

type MainInfoProps = {
  item: IListItem
}
//1 марта 2023 г. в 17:36
const MainInfo = ({item}: MainInfoProps) => {
  const [editMode, setEditMode] = useState(false);
  // @ts-ignore
  const {setItem} = useContext(Context);

  useEffect(() => {
    setItem(item)
  }, [item]);

  const handleEditorClick = () => {
    setEditMode(true);
  }
  return (
    <div className="main-block-container" onClick={handleEditorClick}>
      {editMode ? (
        // <JoditEditorComponent />
        <TextArea />
      ) : (
        <>
          <div className="date-note">{item?.time}</div>
          <ReactMarkdown>{item?.title}</ReactMarkdown><ReactMarkdown>{item?.description}</ReactMarkdown>
        </>
      )}
    </div>
  );
};

export default MainInfo;