import React, {useState} from 'react';
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
  const [teams, setTeams] = useState([]);
  return (
    <div className="container">
      <h1>My Team</h1>
      <Form />
      {teams.map(team => {
        return (<Team key={team.id} details={team} />)
      })}

    </div>
  );
}
export default App;
