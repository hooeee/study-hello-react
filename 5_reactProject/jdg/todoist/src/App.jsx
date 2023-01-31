import "./App.css";
import { useState } from "react";
import Layout from "./components/templates/Layout";

import React, { Component } from "react";
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "react-bootstrap";

import axios from "axios";

import { createSlice, configureStore } from "@reduxjs/toolkit";

function App() {
  return <Layout />;
}

export default App;
