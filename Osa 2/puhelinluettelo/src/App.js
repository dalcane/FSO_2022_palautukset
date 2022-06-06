import {useState} from 'react'
import Person from './components/Person'
import Filter from "./components/Filter";
import Form from "./components/Form";
import Persons from "./components/Persons";


const App = () => {
    const [persons, setPersons] = useState([
        {   id:0,
            name: 'Arto Hellas',
            number: 555123123,
        },
        {   id:1,
            name: 'Ada Lovelace',
            number: 999999999,
        },
        {   id:2,
            name: 'Jaska Juntunen',
            number: 123123123,
        },
    ])
    const [newName, setNewName] = useState('')
    const [newNumber, setNewNumber] = useState('')
    const [searchInput, setSearchInput] = useState('')
    const [showAll] = useState(false)

    const addName = (event) => {
        event.preventDefault()

        const nameObject = {
            id: persons.length + 1,
            name: newName,
            number: newNumber,
        }
        if (persons.some (e => e.name === newName)){
            window.alert(`${newName} already added to phonebook`)
            setNewName('')
        }else{
            setPersons(persons.concat(nameObject))
            setNewName('')
        }
    }

    const handleNameChange = (event) => {
        console.log(event.target.value)
        setNewName(event.target.value)
    }
    const handleNumberChange = (event) => {
        console.log(event.target.value)
        setNewNumber(event.target.value)
    }

    const handleSearch = (event) =>{
        event.preventDefault();
        setSearchInput(event.target.value)
    }

    //tyhjällä kentällä näytetään kaikki, mutta jos kenttä muuttuu, palautetaan fillteröity versio
    const namesToShow = showAll
        ?persons
        :persons.filter((person)=> {
            return person.name.toLowerCase().match(searchInput)
        })

    return (
      <div>
        <h2>Phonebook</h2>
          <Filter search = {handleSearch} input={searchInput} />
          <h2>Add new contact</h2>
          <Form addName={addName} newName = {newName} newNumber={newNumber} changeName={handleNameChange} changeNumber={handleNumberChange}/>
        <h2>Numbers</h2>
          <ul>
              {namesToShow.map((person, index) =>
                  <Person key={person.name} person={person} />
              )}
          </ul>
      </div>
  )

}

export default App
