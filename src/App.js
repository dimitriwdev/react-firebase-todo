import { FirebaseDatabaseProvider } from '@react-firebase/database';
import { firebaseConfig } from './config'
import firebase from 'firebase';
import { FirebaseAuthProvider, IfFirebaseAuthed, IfFirebaseUnAuthed } from '@react-firebase/auth';
import AuthForm from './components/AuthForm';
import TaskManager from './components/TaskManager';

const App = () => {

  return (
    <FirebaseAuthProvider {...firebaseConfig} firebase={firebase}>
      <FirebaseDatabaseProvider {...firebaseConfig} firebase={firebase}>
        <div className="app">
          <h1>React Firebase</h1>
          <IfFirebaseUnAuthed>
            <AuthForm type='register' />
            <AuthForm type='login' />
          </IfFirebaseUnAuthed>
          <IfFirebaseAuthed>
            <TaskManager />
          </IfFirebaseAuthed>
        </div>
      </FirebaseDatabaseProvider>
    </FirebaseAuthProvider>
  );
}

export default App;
