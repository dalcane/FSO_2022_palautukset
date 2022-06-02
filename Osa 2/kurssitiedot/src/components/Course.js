//otsikkokomponentti

const Header = (props) => {
    console.log(props)
    return (
        <h1> {props.course}</h1>
    )
}

//Sisältökomponentti

const Content = (props) => {
    console.log(props)
    const courses = props.parts;
    const statList = courses.map((kurssi) =>

        <li key={kurssi.id}>
            <Part name={kurssi.name} exercises={kurssi.exercises} />
        </li>
    );
    return (
        <div>
            <ul>{statList}</ul>
        </div>
    );
}

//osakomponentti
const Part = ({name, exercises}) => {

    return (
        <div>
            <p> Osan nimi on {name} ja laajuus on {exercises} tehtävää.</p>
        </div>

    )
}

const Course = ({id, parts, name}) => {
    return (
        <div>
            <Header course={name}/>
            <Content parts={parts}/>
            <Total parts={parts}/>
        </div>
    )
}

//summakomponentti

const Total = ({parts}) => {
    const summa = parts.reduce(function(sum,kurssi)  {
        return sum += kurssi.exercises;
    },0)
    return (
        <div>
            Laajuus yhteensä on {summa} tehtävää.
        </div>
    );
}

export default Course