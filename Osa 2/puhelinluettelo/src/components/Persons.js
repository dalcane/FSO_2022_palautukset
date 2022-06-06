import Person from "./Person";

const Persons = ({ persons }) => {
    let {namesToShow} = persons
    return (
        <ul>
            {namesToShow.map((person, index) =>
                <Person key={person.name} person={person} />
            )}
        </ul> )
}

export default Persons