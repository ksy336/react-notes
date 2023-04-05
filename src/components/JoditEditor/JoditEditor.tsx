import React, { useContext, useMemo, useRef, useState } from 'react';
import JoditEditor from 'jodit-react';
import { Context } from '../../../store/context';
import set = Reflect.set;

const JoditEditorComponent = ({placeholder}: any) => {
  // @ts-ignore
  const {saveBodyText, item} = useContext(Context);
  const editor = useRef(null);
  const [content, setContent] = useState<string>(item?.title);
  // @ts-ignore
  saveBodyText(editor?.current?.value);
  // @ts-ignore
  const config = {
      readonly: false,
      placeholder: placeholder || ""
  };

  return (
    <JoditEditor
      value={content}
      config={config}
      onBlur={(newContent) => setContent(newContent)}
    />
  );
};

export default JoditEditorComponent;