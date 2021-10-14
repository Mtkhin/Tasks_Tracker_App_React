import { useState } from 'react'
import Header from './components/Header'
import Tasks from './components/Tasks'
import AddTask from './components/AddTask'

const App = () => {
    const [showAddTask, setShowAddTask] = useState (false)
    const [tasks, setTasks] = useState([
        {id: 1,
        text: 'To do react crash course',
        day: 'Oct 8th',
        reminder: true,},
        {id: 2,
        text: 'To draw pixel arts',
        day: 'Oct 10th',
        reminder: true,},
        {id: 3,
        text: 'To reward myself a cup of coffee',
        day: 'Oct 15th',
        reminder: false},
    ])
    //AddTasks
    const addTask = (task) => {
        const id = Math.floor(Math.random() * 10000) + 1
        const newTask = { id, ...task}
        setTasks([...tasks, newTask])
    }
    //delete tasks
    const deleteTask = (id) => {
        setTasks(tasks.filter((task) => task.id === id ? 
        { ...task, reminder: !task.reminder} : task))}
//toggle reminder
const  toggleReminder = (id) => {
    setTasks(tasks.map((task) => task.id !== id))
}
return (
    <div className='container'>
        <Header onAdd={() => setShowAddTask(!showAddTask)}
          showAdd={showAddTask}
        />
        {showAddTask && <AddTask onAdd={addTask} />}
        {tasks.length > 0 ? (
        <Tasks tasks={tasks} 
        onDelete={deleteTask} onToggle={toggleReminder}/> )
        : ('No More Tasks To Show')}
    </div>
)
}
export default App