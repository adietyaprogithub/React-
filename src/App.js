import React, { useRef, useState, useEffect } from "react";

export default function App() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const images = [
    "https://images.pexels.com/photos/325200/pexels-photo-325200.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/163856/sunset-train-road-163856.jpeg?auto=compress&cs=tinysrgb&w=600",
  ];

  const imageRef = useRef();

  useEffect(() => {
    if (imageRef.current) {
      imageRef.current.src = images[currentImageIndex];
    }
  }, [currentImageIndex, images]);

  const handleClick = () => {
    setCurrentImageIndex(currentImageIndex === 0 ? 1 : 0);
  };

  return (
    <div>
      <img ref={imageRef} alt="current" />
      <button onClick={handleClick}>Change Image</button>
    </div>
  );
}
