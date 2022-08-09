import React, { useState } from "react";
import Movies from "./Movies";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./styles.css";
import Login from "./Login";
import SeatsList from "./SeatsList";

function App() {
  // React States
  
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/"><Login /></Route>
        <Route path="/movies" ><Movies/></Route>
        <Route path="/seats" ><SeatsList/></Route>

      </Switch>
    </BrowserRouter>
  );
}

export default App;