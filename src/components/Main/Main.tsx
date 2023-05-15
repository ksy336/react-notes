import React, { useContext } from 'react';
import { Context, IListItem } from '../../../store/context';
import MainInfo from '../MainInfo/MainInfo';

const Main = () => {
  // @ts-ignore
  const {selectedNote} = useContext(Context);
  return (
    <section>
        <MainInfo
          item={selectedNote}
        />
    </section>
  );
};

export default Main;