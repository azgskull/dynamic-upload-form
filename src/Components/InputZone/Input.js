import React, { useEffect } from 'react';
import sass from './Input.module.scss';

function Input({ addFilesAction, isListFull }) {
  
  let inputChangeHandler = e => {
    let target = e.target
    let files = target.files;
    if (files.length > 0) {
      addFilesAction(files);
      target.value = '';
    }
  };


  useEffect(() => {

  }, [isListFull]);

  return (
    <div className={[sass.file, isListFull ? sass.full : ''].join(' ')}>
      <input
        id="inputFileUpload"
        onChange={inputChangeHandler}
        type="file"
        multiple
        accept=".jpg,.png,.gif"
      />
      <label htmlFor="inputFileUpload">
        <p>Drop Or click here to upload</p>
        <span>Accepted format : jpg | png | gif</span>
      </label>
    </div>
  );
}

export default Input;
