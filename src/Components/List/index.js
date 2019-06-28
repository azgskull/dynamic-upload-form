import React from 'react';
import sass from './List.module.scss';

function ListItem({ children }) {
  return <div className={sass.list}>{children}</div>;
}

export default ListItem;
