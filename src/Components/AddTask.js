import React from 'react';
import { useState } from 'react';

export const AddTask = ({ onAdd }) => {
  const [text, setText] = useState("")
  const [day, setDay] = useState("")
  const [reminder, setReminder] = useState(false)

 const onSubmit = (e) => {
  e.preventDefault() 

  if(!text) {
    alert("Add task")
  }
  onAdd({ text, day, reminder })
  setText("")
  setDay("")
  setReminder(false)
}

  return (
    <form className='form-control' onSubmit={onSubmit}>
        <div>
            <label>Task</label>
            <input type='text' placeholder='Add Task' value={text} onChange={(e)=> setText(e.target.value)} />
        </div>


        <div className='form-control'>
            <label>Day & Time</label>
            <input type='text' placeholder='Add Day & Time' value={day} onChange={(e) => setDay(e.target.value)} />
        </div>


        <div className='form-control form-control-check'>
            <label>Set reminder</label>
            <input type='checkbox' value={reminder} onChange ={(e)=> setReminder(e.currentTarget.checked)}/>
        </div>


        <input type='submit' value='Save Task' 
        className='btn btn-block'/>
    </form>
  );
};
