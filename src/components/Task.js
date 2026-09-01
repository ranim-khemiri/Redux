import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { toggleTask, editTask } from '../redux/tasksSlice';

function Task({ task }) {
  const dispatch = useDispatch();
  const [isEditing, setIsEditing] = useState(false);
  const [newDescription, setNewDescription] = useState(task.description);

  const handleToggle = () => {
    dispatch(toggleTask(task.id));
  };

  const handleEditSave = () => {
    dispatch(editTask({ id: task.id, description: newDescription }));
    setIsEditing(false);
  };

  return (
    <li>
      <input
        type="checkbox"
        checked={task.isDone}
        onChange={handleToggle}
      />

      {isEditing ? (
        <input
          type="text"
          value={newDescription}
          onChange={(e) => setNewDescription(e.target.value)}
        />
      ) : (
        <span style={{ textDecoration: task.isDone ? 'line-through' : 'none' }}>
          {task.description}
        </span>
      )}

      {isEditing ? (
        <button onClick={handleEditSave}>Enregistrer</button>
      ) : (
        <button onClick={() => setIsEditing(true)}>Modifier</button>
      )}
    </li>
  );
}

export default Task;
