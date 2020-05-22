import React, { useState, useEffect } from "react";
import "./App.css";
import DataFetching from "./Component/DataFetching";

function App() {
  return (
    <div className="App" style={{ marginTop: 10 }}>
      <h1>Ricky and Morty Episodes</h1>
      <div style={{marginTop: 10}}>
        <DataFetching />
      </div>
    </div>
  );
}

export default App;
