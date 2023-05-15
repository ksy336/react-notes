import React, { useContext } from 'react';
import { Context, IListItem } from '../../../store/context';
import "./TextArea.css";

type TextAreaProps = {
  item?: IListItem;
}
const TextArea = ({item}: TextAreaProps) => {
  // @ts-ignore
  const {setListItems} = useContext(Context);

  const saveTextInEditor = (text: string) => {
    const strings = text.split("\n");
    const title = strings[0];
    const content = strings.slice(1).join("\n");
    setListItems((items:IListItem[]) => {
      return items.map((listItem) => listItem.id === item?.id ? {...item, title, content} : listItem)
    })
  }

  const date = new Date().toLocaleDateString("ru", {year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric',})

  return (
    <>
      <div className="date-note">{date}</div>
      <textarea
        className="textarea-content"
        onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => saveTextInEditor(e.target.value)}
      >
        {item?.title.concat(`\n${item?.content}`)}
      </textarea>
    </>
  );
};

export default TextArea;