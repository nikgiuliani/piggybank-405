import React, { useState } from "react";

function PiggyBank() {
  const [balance, setBalance] = useState(0);
  const [isDepositing, setIsDepositing] = useState(false);
  const [isWithdrawing, setIsWithdrawing] = useState(false);
  const [isCoinInside, setIsCoinInside] = useState(true);
  const [amount, setAmount] = useState();
  const savingsGoal = 100;
  const percentageToGoal = (balance / savingsGoal) * 100;
  const isMobile = window.innerWidth <= 768;

  // define default color scheme and animal
  const [selectedColor, setSelectedColor] = useState("pink");
  const [selectedAnimal, setSelectedAnimal] = useState("pig");

  // Function to handle color and animal selection
  const handleColorAnimalChange = (event) => {
    const value = event.target.value;
    if (value.includes(" - ")) {
      const [color, animal] = value.split(" - ");
      setSelectedColor(color);
      setSelectedAnimal(animal);
    }
  };

  // deposit $
  const deposit = (amount) => {
    if (amount && amount > 0) {
      setIsDepositing(true);
      setIsCoinInside(true); // Coin is inside when depositing
      setAmount("");
      setTimeout(() => {
        setBalance(balance + amount);
        setIsDepositing(false);
      }, 500);
    } else if (amount < 0) alert("No negative numbers allowed!");
  };

  const withdraw = (amount) => {
    if (amount && amount > 0) {
      if (balance >= amount) {
        setIsWithdrawing(true);
        setIsCoinInside(false); // Coin is outside when withdrawing
        setAmount("");
        setTimeout(() => {
          setBalance(balance - amount);
          setIsWithdrawing(false);
        }, 500);
      } else {
        alert("Not enough money in the piggy bank!");
      }
    } else if (amount < 0) alert("No negative numbers allowed!");
  };

  // display piggy bank image and deposit/withdraw buttons
  // show current balance, savings goal, and percentage to reach savings goal
  return (
    <div className="body" style={{ padding: "10px" }}>
      <h1 style={{ marginBottom: "15px" }}>Piggy Pay</h1>
      {/* Dropdown to select color and animal */}
      <select onChange={handleColorAnimalChange}>
        <option value="pink - pig">Pink - Pig</option>
        <option value="purple - unicorn">Purple - Unicorn</option>
        <option value="teal - dinosaur">Teal - Dinosaur</option>
      </select>
      <div style={!isMobile ? { paddingBottom: "10px" } : {}}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "auto auto",
            columnGap: "35px",
            justifyContent: "center",
            paddingBottom: "-10px",
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
        <progress
          style={{
            width: "min(330px, 90vw)",
            height: "15px",
          }}
          className={
            selectedColor === "pink"
              ? "progress-pink"
              : selectedColor === "purple"
              ? "progress-purple"
              : "progress-teal"
          }
          value={percentageToGoal}
          max={savingsGoal}
        ></progress>
      </div>
      <div
        style={{
          display: !isMobile ? "flex" : "none",
          flexDirection: "flex-row",
          justifyContent: "center",
        }}
      >
        <div>
          <div
            style={{
              display: "flex",
              flexDirection: "flex-row",
              justifyContent: "center",
            }}
          >
            <input
              type="number"
              placeholder="Enter deposit amount"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
            />
            <div
              style={{
                display: "flex",
                flexDirection: "flex-row",
                justifyContent: "center",
              }}
            >
              <button
                onClick={() => setAmount(1)}
                className={
                  selectedColor === "pink"
                    ? "pink"
                    : selectedColor === "purple"
                    ? "purple"
                    : "teal"
                }
              >
                $1
              </button>
              <button
                style={{ margin: 0 }}
                onClick={() => setAmount(5)}
                className={
                  selectedColor === "pink"
                    ? "pink"
                    : selectedColor === "purple"
                    ? "purple"
                    : "teal"
                }
              >
                $5
              </button>
              <button
                onClick={() => setAmount(10)}
                className={
                  selectedColor === "pink"
                    ? "pink"
                    : selectedColor === "purple"
                    ? "purple"
                    : "teal"
                }
              >
                $10
              </button>
            </div>
          </div>
          <br></br>

          <div
            style={{
              display: "flex",
              flexDirection: "flex-row",
              justifyContent: "center",
            }}
          >
            <button
              onClick={() => deposit(parseFloat(amount))}
              className={
                selectedColor === "pink"
                  ? "pink"
                  : selectedColor === "purple"
                  ? "purple"
                  : "teal"
              }
            >
              Deposit
            </button>
            <button
              onClick={() => withdraw(parseFloat(isWithdrawing))}
              className={
                selectedColor === "pink"
                  ? "pink"
                  : selectedColor === "purple"
                  ? "purple"
                  : "teal"
              }
            >
              Withdraw
            </button>
          </div>
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
          src={`${selectedAnimal}.png`} // Change the image based on selectedAnimal
          alt={selectedAnimal}
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
          paddingTop: "10px",
        }}
      >
        <div>
          <div
            style={{
              display: "flex",
              flexDirection: "flex-row",
              justifyContent: "center",
            }}
          >
            <input
              type="number"
              placeholder="Enter deposit amount"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
            />
            <div
              style={{
                display: "flex",
                flexDirection: "flex-row",
                justifyContent: "center",
              }}
            >
              <button
                onClick={() => setAmount(1)}
                className={
                  selectedColor === "pink"
                    ? "pink"
                    : selectedColor === "purple"
                    ? "purple"
                    : "teal"
                }
              >
                $1
              </button>
              <button
                style={{ margin: 0 }}
                onClick={() => setAmount(5)}
                className={
                  selectedColor === "pink"
                    ? "pink"
                    : selectedColor === "purple"
                    ? "purple"
                    : "teal"
                }
              >
                $5
              </button>
              <button
                onClick={() => setAmount(10)}
                className={
                  selectedColor === "pink"
                    ? "pink"
                    : selectedColor === "purple"
                    ? "purple"
                    : "teal"
                }
              >
                $10
              </button>
            </div>
          </div>
          <br></br>
          <div
            style={{
              display: "flex",
              flexDirection: "flex-row",
              justifyContent: "center",
            }}
          >
            <button
              onClick={() => deposit(parseFloat(amount))}
              className={
                selectedColor === "pink"
                  ? "pink"
                  : selectedColor === "purple"
                  ? "purple"
                  : "teal"
              }
            >
              Deposit
            </button>
            <button
              onClick={() => withdraw(parseFloat(amount))}
              className={
                selectedColor === "pink"
                  ? "pink"
                  : selectedColor === "purple"
                  ? "purple"
                  : "teal"
              }
            >
              Withdraw
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PiggyBank;
