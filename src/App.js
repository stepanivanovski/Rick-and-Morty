import { Route } from 'react-router-dom' 
import LoginPage from './pages/LoginPage'; 
import RegistrationPage from './pages/RegistrationPage';
import CharactersPage from './pages/CharactersPage'
import CharacterPage from './pages/CharacterPage';
import EpisodesPage from './pages/EpisodesPage';
import LocationsPage from './pages/LocationsPage'
import LocationPage from './pages/LocationPage'
import EpisodePage from './pages/EpisodePage'
import "./App.scss";


function App() {
  return (
    <div className='App' style={{backgroundColor: `#FCFCFC`}}>
      <Route path='/login' component={LoginPage}/>  
      <Route path='/registration' component={RegistrationPage}/>   
      <Route path='/characters' component={CharactersPage}/>
      <Route path='/character' component={CharacterPage}/>
      <Route path='/episodes' component={EpisodesPage}/>
      <Route path='/locations' component={LocationsPage}/>
      <Route path='/location' component={LocationPage}/>
      <Route path='/episode' component={EpisodePage}/>   
    </div>
  );
} 
export default App;
