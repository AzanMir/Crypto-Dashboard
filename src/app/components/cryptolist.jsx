"use client";

import { useState } from "react";
import "./cryptolist.css";

export default function CryptoList({ data }) {
  const [highest, setHighest] = useState(true);

  const sortedCoins = [...data].sort((a, b) =>
    highest
      ? b.current_price - a.current_price
      : a.current_price - b.current_price
  );

  return (
    <div className="dashboard">
      <h1 className="heading">🚀 Live Crypto Dashboard</h1>

      <p className="subheading">
        Live cryptocurrency prices powered by CoinGecko
      </p>

      <button
        className="sortBtn"
        onClick={() => setHighest(!highest)}
      >
        {highest ? "Sort: Highest → Lowest" : "Sort: Lowest → Highest"}
      </button>

      <div className="cryptoGrid">
        {sortedCoins.slice(0, 20).map((coin) => (
          <div className="card" key={coin.id}>
            <div className="coinTop">
              <img src={coin.image} alt={coin.name} />

              <div>
                <div className="coinName">{coin.name}</div>
                <div className="symbol">{coin.symbol}</div>
              </div>
            </div>

            <div className="price">
              ${coin.current_price.toLocaleString()}
            </div>

            <div className="rank">
              ⭐ Rank #{coin.market_cap_rank}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}