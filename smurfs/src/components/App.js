import React, { useState, useEffect } from "react";
import "./App.css";
import axios from 'axios';
import Smurflist from '../components/Smurflist';
import Form from '../components/Form';
import styled from 'styled-components';
import SmurfContext from './context';

const AppContainer = styled.div`
background:#87C5ED;
`

function App () {
  const [data, setData] = useState([])
  console.log(data)
  
  
  useEffect(() => {
  axios.get('http://localhost:3333/smurfs')
    .then(response => {
      console.log(response.data)
        setData(response.data)
      }) .catch(err => console.log(err, 'error recieving data from smurfs'))
  }, data);

    return (
      <AppContainer className="App">
      <SmurfContext.Provider value={{data}}>
        <h1>Our Smurf Family</h1>
        <Form setData={setData} data={data}/>
        <Smurflist/>
      </SmurfContext.Provider> 
      </AppContainer>

    );
  
}

export default App;
