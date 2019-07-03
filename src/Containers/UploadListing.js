import React, { useState } from 'react';
import Input from '../Components/InputZone/Input';
import ListItem from '../Components/List/index';
import Item from '../Components/List/Item/index';

function UploadListing() {
  let [state, setState] = useState({
    files: []
  });

  let addFilesAction = files => {
    for(let file of files) {
      let dataUrl = URL.createObjectURL(file);
      loadImg(dataUrl, file);
    }
  };

  let loadImg = (dataUrl, file) => {
    let fileObject = {
      preview: dataUrl,
      file: file
    };
      
    setState(state => {
      return {
        files: [...state.files, fileObject]
      };
    });
  }

  let filterImageAction = indexImage => {
    setState(state => {
      return {
        files: state.files.filter((file, i) => i !== indexImage)
      };
    });
  };

  return (
    <>
      <Input isListFull={state.files.length > 0} addFilesAction={addFilesAction} />
      <ListItem>
        {state.files.map((file, i) => (
          <Item filterImageAction={() => filterImageAction(i)} key={`${file.file.name}_${i}`} {...file} />
        ))}
      </ListItem>
    </>
  );
}

export default UploadListing;
