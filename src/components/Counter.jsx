import React, { useState } from 'react'

const Counter = props => {
  const [counter, setCounter] = useState(0)
  const increment = () => {
    setCounter(counter + 1)
  }

  const decrement = () => {
    setCounter(counter - 1)
  }
  return (
    <div className="Counter">
      <h1>Counter</h1>
      <h2>{counter}</h2>
      <div>
        <button onClick={decrement}>-</button>
        <button onClick={increment}>+</button>
      </div>
    </div>
  )
}

export default Counter
