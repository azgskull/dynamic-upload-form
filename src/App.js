import React from "react";

import "./App.scss";

export default function App() {
  return (
    <div className="h-screen w-full bg-grey-darkest flex justify-center items-center">
      <div className="relative">
        <input
          type="file"
          id="file"
          className="opacity-0 absolute top-0 left-0 w-full h-full"
          multiple
        />
        <label
          htmlFor="file"
          className="block w-64 h-56 bg-grey-darker rounded hover:bg-grey-darker"
        />
      </div>
    </div>
  );
}
