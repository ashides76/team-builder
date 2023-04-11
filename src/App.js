import React from 'react';
import axios from './axios';
import './App.css';
import Team from './components/Team';
import Form from './components/Form';

// 👉 the shape of the state that drives the form
const initialTeamValues = {
  name: '',
  email: '',
  role: '',
}

function App() {
  return (
    <div className="container">
      <h1>My Team</h1>
      <Form />
      <Team />

    </div>
  );
}
export default App;
