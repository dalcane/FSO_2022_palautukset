
const Filter = (f) => {
    let handleSearch =f.search
    let searchInput = f.input
    return (
        <div>
            filter shown with: <input
            type="search"
            value={searchInput}
            onChange={handleSearch}
        />
        </div>
    )
}

export default Filter