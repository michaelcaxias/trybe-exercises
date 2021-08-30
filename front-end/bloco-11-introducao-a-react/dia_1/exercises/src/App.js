
const listOfTasks = ['Estudar React', 'Estudar React Native', 'Estudar MongoDB']

const Task = (array) => {
  return (
    array.map((task) => {
      return <li>{task}</li>
    })
  );
}

function App() {
  return (
    <div>
    { Task(listOfTasks)  }
    </div>
  );
}

export default App;
