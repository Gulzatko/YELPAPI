import {useState,useEffect} from 'react'
import axios from 'axios'
import logo from './logo.svg';
import './App.css';
import axiosInstance from './helpers/axios';

function App() {
  const [locations, setLocations]=useState('LosAngeles');
  const [business, setBusiness]= useState ([])
  
  
  const CallToApia =async()=>{
    const req =await axiosInstance.get(locations)
    setBusiness(req.data)
  }
  useEffect(()=>{
    CallToApia()
  },[])

  return (

    <div className="App">
      <header className="App-header">
       Ahmadikmahmadik
      </header>
    </div>
  );
}

export default App;
