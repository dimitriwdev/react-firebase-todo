
const apikey = process.env.REACT_APP_APIKEY;
const domain = process.env.REACT_APP_AUTHDOMAIN;
const url = process.env.REACT_APP_BASEURL;
const project = process.env.REACT_APP_PROJECT;
const storage = process.env.REACT_APP_STORAGE;
const sender = process.env.REACT_APP_SENDER;
const app = process.env.REACT_APP_APP;

export const firebaseConfig = {


  apiKey: apikey,
  authDomain: domain,
  databaseURL: url,
  projectId: project,
  storageBucket: storage,
  messagingSenderId: sender,
  appId: app
};

