import React, {useState} from 'react'
import { WinningNumbers } from './WinningNumbers';


function Lottery() {
  // TODO: Change the component to use state
  const [lotteryNumbers, setLotteryNumbers] = useState([]);

  const rollNextNumber = () => {
    const nextNumber = Math.floor(Math.random() * 100);
    setLotteryNumbers((prevNumbers) => [...prevNumbers, nextNumber]);
  };

  return (
    <div className="Lottery">
      {lotteryNumbers.length < 10 ? (
      <div className="TodaysNumbers">
          <div style={{ padding: 5 }}>
            Today's numbers are: {JSON.stringify(lotteryNumbers)}
          </div>
          <button
            onClick={rollNextNumber}
          >
            Roll next number
          </button>
        </div>
      ) : (
        <WinningNumbers numbers={lotteryNumbers} />
      )}
    </div>
  );
}

export { Lottery };
