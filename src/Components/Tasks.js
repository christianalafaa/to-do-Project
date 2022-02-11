import React from 'react';
import { Task } from './Task';


export const Tasks = ({taskList, onDelete, onToggle}) => {
    const todoTasks = taskList.map(task => {
       return  <Task key={task.id} myTask={task} onDelete={onDelete} onToggle={onToggle}/>
    }
                )

    return (
        <div>
            {todoTasks}
        </div>
    );
};

// destructured id here