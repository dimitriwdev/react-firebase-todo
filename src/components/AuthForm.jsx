import React, { useState } from 'react';
import firebase from 'firebase';

const AuthForm = ({ type }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const headerText = type === 'register' ? 'Sign Up' : 'Sign In';

  const register = (e) => {
    e.preventDefault();

    firebase.auth().createUserWithEmailAndPassword(email, password);
  }

  const login = (e) => {
    e.preventDefault();

    firebase.auth().signInWithEmailAndPassword(email, password);
  }

  return (
    <form className='authForm' onSubmit={type === 'register' ? register : login}>
      <h3>{headerText}</h3>
      <label htmlFor=''>
        Email: {''}
      </label>
      <input type='text' value={email} onChange={(e) => setEmail(e.target.value)} />
      <label htmlFor=''>
        Password: {''}
      </label>
      <input type='password' value={password} onChange={(e) => setPassword(e.target.value)} />
      {type === 'register'
        ? <button>Sign Up</button>
        : <button>Sign In</button>
      }
    </form >
  );
};

export default AuthForm;