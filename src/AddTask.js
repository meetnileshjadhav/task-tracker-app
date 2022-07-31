import { useState } from "react";

const AddTask = ({onAdd}) => {
  const [text, setText] = useState('');
  const [day, setDay] = useState('');
  const [reminder, setReminder] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();

    if(text === ''){
      alert('Please enter the task text..');
    }

    onAdd({text, day, reminder});

    setText('');
    setDay('');
    setReminder(false);
  };


  return (
    <form onSubmit={onSubmit}>
        <div className="form-control">
            <label>Task</label>
            <input type="text" id="task" onChange={(e) => setText(e.target.value)} value={text}/>
        </div>

        <div className="form-control">
            <label>Day & Time</label>
            <input type="text" id="date"  onChange={(e) => setDay(e.target.value)} value={day}/>
        </div>

        <div className="form-control from-control-checkbox">
            <label>Reminder</label>
            <input type="checkbox" id="task" value={reminder} checked={reminder} onChange={(e) => setReminder(e.currentTarget.checked)}/>
        </div>

        <input type='submit' className="btn btn-block" value= 'Add Task' />
            
    </form>
  )
}

export default AddTask