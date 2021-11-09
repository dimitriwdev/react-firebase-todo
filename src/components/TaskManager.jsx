import React from 'react';
import { FirebaseDatabaseMutation, FirebaseDatabaseNode } from '@react-firebase/database';
import TaskCreator from './TaskCreator';
import TaskReader from './TaskReader';
import firebase from 'firebase';

const TaskManager = () => {

  const userId = firebase.auth().currentUser.uid;
  const path = `/users/${userId}/tasks`;

  const logout = () => {
    firebase.auth().signOut()
  }

  return (
    <>
      <button onClick={logout}>Logout</button>
      <FirebaseDatabaseMutation type='push' path={path}>
        <TaskCreator />
      </FirebaseDatabaseMutation>
      <FirebaseDatabaseNode path={path}>
        <TaskReader />
      </FirebaseDatabaseNode>
    </>
  );
};

export default TaskManager;