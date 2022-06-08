import './App.css';
import {useEffect, useState} from "react";
import axios from "axios";


const ShowCountries = ({countries}) =>{
    let maat= countries.map(c => ({ name: c.name.common,
        capital: c.capital, area: c.area, languages: c.languages, flag: c.flag }))
    if (maat.length===0){
        return (
            <div>make a search</div>
        )
    }
    if (maat.length>10){
        return(
            <div>Narrow your search</div>
        )
    }
    if (maat.length<10 && maat.length>1) {
        return (
            <div>
                {maat.map(name=> <li>{name.name}</li>)}
            </div>
        )
    }
    if (maat.length === 1) {
        console.log("countries",countries)
        console.log("maat",maat)
        return (
            <div>
            <h2>{maat.map(capital=>capital.name)}</h2>
                <div></div>
                Capital: {maat.map(capital=>capital.capital)}
                <div></div>
                Area: {maat.map(c=>c.area)}
                <div></div>
                Languages:
                {maat.map(c=> <li>{(c.languages.data)}</li>)}
                <div></div>
                Flag:
                <div></div>
                {maat.map(c=>c.flag)}
            </div>
        )
    }
}

function App() {

    const [countries, setCountries] = useState([])
    const [searchInput, setSearchInput] = useState('')

    const handleSearch = (event) =>{
        event.preventDefault();
        setSearchInput(event.target.value)
    }
    useEffect(() => {
        axios.get('https://restcountries.com/v3.1/name/'+searchInput,{
            params: {searchInput}
        })
            .then(response => {
                if(response){
                    setCountries(response.data)
                } else {
                    console.log("error")
                }
            })
    })




  return (
    <div>
      Find countries: <input
        type="search"
        value={searchInput}
        onChange={handleSearch}/>
        <div>
            <ShowCountries countries={countries}/>
        </div>
    </div>

  );
}

export default App;
