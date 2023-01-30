import "./App.css";
import { useState } from "react";

import React, { Component } from "react";
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "react-bootstrap";

import axios from "axios";

import { createSlice, configureStore } from "@reduxjs/toolkit";

function App() {
  return (
    <div className="App">
      <div className="black-nav">
        <button>MENU</button>
        <h4 style={{ color: "white", fontSize: "30px" }}>To Do Ist</h4>
      </div>
      <Button>Boot strap</Button>
    </div>
  );
}

export default App;
