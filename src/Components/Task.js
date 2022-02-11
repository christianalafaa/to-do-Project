import React from 'react';
import { FaTimes } from 'react-icons/fa/index.esm'

export const Task = ({myTask, onDelete, onToggle}) => {
  return (
    <div  onDoubleClick={() => onToggle(myTask.id)} className={`task ${myTask.reminder ? 'reminder' : ""}`}>
        <h3>{myTask.text} 
          <FaTimes style={{ color: 'red', cursor: 'pointer' }} 
            onClick={()=>onDelete(myTask.id)} /></h3>
        <p>{myTask.day}</p>
    </div>
    );
};
