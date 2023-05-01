import React, { useRef } from "react";

export default function App() {
  const fileInputRef = useRef(null);

  const handleButtonClick = () => {
   fileInputRef.current.click()
  };

  return (
    <div>
      <button onClick={handleButtonClick}>Pick a file</button>
      <input type="file" style={{ display: "none" }} ref={fileInputRef} />
    </div>
  );
}
