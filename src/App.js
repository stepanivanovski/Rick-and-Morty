import { Route, Switch, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProtectedRoute from './routes/ProtectedRoute'; 
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
import NotFound from './components/NotFound';


function App() {
  const themeClass = useSelector(state => state.theme.theme);

  return (
    <div className={`App ${themeClass}`}>
      <Switch>
        <Redirect exact from="/" to="/characters"/>
        <Route path='/login' component={LoginPage}/>  
        <Route path='/registration' component={RegistrationPage}/>  
        <ProtectedRoute path='/characters' exact component={CharactersPage}/> 
        <ProtectedRoute path="/characters/:id" render={({match}) =><CharacterPage id={match.params.id}/>}/>
        <ProtectedRoute path='/locations' exact component={LocationsPage}/>
        <ProtectedRoute path="/locations/:id" render={({match}) =><LocationPage id={match.params.id}/>}/>
        <ProtectedRoute path='/episodes' component={EpisodesPage}/>
        <ProtectedRoute path="/episode/:id" render={({match}) =><EpisodePage id={match.params.id}/>}/>
        <ProtectedRoute path="/filterChar" component={CharacterFilter}/>   
        <ProtectedRoute path="/filterLoc" exact component={LocationFilter}/>   
        <ProtectedRoute path="/filterLoc/type" render={() => <TypeFilter id={"type"}/>}/>
        <ProtectedRoute path="/filterLoc/measurement" render={() => <TypeFilter id={"measurement"}/>}/>
        <ProtectedRoute path='/options' exact component={OptionsPage}/>
        <ProtectedRoute path='/options/edit' component={EditProfilePage}/>
        <ProtectedRoute path="/searchChar" component={SearchPage}/> 
        <ProtectedRoute path='/options/name' component={ChangeNamePage}/> 
        <ProtectedRoute path="/searchLoc" component={SearchPage}/>   
        <ProtectedRoute path="/searchEpis" component={SearchPage}/> 
        <ProtectedRoute render={() => <NotFound url="no-character.png" text="Такой страницы не существует"/>}/>  
      </Switch> 
    </div>
  );
} 
export default App;
