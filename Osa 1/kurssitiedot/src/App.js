const App = () => {
    const course = {
        name: 'Half Stack application development',
        parts: [
            {
                name: 'Fundamentals of React',
                exercises: 10
            },
            {
                name: 'Using props to pass data',
                exercises: 7
            },
            {
                name: 'State of a component',
                exercises: 14
            }
        ]
    }
    return (
        <div>
            <Header course={course.name}/>
            <Content parts={course.parts}/>
            <Total parts={course.parts}/>
        </div>
    )

}

const Header = (props) => {
    console.log(props)
    return (
        <h1> {props.course}</h1>
    )
}

//Sisältökomponentti, joka

const Content = (props) => {
    console.log(props)
    const courses = props.parts;
    const statList = courses.map((kurssi, index) =>
        <li key={"itam-${index}"}>
            <Part name={kurssi.name} exercises={kurssi.exercises}/>
        </li>
    );
    return (
        <div>
            <ul>{statList}</ul>
        </div>
    );
}

//osakomponentti
const Part = (props) => {
    console.log(props)
    return (
        <div>
            <p> Osan nimi on {props.name}
                ja laajuus on {props.exercises} tehtävää</p>
        </div>

    )
}

//summakomponentti

const Total = (props) => {
    const courses = props.parts;
    let sum = 0
    const summa = courses.map((kurssi) => {
            return sum += kurssi.exercises;
        }
    )
    return (
        <div>
            Laajuus yhteensä on {sum} tehtävää.
        </div>
    );
}

export default App