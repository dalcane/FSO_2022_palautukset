import './App.css';
import {useEffect, useState} from "react";
import axios from "axios";
import Notification from "./components/Notification";

const ShowOne = ({countries1}) =>{
    let maat= countries1.map(c => ({ name: c.name.common,
        capital: c.capital, area: c.area, languages: c.languages, flag: c.flags.png }))
    let languages = maat.map (c => (c.languages))
    return (
        <div>
            <h2>{maat.map(capital=>capital.name)}</h2>
            <div></div>
            Capital: {maat.map(capital=>capital.capital)}
            <div></div>
            Area: {maat.map(c=>c.area)}
            <div></div>
            Languages:
            {Object.entries(languages[0]).map(
                ([key,value])=> {
                    return <li> {key} - {value}</li>;
                }
            )}
            <div></div>
            Flag:
            <div></div>
            <img src= {maat.map(c=>c.flag)} alt="Flag"/>
        </div>
    )
}

function boom() {
    window.alert("Can't display this, sry.")
    }

const ShowCountries = ({countries}) =>{
    let maat= countries.map(c => ({ name: c.name.common,
        capital: c.capital, area: c.area, languages: c.languages, flag: c.flags.png }))
    let languages = maat.map (c => (c.languages))
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
                {maat.map(name=> <li>{name.name}
                    <button value={name.name} onClick={boom} name={name.name}>Show
                    </button></li>)}
            </div>
        )
    }
    if (maat.length === 1) {
        return (
            <div>
            <h2>{maat.map(capital=>capital.name)}</h2>
                <div></div>
                Capital: {maat.map(capital=>capital.capital)}
                <div></div>
                Area: {maat.map(c=>c.area)}
                <div></div>
                Languages:
                {Object.entries(languages[0]).map(
                    ([key,value])=> {
                        return <li> {key} - {value}</li>;
                    }
                )}
                <div></div>
                Flag:
                <div></div>
                <img src= {maat.map(c=>c.flag)} alt="Flag"/>
            </div>
        )
    }
}

function App() {

    const [countries, setCountries] = useState([])
    const [searchInput, setSearchInput] = useState('')
    const [countryStats, setCountryStats] = useState(null)

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
        <Notification message={countryStats} />
      Find countries: <input
        type="search"
        value={searchInput}
        onChange={handleSearch}/>
        <div>
            <ShowCountries countries={countries} countries1={countries}/>
        </div>
    </div>

  );
}

export default App;
