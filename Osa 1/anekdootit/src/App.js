import {useState} from 'react'

const Button = (props) => (
    <button onClick={props.handleClick}>
      {props.text}
    </button>
)



const App = () => {

    const [anecdotes, setAnecdotes] = useState([
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

    ])

    const [selected, setSelected] = useState(0)
    const [newVote, setNewVote] = useState(0)

    function randomInt (max) {
    return Math.floor(Math.random() * max)
    }

    const addVote = (event) =>{
        event.preventDefault()
        const newAnecdotes = [...anecdotes];
        newAnecdotes[selected] = anecdotes[selected];
        newAnecdotes[selected].votes = newVote;
        setAnecdotes(newAnecdotes);
    }

    function doTwo() {
        setSelected(randomInt(anecdotes.length))
        setNewVote(0)

    }


    const showMax = () =>{
        const maxVotes = Math.max(...anecdotes.map(o=>o.votes))
        const indexOfVote = anecdotes.findIndex(e => e.votes === maxVotes);
        console.log(indexOfVote)
        if (maxVotes > 0){
            return (
                anecdotes[indexOfVote].text
            )
        }else {
            return ''
        }
    }

    const maxVotes = Math.max(...anecdotes.map(o=>o.votes))




    return (
      <div>
          <h2>Anecdote of the day</h2>
          {anecdotes[selected].text}
          <div></div>
          has {anecdotes[selected].votes} votes
          <div></div>
          <form onSubmit={addVote}>
              <div>
                  <Button type="submit" handleClick={() => setNewVote(newVote+1)} text="Vote" />
              </div>
          </form>
          <div></div>
          <Button handleClick={() => doTwo()} text="Arvo anekdootti" />

          <h2>Anecdote with most votes </h2>

          {showMax()}
          <div></div>
          has the most votes: {maxVotes}

      </div>
  )
}

export default App