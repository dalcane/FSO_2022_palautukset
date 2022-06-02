import Course from './components/Course'
const App = () => {
  const course = [
      {
          name: 'Half Stack application development',
          id: 1,
          parts: [
              {
                  name: 'Fundamentals of React',
                  exercises: 10,
                  id: 1
              },
              {
                  name: 'Using props to pass data',
                  exercises: 7,
                  id: 2
              },
              {
                  name: 'State of a component',
                  exercises: 14,
                  id: 3
              },
              {
                  name: 'Redux',
                  exercises: 11,
                  id: 4
              }
          ]
      },
      {
          name: 'Node.js',
          id: 2,
          parts: [
              {
                  name: 'Routing',
                  exercises: 3,
                  id: 1
              },
              {
                  name: 'Middlewares',
                  exercises: 7,
                  id: 2
              }
          ]
      }
  ]
  return (
      <div>
          <Course id={course[0].id} name={course[0].name} parts={course[0].parts} />
          <Course id={course[1].id} name={course[1].name} parts={course[1].parts} />

      </div>
  )

}


export default App