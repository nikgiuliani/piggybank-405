import React, { useState } from "react";

function PiggyBank() {
  const [balance, setBalance] = useState(0);
  const [isDepositing, setIsDepositing] = useState(false);
  const [isWithdrawing, setIsWithdrawing] = useState(false);
  const [isCoinInside, setIsCoinInside] = useState(true);
  const savingsGoal = 100;
  const percentageToGoal = (balance / savingsGoal) * 100;
  const isMobile = window.innerWidth <= 768;

  // deposit $
  const deposit = (amount) => {
    if (amount) {
      setIsDepositing(true);
      setIsCoinInside(true); // Coin is inside when depositing
      setTimeout(() => {
        setBalance(balance + amount);
        setIsDepositing(false);
      }, 500);
    }
  };

  const withdraw = (amount) => {
    if (amount) {
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
    }
  };

  // display piggy bank image and deposit/withdraw buttons
  // show current balance, savings goal, and percentage to reach savings goal
  return (
    <div className="body" style={{ padding: "10px" }}>
      <h1>Piggy Pay</h1>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "auto auto",
          columnGap: "35px",
          justifyContent: "center",
        }}
      >
        <p style={{ display: "flex", justifyContent: "flex-start" }}>
          Balance:
        </p>
        <p style={{ display: "flex", justifyContent: "flex-start" }}>
          ${balance.toFixed(2)}
        </p>
        <p style={{ display: "flex", justifyContent: "flex-start" }}>
          Savings Goal:
        </p>
        <p style={{ display: "flex", justifyContent: "flex-start" }}>
          ${savingsGoal.toFixed(2)}
        </p>
        <p style={{ display: "flex", justifyContent: "flex-start" }}>
          Percentage to Savings Goal:
        </p>
        <p style={{ display: "flex", justifyContent: "flex-start" }}>
          {percentageToGoal.toFixed(0)}%
        </p>
      </div>
      <div
        style={{
          display: !isMobile ? "flex" : "none",
          flexDirection: "flex-row",
          justifyContent: "center",
        }}
      >
        <div style={{ paddingRight: "15px" }}>
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
      <div className="coin-container">
        {isCoinInside ? (
          <div className={`coin deposit`}>${isDepositing}</div>
        ) : (
          <div className={`coin withdraw`}>${isWithdrawing}</div>
        )}
      </div>
      <div className="piggy-container">
        <img
          src="pig.png"
          alt="Pig"
          className="piggy"
          height={"50px"}
          width={"50px"}
        ></img>
      </div>
      <div
        style={{
          display: isMobile ? "flex" : "none",
          flexDirection: "flex-row",
          justifyContent: "center",
        }}
      >
        <div style={{ paddingRight: "15px" }}>
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
    </div>
  );
}

export default PiggyBank;
