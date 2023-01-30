import "./App.css";

import React, { Component } from "react";
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "react-bootstrap";

import axios from "axios";

import { createSlice, configureStore } from "@reduxjs/toolkit";

function App() {
  return (
    <div className="App">
      <Button>Boot strap</Button>
    </div>
  );
}

export default App;
