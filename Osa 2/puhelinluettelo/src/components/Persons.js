
const Persons = ({ persons, handleDelete}) => {
    const label = 'Delete'

    return (
        <ul>
            {persons.map((p, index) =>
                <li key={p.name}>{p.name} : {p.number}
                    <button value={p.id} onClick={handleDelete} name={p.name}>{label}
                    </button>
                </li>
            )}
        </ul> )
}

export default Persons