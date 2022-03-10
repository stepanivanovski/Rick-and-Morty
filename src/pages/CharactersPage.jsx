import React, { Component } from 'react';
import { connect } from 'react-redux';
import Spinner from "../components/Spinner";
import NotFound from "../components/NotFound";
import SearchPanel from "../components/SearchPanel"
import CharacterCardList from "../components/cards/CharacterCardList"
import { IconListView, IconTableView } from "../icons/";
import NavBar from "../components/NavBar";
import { getCharactersSelector } from '../selectors/charactersSelector';
import { 
  getCharactersThunk,
  getFilteredCharactersThunk,
  onLoading,
  setNextPage,
  setRemainingPages
} from "../store/charactersSlice";

class CharactersPage extends Component {

  state = { 
    view: true
  }

  observerElement = React.createRef(); 

  getData() {
    const { 
      filterState, 
      nextPage, 
      checkbox, 
      getCharactersThunk, 
      getFilteredCharactersThunk
    } = this.props

    if (!filterState) {
      getCharactersThunk(nextPage);
    } else {
      getFilteredCharactersThunk(checkbox)
    }
  }

  handleObserver = (entities, observer) => {
    if ( entities[0].isIntersecting ) {
      if (this.props.remainingPages !== 0) {
        this.props.onLoading() 
        this.getData()
      } 
    }
  }

  componentDidMount() {
    const { characters, filterState } = this.props;

    if (!characters) {
      this.getData();
    } 
  
    if (!filterState) {
      const options = {
        root: null,
        rootMargin: "0px",
        threshold: 1.0
      }
  
      const observer = new IntersectionObserver(
        this.handleObserver, 
        options
      )
  
      observer.observe(this.observerElement.current);
    }
  }

  showViewIcon = () => {
    return (this.state.view) ? <IconListView/> : <IconTableView/>
  }

  
  render() {
    const { characters, error, filterState, loading } = this.props

    const content = (error) ?
      <NotFound text="Упс, что-то пошло не так" url="not-found.png"/> :
     (!characters) ? 
      <Spinner/> : 
      (characters === null) ? 
      null :
      (characters.length === 0) ? 
      <NotFound text="По данным фильтра ничего не найдено" url="not-found.png"/> :
      <CharacterCardList columnView={this.state.view} data={characters}/> 

    return (
      <div className="characters container">
        <div className="characters__header">
          <SearchPanel 
            path="./searchChar"
            filter
            filterPath="/filterChar"
            placeholder="Найти персонажа"/>
          <div className="characters__wrapper">
            <div className="characters__total">
              Всего персонажей: {characters?.length}
            </div>
            <button 
              className="characters__view-switch"
              onClick={() => this.setState({view: !this.state.view})}>
              {this.showViewIcon()}
            </button>
          </div>
        </div>
        {content}
        {
          (!filterState) ?
            <div
              style={(!characters) ? {display: "none"} : {display: "block"}}
              className={(this.props.remainingPages !== 0) ? "characters__observer" : "characters__observer_hidden" }
              ref={this.observerElement}>
                {
                  (loading) ?
                    <span>Loading...</span> :
                    null 
                }
            </div> :
            null
        }    
        <NavBar/>
      </div>
    );
  }
};

const mapStateToProps = (state) => {
  return {
    characters: getCharactersSelector(state), 
    error: state.characters.error, 
    filterState: state.characters.filterState, 
    loading: state.characters.loading,
    checkbox: state.characters.checkbox,
    nextPage: state.characters.nextPage, 
    remainingPages: state.characters.remainingPages 
  } 
}

const mapDispatchToProps = { 
  getCharactersThunk,
  getFilteredCharactersThunk,
  onLoading,
  setRemainingPages,
  setNextPage
}

export default connect(mapStateToProps, mapDispatchToProps)(CharactersPage);