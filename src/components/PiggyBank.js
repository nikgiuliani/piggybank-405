import React, { useState } from "react";

function PiggyBank() {
  const [balance, setBalance] = useState(0);
  const [isDepositing, setIsDepositing] = useState(false);
  const [isWithdrawing, setIsWithdrawing] = useState(false);
  const [isCoinInside, setIsCoinInside] = useState(true);
  const savingsGoal = 100;
  const percentageToGoal = (balance / savingsGoal) * 100;

  // deposit $
  const deposit = (amount) => {
    setIsDepositing(true);
    setIsCoinInside(true); // Coin is inside when depositing
    setTimeout(() => {
      setBalance(balance + amount);
      setIsDepositing(false);
    }, 500);
  };

  const withdraw = (amount) => {
    if (balance >= amount) {
      setIsWithdrawing(true);
      setIsCoinInside(false); // Coin is outside when withdrawing
      setTimeout(() => {
        setBalance(balance - amount);
        setIsWithdrawing(false);
      }, 500);
    } else {
      alert("Not enough money in the piggy bank!");
    }
  };

  // display piggy bank image and deposit/withdraw buttons
  // show current balance, savings goal, and percentage to reach savings goal
  return (
    <div className="body">
      <h1>Piggy Pay</h1>
      <div>
        <p>Balance: ${balance.toFixed(2)}</p>
        <p>Savings Goal: ${savingsGoal.toFixed(2)}</p>
        <p>Percentage to Savings Goal: {percentageToGoal.toFixed(0)}%</p>
      </div>
      <div className="coin-container">
        {isCoinInside ? (
          <div className={`coin deposit`}>${isDepositing}</div>
        ) : (
          <div className={`coin withdraw`}>${isWithdrawing}</div>
        )}
      </div>
      <div className="piggy-container">
        <img src="pig.png" alt="Pig" className="piggy"></img>
      </div>
      <div>
        <input
          type="number"
          placeholder="Enter deposit amount"
          value={isDepositing}
          onChange={(e) => setIsDepositing(e.target.value)}
        />
        <br></br>
        <button onClick={() => deposit(parseFloat(isDepositing))}>
          Deposit
        </button>
      </div>
      <br></br>

      <div>
        <input
          type="number"
          placeholder="Enter withdrawal amount"
          value={isWithdrawing}
          onChange={(e) => setIsWithdrawing(e.target.value)}
        />
        <br></br>
        <button onClick={() => withdraw(parseFloat(isWithdrawing))}>
          Withdraw
        </button>
      </div>
    </div>
  );
}

export default PiggyBank;
