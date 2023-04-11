import React, {useState, useEffect} from 'react';
import axios from './axios';
import './App.css';
import Team from './components/Team';
import TeamForm from './components/TeamForm';

// 👉 the shape of the state that drives the form
const initialTeamValues = {
  name: '',
  email: '',
  role: '',
};


function App() {
  const [teams, setTeams] = useState([]);
  const [formValues, setFormValues] = useState(initialTeamValues);
  const [formError, setFormError] = useState('');

  const updateForm = (inputName, inputValue) => {
    setFormValues({...formValues, [inputName]:inputValue})
  };
  
  const submitForm = () => {
    const newTeam = {
      name: formValues.name.trim(),
      email: formValues.email.trim(),
      role: formValues.role
    }

    if (!newTeam.name || !newTeam.email || !newTeam.role) {
      setFormError('Please enter name, email, and select a role')
    } else {
      axios.post('fakeapi.com', newTeam)
      .then(res => {
        setTeams([...teams, res.data]);
        setFormValues(initialTeamValues);
        setFormError('');
      })
      .catch(err => console.error(err))
    }
  };

  useEffect(() => {
    axios.get('fakeapi.com').then(res => setTeams(res.data))
  }, [])

  return (
    <div className="container">
      <h1>My Team</h1>
      <h2 className='error'>{formError}</h2>
      <TeamForm 
        values={formValues}
        update={updateForm}
        submit={submitForm}
      />
      {
        teams.map(team => {
          return (
            <Team key={team.id} details={team} />
          )
        })
      }

    </div>
  );
}
export default App;
