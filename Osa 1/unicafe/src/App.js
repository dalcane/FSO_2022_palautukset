import { useState } from 'react'

const Header = (props) => {
  return (
      <h1> {props.otsikko}</h1>
  )
}

const Button = (props) => (
    <button onClick={props.handleClick}>
      {props.text}
    </button>
)


const Statistics = ({ good, bad, neutral}) => {
    let average = (good + -1 * bad) / (good + bad + neutral)
    let percentGood = (good / (good + bad + neutral) * 100) + " %"

    if (good === 0 && bad === 0 && neutral === 0) {
        return (
            <div>No feedback given.</div>
        )
    }
    else {
        return (
            <ul>
                <li> <StatisticsLine text="Good" value={good} /> </li>
                <li> <StatisticsLine text="Neutral" value={neutral} /> </li>
                <li> <StatisticsLine text="Bad" value={bad} /> </li>
                <li> <StatisticsLine text="Average" value={average} /> </li>
                <li> <StatisticsLine text="Positive" value={percentGood} /> </li>
            </ul>

            )
        }
    }

const StatisticsLine = (props) => {
    return (
        <p> {props.text}:  {props.value}</p>
    )
}


const App = () => {

    const [good, setGood] = useState(0)
    const [neutral, setNeutral] = useState(0)
    const [bad, setBad] = useState(0)

  return (
      <div>
        <Header otsikko = "Give Feedback" />
          <Button handleClick={() => setGood(good+1)} text="Good" />
          <Button handleClick={() => setNeutral(neutral+1)} text="Neutral" />
          <Button handleClick={() => setBad(bad+1)} text="Bad" />
          <Header otsikko="Statistics"/>
          <Statistics good={good} bad={bad} neutral={neutral} />

      </div>
  )
}


export default App
