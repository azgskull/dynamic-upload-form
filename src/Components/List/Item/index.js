import React from 'react';
import sass from './Item.module.scss';

function Item() {
  return (
    <div className={sass.item}>
      <img src="https://picsum.photos/300/300" alt="file" />
      <div className={sass.controls}>
        <i className="far fa-trash-alt" />
      </div>
    </div>
  );
}

export default Item;
