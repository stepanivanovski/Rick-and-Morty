import React, { Component } from 'react';
import { connect } from 'react-redux';
import { observer, inject } from "mobx-react";
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

// @inject("charactersStore")
@observer
export default class CharactersPage extends Component {

  state = { 
    view: true
  }

  observerElement = React.createRef(); 

  getData() {
    const { 
      filterState, 
      nextPage, 
      checkbox, 
      getCharacters, 
      getFilteredCharacters
    } = this.props.charactersStore

    if (!filterState) {
      getCharacters(nextPage);
    } else {
      getFilteredCharacters(checkbox)
    }
  }

  handleObserver = (entities, observer) => {
    if ( entities[0].isIntersecting ) {
      if (this.props.charactersStore.remainingPages !== 0) {
        this.props.charactersStore.onLoading() 
        this.getData()
      } 
    }
  }

  componentDidMount() {
    const { characters, filterState } = this.props.charactersStore;

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
    const { characters, error, filterState, loading } = this.props.charactersStore

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
              className={(this.props.charactersStore.remainingPages !== 0) ? "characters__observer" : "characters__observer_hidden" }
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
