import './App.css';
import { useState, useEffect } from 'react';
import Navbar from "./Navbar";
import Agents from "./pages/Agents";
import Weapons from "./pages/Weapons";
import Main from "./pages/Main";

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

function App() {

  const [agents, setAgents] = useState([]);
  const [weapons, setWeapons] = useState([]);
  const [main, setMain] = useState();

  useEffect(() => {
    fetch('https://valorant-api.com/v1/agents')
      .then(response => response.json())
      .then(data => {
        // console.log(data.data); // agent verilerini konsola yazdırıyoruz
        const filteredAgents = data.data.filter(
          (agent, index, self) => index === self.findIndex((a) => a.displayName === agent.displayName && a.isPlayableCharacter)
        )
        setAgents(filteredAgents);
      })
      .catch(error => console.log(error));
  }, []);


  useEffect(() => {
    fetch('https://valorant-api.com/v1/weapons')
      .then(response => response.json())
      .then(data => {
        setWeapons(data.data); // silah bilgileri weapons durum değişkenine atanıyor
        console.log(data.data);
      })
      .catch(error => console.log(error));
  }, []);


  return (
    <>
      <Navbar />


      <div className='container'>
        <Routes>
          <Route path='/' element={<Main />}></Route>
          <Route path='/agents' element={<Agents agents={agents} />}></Route>
          <Route path='/weapons' element={<Weapons weapons={weapons} />}></Route>
        </Routes>
      </div>
      <footer className='footer'>© 2023 - Işınnur Günay</footer>
    </>
  );
}

export default App;
