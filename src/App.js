import { Route } from 'react-router-dom' 
import LoginPage from './pages/LoginPage'; 
import RegistrationPage from './pages/RegistrationPage';
import CharactersPage from './pages/CharactersPage'
import CharacterPage from './pages/CharacterPage';
import EpisodesPage from './pages/EpisodesPage';
import LocationsPage from './pages/LocationsPage'
import LocationPage from './pages/LocationPage'
import EpisodePage from './pages/EpisodePage'
import OptionsPage from './pages/OptionsPage'
import EditProfilePage from './pages/EditProfilePage';
import ChangeNamePage from './pages/ChangeNamePage';
import CharacterFilter from './components/filters/CharacterFilter'
import LocationFilter from './components/filters/LocationFilter';
import TypeFilter from './components/filters/TypeFilter';
import SearchPage from './pages/SearchPage';


function App() {
  return (
    <div className='App dark'>
      <Route path='/login' component={LoginPage}/>  
      <Route path='/registration' component={RegistrationPage}/>   
      <Route path='/characters' component={CharactersPage}/>
      <Route path='/character' component={CharacterPage}/>
      <Route path='/episodes' component={EpisodesPage}/>
      <Route path='/locations' component={LocationsPage}/>
      <Route path='/location' component={LocationPage}/>
      <Route path='/episode' component={EpisodePage}/>
      <Route path='/options' component={OptionsPage}/>
      <Route path='/edit' component={EditProfilePage}/>
      <Route path='/name' component={ChangeNamePage}/> 
      <Route path="/filterChar" component={CharacterFilter}/>   
      <Route path="/filterLoc" exact component={LocationFilter}/>   
      <Route path="/filterLoc/:type" component={TypeFilter}/>
      <Route path="/search" component={SearchPage}/>   
    </div>
  );
} 
export default App;
