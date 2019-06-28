import React from 'react';
import sass from './Input.module.scss';

function Input({ addFilesAction }) {
  let inputChangeHandler = (e) => {
    let files = e.target.files;
    if(files.length > 0) {
      addFilesAction(files)
    }
  };

  return (
    <div className={sass.file}>
      <input
        id="inputFileUpload"
        onChange={inputChangeHandler}
        type="file"
        multiple accept=".jpg,.png,.gif"
      />
      <label htmlFor="inputFileUpload">
        <p>Drop Or click here to upload</p>
        <span>Accepted format : jpg | png | gif</span>
      </label>
    </div>
  );
}

export default Input;
