import React, { useState } from 'react';

const TaskCreator = ({ runMutation }) => {
  const [taskName, setTaskName] = useState('');
  const [taskDuration, setTaskDuration] = useState('');

  const createTask = (e) => {
    e.preventDefault();

    runMutation({
      name: taskName,
      duration: taskDuration
    })
      .then((response) => {
        console.log(response);
        setTaskName('');
        setTaskDuration('');
      })
  }

  const createTaskName = (e) => {
    setTaskName(e.target.value);
  }

  const createTaskDuration = (e) => {
    setTaskDuration(e.target.value);
  }

  return (
    <form className='createForm' onSubmit={createTask}>
      <label htmlFor=''>
        Task name: {''}
      </label>
      <input type='text' value={taskName} onChange={createTaskName} />

      <label htmlFor=''>
        Duration: {''}
      </label>
      <input type='number' value={taskDuration} onChange={createTaskDuration} />

      <button>create</button>
    </form>
  )
};

export default TaskCreator;