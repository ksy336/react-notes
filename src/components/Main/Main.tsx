import React, { useContext } from 'react';
import { Context, IListItem } from '../../../store/context';
import MainInfo from '../MainInfo/MainInfo';

const Main = () => {
  // @ts-ignore
  const {markDownIds} = useContext(Context);
  return (
    <section>
      {markDownIds?.map((item: IListItem) => (
        <MainInfo
          key={item.id}
          item={item}
        />
      ))}
    </section>
  );
};

export default Main;