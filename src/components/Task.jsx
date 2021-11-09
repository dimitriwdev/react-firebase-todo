import React from 'react';

const Task = ({ data, runMutation }) => {

  const { duration, name } = data[1];

  const handleDeleteTask = () => {
    runMutation(null)
  }

  return (
    <p onClick={handleDeleteTask}>
      {name} - {duration} {duration > 1 ? 'days' : 'day'}
    </p>
  )
};

export default Task;