import React from 'react';
import sass from './Item.module.scss';

function Item({ preview, files }) {
  return (
    <div className={sass.item}>
      <div className={sass.r1x1}></div>
      <div className={sass.wrapper}>
        <img src={preview} alt="file" />
        <div className={sass.controls}>
          <i className="far fa-trash-alt" />
        </div>
      </div>
    </div>
  );
}

export default Item;
