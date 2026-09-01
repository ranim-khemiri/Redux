import React from 'react';
import AddTask from './components/AddTask';
import TaskList from './components/TaskList';

function App() {
  return (
    <div className="App">
      <h1>Ma Liste de Tâches (ToDo)</h1>
      <AddTask />
      <TaskList />
    </div>
  );
}

export default App;
