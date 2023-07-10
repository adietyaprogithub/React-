import axios from "axios";
import React, { useEffect, useState } from "react";
import "./App.css";

export default function App() {
  const [data, setdata] = useState([]);
  const [sortedData, setSortedData] = useState([]);
  const [isAscending, setIsAscending] = useState(true);

  const crypto = async () => {
    try {
      const response = await axios.get(
        "https://api.coincap.io/v2/assets?limit=100"
      );
      const result = response.data.data;
      setdata(result);
      setSortedData(result);
    } catch (error) {
      console.log("Error fetching cryptocurrency data:", error);
    }
  };

  const sortData = () => {
    const sorted = [...sortedData].sort((a, b) =>
      isAscending ? a.priceUsd - b.priceUsd : b.priceUsd - a.priceUsd
    );
    setSortedData(sorted);
    setIsAscending(!isAscending);
  };

  useEffect(() => {
    crypto();
  }, []);

  return (
    <div className="main">
      <h1>Cryptocurrency Info</h1>
      <div className="btn">
      <button className="btn1" onClick={crypto}>Refresh</button>
      <button className="btn1"  onClick={sortData}>Sort</button>
      </div>
      <div className="main2">
        {sortedData.map((item) => (
          <div className="main3" key={item.id}>
            <p>Symbol: {item.symbol}</p>
            <p>Market Cap: {item.marketCapUsd}</p>
            <p>Price: {item.priceUsd}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
