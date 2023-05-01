import React from "react";
import { useRef } from "react";

export default function App() {
  const fileInputRef = useRef(null);

  const handleclickButton = () => {
    fileInputRef.current.click();
  };

  return (
    <div>
      <button onClick={handleclickButton}> Pick the File </button>
      <input type="text" ref={fileInputRef} />
    </div>
  );
}
