import React, { useState } from "react";
import Coin from "./Coin";

function PiggyBank() {
  const [balance, setBalance] = useState(0);
  const [isDepositing, setIsDepositing] = useState(false);
  const [isWithdrawing, setIsWithdrawing] = useState(false);

  // deposit $
  const deposit = (amount) => {
    setIsDepositing(true);
    setTimeout(() => {
      setBalance(balance + amount);
      setIsDepositing(false);
    }, 500); // Adjust the timing to match your animation duration
  };

  // withdraw $
  const withdraw = (amount) => {
    if (balance >= amount) {
      setIsWithdrawing(true);
      setTimeout(() => {
        setBalance(balance - amount);
        setIsWithdrawing(false);
      }, 500);
    } else {
      alert("Not enough money in the piggy bank!");
    }
  };

  // display piggy bank image and deposit/withdraw buttons
  return (
    <div className="body">
      <h1>Piggy Pay</h1>
      <img src="pig.png" alt="Pig" class="center"></img>
      <div className="coin-container">
        <Coin isDepositing={isDepositing} />
        <Coin isDepositing={isWithdrawing} />
      </div>
      <p>Balance: ${balance.toFixed(2)}</p>
      <button onClick={() => deposit(10)}>Deposit $10</button>
      <button onClick={() => withdraw(10)}>Withdraw $10</button>
    </div>
  );
}

export default PiggyBank;
