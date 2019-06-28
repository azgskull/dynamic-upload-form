import React, { useState } from 'react';
import Input from '../Components/InputZone/Input';
import ListItem from '../Components/List/index';
import Item from '../Components/List/Item/index';

function UploadListing() {
  
  let [state, setState] = useState({
    files: []
  });

  let addFilesAction = (files) => {
    Object.values(files).map(file => (
      getBase64(file).then(datUrl => {
        let fileObject = {
          preview : datUrl,
          file: file
        };

        setState((state) => {
          return {
            files : [
              ...state.files,
              fileObject
            ]
          };
        })
      })
    ))
  }

  let getBase64 = async (file) => {
    let reader = new FileReader();
    reader.readAsDataURL(file);
    return new Promise(resolve => {
      reader.addEventListener('load', (e) => {
        resolve(e.target.result);
      });
    });
  }

  return (
    <>
      <Input addFilesAction = {addFilesAction} />
      <ListItem>
        {state.files.map((file, i) => (
          <Item key={`${file.file.name}_${i}`} {...file}/>
        ))}
      </ListItem>
    </>
  );
}

export default UploadListing;
