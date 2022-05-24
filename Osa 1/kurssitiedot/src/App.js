const App = () => {
    const course = {
        name: 'Half Stack application development',
        parts :[
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
        return(
    <div>
        <Header course={course.name}/>
        <Content parts={course}/>
        <Total/>
    </div>
)

}

const Header = (props) => {
    console.log(props)
    return(
    <h1> {props.course}</h1>
    )
}

//tämä sisältää hyvin kyseenalaista settiä
const Content = (props) => {
    console.log(props)
    const Courses = props.parts;
    const statList = Courses.map((value) =>
        <li>{value}</li>
    );
        return (
            <div>
                <ul>{statList}</ul>
            </div>
        );

    }



const Part = (props) => {
    console.log(props)
  return(
      <div>
          <p> {props.name} {props.exercises}</p>
      </div>

  )
}

const Total = (props) => {

}

export default App