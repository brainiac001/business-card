import React from "react"
import './App.css';
import Card from './Card.js';
import Card2 from './Card2.js';

function App() {
  return (
    <div className="App">
      <div>
        <div className="row">
          <div className="col-md-6">
            <Card />
          </div>
          <div className="col-md-6">
            <Card2 />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
