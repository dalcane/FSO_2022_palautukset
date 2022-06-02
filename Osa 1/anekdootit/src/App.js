import { useState } from 'react'

const Button = (props) => (
    <button onClick={props.handleClick}>
      {props.text}
    </button>
)

const AddVote = ({text, votes}) => {

    return(
    <div>
         has {votes} votes
    </div>
    )

}

const App = () => {

    const anecdotes = [
        {
            text: 'If it hurts, do it more often.',
            votes: 0
        },
        {
            text:'Adding manpower to a late software project makes it later!',
            votes: 0
        },
        {
            text:'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
            votes: 0
        },
        {
            text: 'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
            votes: 0
        },
        {
            text: 'Premature optimization is the root of all evil.',
            votes: 0
        },
        {
            text: 'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
            votes: 0
        },
        {
            text: 'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when dianosing patients.',
            votes: 0
        }

    ]

    const [selected, setSelected] = useState(0)




  function randomInt (max) {
    return Math.floor(Math.random() * max)
  }

  return (
      <div>
          {anecdotes[selected].text}
          <div></div>
          <AddVote votes={anecdotes[selected].votes} />
          <Button handleClick={() => setSelected(randomInt(anecdotes.length))} text="Arvo anekdootti" />
          <Button handleClick={() => (anecdotes[selected].votes+1)} text={"Vote"} />
      </div>
  )
}

export default App