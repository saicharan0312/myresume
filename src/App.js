import './App.css';
import 'materialize-css/dist/css/materialize.css';
import 'materialize-css/dist/js/materialize.js';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';
import Home from './components/Home';
import Skills  from './components/Skills';
import About from './components/About';
import Education from './components/Education';
import Experience from './components/Experience';
import Intrest from './components/Intrest';
import Navbar from './components/Navbar';
import Profile from './components/Profile';

function App() {
  return (
    <Router>
      <>
        <Route exact path='/' component = { Home} />
        <Switch>
          <Route exact path='/skills' component = { Skills } />  
          <Route exact path='/intrest' component = { Intrest } /> 
          <Route exact path='/experience' component = { Experience } /> 
          <Route exact path='/education' component = { Education } /> 
          <Route exact path='/profile' component = { Profile } /> 
        </Switch>
      </>
    </Router>
  );
}

export default App;
