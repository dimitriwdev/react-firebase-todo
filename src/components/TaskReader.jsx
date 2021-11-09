import React from 'react';
import { FirebaseDatabaseMutation } from '@react-firebase/database';
import Task from './Task';
import firebase from 'firebase';

const TaskReader = ({ value }) => {
  if (value) {
    const formattedData = Object.entries(value)

    return (
      <div className='reader'>
        {formattedData.map(data => {

          const userId = firebase.auth().currentUser.uid;
          const path = `/users/${userId}/tasks/${data[0]}`;

          return (
            <FirebaseDatabaseMutation key={data[0]} type='set' path={path}>
              <Task data={data} />
            </FirebaseDatabaseMutation>
          )
        })}
      </div>
    )
  }
  else {
    return null; // e.g loading component
  }
};

export default TaskReader;