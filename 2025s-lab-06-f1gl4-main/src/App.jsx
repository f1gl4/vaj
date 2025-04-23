// TODO: import components here
import { Counter } from '../src/components/Counter.jsx'
import { Lottery } from '../src/components/Lottery.jsx'
import { WindowSizer } from './components/WindowSizer.jsx'
import { Stopwatch } from './components/Stopwatch.jsx'
import { StarWars } from './components/StarWars.jsx'
import React from 'react'

function App() {
  return <div className="App">{/* TODO: render components here */}
  <Counter /> <Lottery /> <WindowSizer /> <Stopwatch /> <StarWars />
  </div>;
}

export default App;
