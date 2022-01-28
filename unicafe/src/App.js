import React, { useState } from 'react'

const StatisticLine = (props) => {
  return (
    <>
    <p>{props.text} {props.value}</p>
    </>
  )
}

const Statistics = (props) =>
{
  if (props.counter === 0){
    return(
      <h3>no data</h3>
    )
  }
  return(
    <div>
      <StatisticLine text="good" value ={props.good} />
      <StatisticLine text="neutral" value ={props.neutral} />
      <StatisticLine text="bad" value ={props.bad} />
      <StatisticLine text="average" value ={props.average} />
      <StatisticLine text="positive" value ={props.positive + '%'}/>
    </div>
  )
}

const Button = (props) => {
  return (
    <button onClick={props.onClick}>
      {props.text}
    </button>
  )
}

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [average, setAverage] = useState(0)
  const [counter, setCounter] = useState(0)

  const goodFeedback = () => {
    setGood(good + 1)
    setAverage(average + 1)
    setCounter(counter + 1)
  }

  const neutralFeedback = () => {
    setNeutral(neutral + 1)
    setCounter(counter + 1)
  }

  const badFeedback = () => {
    setBad(bad + 1)
    setAverage(average - 1)
    setCounter(counter + 1)
  }
 
  return (
    <>
    <h1>give feedback</h1>
    <Button onClick={goodFeedback} text = "good"/>
    <Button onClick={neutralFeedback} text = "neutral"/>
    <Button onClick={badFeedback} text = "bad"/>
    <h1>statistics</h1>
    <Statistics good={good} counter={counter} neutral={neutral} bad={bad} average={average/counter} positive={good/counter * 100}/>
    </>
  )
}

export default App
