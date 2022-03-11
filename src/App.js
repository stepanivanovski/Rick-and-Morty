import { Route, Switch, Redirect } from 'react-router-dom'
import { useSelector } from 'react-redux'
import CharactersPage from './pages/CharactersPage'
import CharacterPage from './pages/CharacterPage'
import EpisodesPage from './pages/EpisodesPage'
import LocationsPage from './pages/LocationsPage'
import LocationPage from './pages/LocationPage'
import EpisodePage from './pages/EpisodePage'
import CharacterFilter from './components/filters/CharacterFilter'
import LocationFilter from './components/filters/LocationFilter'
import TypeFilter from './components/filters/TypeFilter'
import CharactersSearchPage from './pages/CharactersSearchPage'
import LocationsSearchPage from './pages/LocationsSearchPage'
import EpisodesSearchPage from './pages/EpisodesSearchPage'
import NotFound from './components/NotFound'

function App() {
  const themeClass = useSelector((state) => state.theme.theme)

  return (
    <div className={`App ${themeClass}`}>
      <Switch>
        <Redirect exact from="/" to="/characters" />
        <Route path="/characters" exact component={CharactersPage} />
        <Route
          path="/characters/:id"
          render={({ match }) => <CharacterPage id={match.params.id} />}
        />
        <Route path="/locations" exact component={LocationsPage} />
        <Route
          path="/locations/:id"
          render={({ match }) => <LocationPage id={match.params.id} />}
        />
        <Route path="/episodes" component={EpisodesPage} />
        <Route
          path="/episode/:id"
          render={({ match }) => <EpisodePage id={match.params.id} />}
        />
        <Route path="/filterChar" component={CharacterFilter} />
        <Route path="/filterLoc" exact component={LocationFilter} />
        <Route
          path="/filterLoc/type"
          render={() => <TypeFilter id={'type'} />}
        />
        <Route
          path="/filterLoc/measurement"
          render={() => <TypeFilter id={'measurement'} />}
        />
        <Route path="/searchChar" component={CharactersSearchPage} />
        <Route path="/searchLoc" component={LocationsSearchPage} />
        <Route path="/searchEpis" component={EpisodesSearchPage} />
        <Route
          render={() => (
            <NotFound
              url="no-character.png"
              text="Такой страницы не существует"
            />
          )}
        />
      </Switch>
    </div>
  )
}
export default App
