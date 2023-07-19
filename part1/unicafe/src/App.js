import { useState } from 'react'

const Button = ({ text, handleClick }) => {
  return (
    <button onClick={handleClick}>{text}</button>
  )
}

const StatisticLine = ({ text, value }) => {

  if (text === "Positive") {
    return (
      <tr>
        <td>{text}</td>
        <td>{value}</td>
        <td>%</td>
      </tr>
    )
  }
  return (
    <tr>
      <td>{text}</td>
      <td>{value}</td>
    </tr>
  )

}

const Statistics = ({ good, neutral, bad }) => {
  const total = good + neutral + bad
  if (total === 0) {
    return (
      <>
        <p>Statistics</p>
        <p>No feedback given</p>
      </>
    )
  }
  const average = (good + (bad * -1)) / total
  const positive = good / total * 100;
  return (
    <>
      <p>Statistics</p>
      <table>
        <tbody>
          <StatisticLine text={"Good"} value={good} />
          <StatisticLine text={"Neutral"} value={neutral} />
          <StatisticLine text={"Bad"} value={bad} />
          <StatisticLine text={"All"} value={total} />
          <StatisticLine text={"Average"} value={average} />
          <StatisticLine text={"Positive"} value={positive} />
        </tbody>
      </table>
    </>
  )
}


const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const goodClick = () => {
    const updatedValue = good + 1
    setGood(updatedValue)
  }

  const neutralClick = () => {
    const updatedValue = neutral + 1
    setNeutral(updatedValue)
  }

  const badClick = () => {
    const updatedValue = bad + 1
    setBad(updatedValue)
  }

  return (
    <div>
      <p>Give Feedback</p>
      <Button text="good" handleClick={goodClick} />
      <Button text="neutral" handleClick={neutralClick} />
      <Button text="bad" handleClick={badClick} />
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  )
}

export default App