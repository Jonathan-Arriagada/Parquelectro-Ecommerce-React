import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCTOg4Uyh7E5XeRd2suHnOinaw7hw3HrXM",
  authDomain: "parquelectro-c1a5c.firebaseapp.com",
  projectId: "parquelectro-c1a5c",
  storageBucket: "parquelectro-c1a5c.appspot.com",
  messagingSenderId: "269944250689",
  appId: "1:269944250689:web:94308822eb98ab471501c0"
};

// Initialize Firebase
initializeApp(firebaseConfig);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals();
