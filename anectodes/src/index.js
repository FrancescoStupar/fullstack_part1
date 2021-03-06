import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const App = (props) => {
  const [selected, setSelected] = useState(0)
  const [results, setResults] = useState(Array.apply(null, new Array(6)).map(Number.prototype.valueOf,0))
  const [max, setMax] = useState(0)
  
  const random = () => {
  setSelected(Math.floor(Math.random()*6))
  console.log(selected)
}



const temp = [...results]

const vote = () => {
temp[selected] += 1
setResults(temp)
setMax(temp.indexOf(Math.max(...temp)))
}


  return (
    <div>
      <h1>Anectode of the day</h1>
      <p>{props.anecdotes[selected]}</p>
      <p>has {results[selected]} votes</p>
      <p><button onClick={random}>next anectode</button>
      <button onClick={vote}>vote</button></p>
      <h1>Anectode with the most votes</h1>
      {props.anecdotes[max]}
    </div>
  )
}

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]


ReactDOM.render(
  <App anecdotes={anecdotes} />,
  document.getElementById('root')
)

