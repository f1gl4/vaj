import './App.css'
import Greeting from './Greeting'
import NumberDisplay from './NumberDisplay'
import BurgerList from './BurgerList'

function App() {
  const name = "Your Name"
  const num = 19

  const burgerCount = 2
  const burgerName = "Classic '68 Cheese"

  return (
    <div>
      <h1>Hello, React!</h1>
      <p>My name is {name}</p>

      <Greeting />
      <NumberDisplay number={num} />
      <BurgerList count={burgerCount} name={burgerName} />

    </div>
  )
}

export default App
