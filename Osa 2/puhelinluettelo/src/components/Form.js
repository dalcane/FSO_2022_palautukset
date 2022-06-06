const Form = (f) => {
    let addName =f.addName
    let newName = f.newName
    let newNumber = f.newNumber
    let handleNameChange = f.changeName
    let handleNumberChange = f.changeNumber

    return (
        <form onSubmit={addName}>
            <div>
                name:<input
                value={newName}
                onChange={handleNameChange}/>
                <div></div>
                number:<input
                value={newNumber}
                onChange={handleNumberChange}
            />
            </div>
            <div>
                <button type="submit">add</button>
            </div>
        </form>)
}

export default Form