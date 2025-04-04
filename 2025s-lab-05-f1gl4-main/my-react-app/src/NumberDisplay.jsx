function NumberDisplay({ number }) {

    return (
      <div>
        {number > 10 
          ? <p>Your number {number} is correct</p> 
          : <p>Your number {number} is not correct</p>
        }
      </div>
    )
}
  
export default NumberDisplay
  