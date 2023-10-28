import React from "react";

function Coin({ isDepositing }) {
  return (
    <div className={`coin ${isDepositing ? "deposit" : "withdraw"}`}></div>
  );
}

export default Coin;
