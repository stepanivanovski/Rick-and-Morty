import { Route } from 'react-router-dom';
import { useSelector } from 'react-redux'; 
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
  const themeClass = useSelector(state => state.theme.theme);

  return (
    <div className={`App ${themeClass}`}>
      <Route path='/login' component={LoginPage}/>  
      <Route path='/registration' component={RegistrationPage}/>   
      <Route path='/characters' exact component={CharactersPage}/>
      <Route path="/characters/:id" render={
                  (match) => {
                    const { id } = match.match.params
                    console.log(id)
                    return <CharacterPage id={id}/>
                  }
                }/>
      <Route path='/locations' exact component={LocationsPage}/>
      <Route path="/locations/:id" render={
            (match) => {
              const { id } = match.match.params
              console.log(id)
              return <LocationPage id={id}/>
            }
          }/>
      <Route path='/episodes' component={EpisodesPage}/>
      <Route path="/episode/:id" render={
            (match) => {
              const { id } = match.match.params
              console.log(id)
              return <EpisodePage id={id}/>
            }
          }/>
      <Route path='/options' exact component={OptionsPage}/>
      <Route path='/options/edit' component={EditProfilePage}/>
      <Route path='/options/name' component={ChangeNamePage}/> 
      <Route path="/filterChar" component={CharacterFilter}/>   
      <Route path="/filterLoc" exact component={LocationFilter}/>   
      <Route path="/filterLoc/:type" component={TypeFilter}/>
      <Route path="/search" component={SearchPage}/>   
    </div>
  );
} 
export default App;
