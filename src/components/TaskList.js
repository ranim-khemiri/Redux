import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import Task from './Task';

function TaskList() {
  const tasks = useSelector((state) => state.tasks);
  const [filter, setFilter] = useState('all');

  const filteredTasks = tasks.filter((task) => {
    if (filter === 'done') return task.isDone === true;
    if (filter === 'notDone') return task.isDone === false;
    return true;
  });

  return (
    <div>
      <div>
        <button onClick={() => setFilter('all')}>Toutes</button>
        <button onClick={() => setFilter('done')}>Faites</button>
        <button onClick={() => setFilter('notDone')}>Pas faites</button>
      </div>

      <ul>
        {filteredTasks.map((task) => (
          <Task key={task.id} task={task} />
        ))}
      </ul>
    </div>
  );
}

export default TaskList;
