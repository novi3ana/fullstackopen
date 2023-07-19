import { useState } from 'react'

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]
   
  const [selected, setSelected] = useState(0)
  const [currentPoint, setCurrentPoint] = useState(0)
  const empty = new Uint8Array(anecdotes.length)
  const [points, addPoint] = useState([...empty])

  const handleNext = () => {
    let random = 0;
    do{
      random = Math.floor(Math.random() * anecdotes.length)
    }
    while(selected === random)
    setSelected(random)
    setCurrentPoint(points[random]);
    console.log(random)

  }
  
  const handlePoints = () => {
    const copy = [...points]
    const updatedPoint = copy[selected] + 1
    copy[selected] = updatedPoint

    setCurrentPoint(updatedPoint);
    addPoint([...copy])


  }

  return (
    <div>
      <p>Anecdote of the day</p>
      {anecdotes[selected]}
      <p>has {currentPoint} votes</p>
      <p>
      <button onClick={handlePoints}>Vote</button>
      <button onClick={handleNext}>Next Anecdote</button>
      </p>
      <p>Anectode with most votes</p>
      <p>{anecdotes[points.findIndex((x) => x === Math.max(...points))]}</p>
      <p>has {Math.max(...points)} votes </p>

    </div>
  )
}

export default App