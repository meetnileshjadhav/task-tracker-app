import Header from './Components/Header';
import Footer from './Components/Footer';
import About from './Components/About';
import Tasks from './Components/Tasks';
import AddTask from './AddTask';
import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


function App() {

  const [addTask, setAddTask] = useState(false);

  const [tasks, setTasks] = useState(
    [
      {
        text: "School reporting",
        day: "Monday 9 AM",
        reminder: true,
        id: 1
      },
      {
        text: "Doctor's Appointment",
        day: "Tuesday 3 PM",
        reminder: false,
        id: 2
      },
  
      {
        text: "Party time",
        day: "Sunday 9 PM",
        reminder: true,
        id: 3
      }
    ]
  );

 

  // Update reminder
  const updateReminder=  (id) =>{

    setTasks(tasks.map(task => task.id === id ? {...task, reminder: !task.reminder} : task))
  }

  // Delete Task
  const deleteTask=  (id) =>{

    setTasks(tasks.filter(task => task.id !== id));
  }

  // New Task Add
  const onAdd = (task) =>{
  
    const id= Math.floor(Math.random() * 10000);
    const newTask= {id, ...task};
    setTasks([...tasks, newTask]);
  }

  return (
    <Router>
        <div className="container">
          <Header title='Task Tracker' showAdd={() => setAddTask(!addTask)} showAddBtn={addTask}/>

        <Routes>
          <Route path='/' element={
            <>
            {addTask && <AddTask onAdd={onAdd}/>}
            {tasks.length > 0 ? <Tasks tasks={tasks} onToggle={ updateReminder } onDelete={deleteTask}/> : <h3 className='empty-list'>There are no tasks..</h3>}
            </>
          } />
          <Route path='/about' element={<About />} />
        </Routes>
        <Footer />
       </div>
    </Router>
    
  );
}

export default App;
