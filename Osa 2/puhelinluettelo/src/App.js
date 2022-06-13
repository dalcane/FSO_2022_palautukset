import {useEffect, useState} from 'react'
import Filter from "./components/Filter";
import Form from "./components/Form";
import Persons from "./components/Persons";
import personService from './services/personService'

const App = () => {

    const [persons, setPersons] = useState([])
    const [newName, setNewName] = useState('')
    const [newNumber, setNewNumber] = useState('')
    const [searchInput, setSearchInput] = useState('')
    const [showAll] = useState(false)

    useEffect(() => {
        personService
            .getAll()
            .then(initialPersons => {
            setPersons(initialPersons)
        })
    }, [])



    const addName = (event) => {
        event.preventDefault()

        const nameObject = {
            id: persons.length + 1,
            name: newName,
            number: newNumber,
        }
        if (persons.some (e => e.name === newName)){
            if (window.confirm(`${newName} already added to phonebook. Do you want to update their number?`)){
                const newDude = persons.map(o =>{
                    if (o.name===newName){
                        return o.id
                }
                })
                const newId = newDude.reduce(a => a)
                const numberObject ={
                    id:newId,
                    name: newName,
                    number: newNumber
                }
                personService
                    .update(numberObject.id, numberObject)
                    .then(initialPersons => {
                        setPersons(persons.map(p => {
                            return p
                        }))
                        setNewName('')
                        setNewNumber('')
                window.alert("Number changed!")
                        personService
                            .getAll()
                            .then(initialPersons => setPersons(initialPersons))
            })

        }else{
            personService
                .create(nameObject)
                .then(returnedName =>{
                setPersons(persons.concat(returnedName))
                    setNewName('')
                    setNewNumber('')
            })
        }
    }
    }
    function handleDelete(event) {
        const idToDelete = event.target.value
        const nameToDelete = event.target.name
        personService
            .deletePerson(idToDelete, nameToDelete)
        personService
            .getAll()
            .then(initialPersons => {
            setPersons(initialPersons)
        })
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
          <Persons persons={namesToShow} handleDelete={handleDelete}/>
      </div>
  )

}

export default App
