import React from 'react';
import sass from './Input.module.scss';

function Input() {
  return (
    <div className={sass.file}>
      <input id="inputFileUpload" type="file" multiple accept=".jpg,.png,.gif" />
      <label htmlFor="inputFileUpload">
        <p>Drop Or click here to upload</p>
        <span>Accepted format : jpg | png | gif</span>
      </label>
    </div>
  );
}

export default Input;
