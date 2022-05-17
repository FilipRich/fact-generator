import './App.css';
import React, { useState } from 'react';
import Axios from 'axios';


function App() {
  const axios = Axios;

  const [fact, setFact] = useState();

  function getFact() {
    axios.get("https://asli-fun-fact-api.herokuapp.com/")
      .then(function (response) {
        console.log(response);
        setFact({
          id: response.data.id,
          fact: response.data.fact
        })
      })
      .catch(function (error) {
        console.log(error);
      })
  }

  return (
    <div className="App">
      <button onClick={getFact}>Klicka för att få random fakta</button>
    </div>
    
  );
}

export default App;
