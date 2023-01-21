import './App.css';
import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Login from './pages/Login';
import { getAnalytics } from "firebase/analytics";
import firebase from 'firebase/compat/app'
import { initializeApp } from "firebase/app";





function App() {
  const firebaseConfig = {
    apiKey: "AIzaSyDJMBSqZXCuu80yu2fyahlc1rzNwqj7Jjs",
    authDomain: "elessiecommerce.firebaseapp.com",
    projectId: "elessiecommerce",
    storageBucket: "elessiecommerce.appspot.com",
    messagingSenderId: "537754376789",
    appId: "1:537754376789:web:dd38f69d0c6f46952512dc",
    measurementId: "G-HBETK9VYMF"
  };

  firebase.initializeApp(firebaseConfig);
  return (
    <>
      <Layout />
      <Cart />
      <Login />
    </>
  )
}

export default App;
