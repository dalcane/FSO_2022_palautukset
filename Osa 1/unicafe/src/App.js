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

const Content = (props) => (
    <p> {props.text} : {props.stateOf}</p>
)



const App = () => {

    const [good, setGood] = useState(0)
    const [neutral, setNeutral] = useState(0)
    const [bad, setBad] = useState(0)

    //en tiedä, kuinka kosher on tehdä nämä operaatiot suoraan muuttujaan, mutta
    //tämä tuntui helpoimmalta tavalta
    const average = (good + -1 * bad) / (good+bad+neutral);
    const percentGood = (good/(good+bad+neutral)*100) + " %"

  return (
      <div>
        <Header otsikko = "Give Feedback" />
          <Button handleClick={() => setGood(good+1)} text="Good" />
          <Button handleClick={() => setNeutral(neutral+1)} text="Neutral" />
          <Button handleClick={() => setBad(bad+1)} text="Bad" />
          <Header otsikko="Statistics"/>
          <Content text= "Good" stateOf = {good} />
          <Content text= "Neutral" stateOf = {neutral} />
          <Content text= "Bad" stateOf = {bad} />
          <Content text= "Average" stateOf={average} />
          <Content text= "Positive" stateOf={percentGood} />

      </div>
  )
}


export default App
