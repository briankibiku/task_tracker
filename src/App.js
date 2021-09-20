import Tasks from './components/Tasks';
import Header from './components/Header';
import { useState } from "react"

function App() {

  const [tasks, setTasks] = useState([
    { id: 1, text: 'Doctor says go ahead', day: 'Fri 13th', reminder: false },
    { id: 2, text: 'It is a baby girl', day: 'Fri 13th', reminder: true },
    { id: 3, text: 'Cook and sleep', day: 'Fri 13th', reminder: true },
    { id: 4, text: 'Rice and beans', day: 'Fri 13th', reminder: false }])
  return (
    <div className="container">
      <Tasks tasks = {tasks}/>
      <Header title = 'Henlo Biks' />
    </div>
  );
}

export default App;
