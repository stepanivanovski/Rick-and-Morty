import React, { Component } from 'react';
import { observer, inject } from "mobx-react";
import Spinner from "../components/Spinner";
import NotFound from "../components/NotFound";
import SearchPanel from "../components/SearchPanel";
import LocationCardList from "../components/cards/LocationCardList";
import NavBar from "../components/NavBar";

export default @inject("locationsStore") @observer class LocationsPage extends Component {
  
  observerElement = React.createRef(); 

  getData() {
    const { 
      filterState, 
      nextPage, 
      type,
      measurement, 
      getLocations, 
      getFilteredLocations
    } = this.props.locationsStore

    if (!filterState) {
      getLocations(nextPage);
      console.log(1);
    } else {
      console.log(2);
      getFilteredLocations({ type, measurement })
    }
  }

  handleObserver = (entities, observer) => {
    if ( entities[0].isIntersecting ) {
      if (this.props.locationsStore.remainingPages !== 0) {
        this.props.locationsStore.onLoading() 
        this.getData()
      } 
    }
  }

  componentDidMount() {
    const { locations, filterState } = this.props.locationsStore;

    if (!locations) {
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

  render() {
    const { 
      filterState, 
      locations,
      error,
      loading
    } = this.props.locationsStore

    const content = (error) ?
      <NotFound text="Упс, что-то пошло не так, проверьте подключение к интернету" 
        url="not-found.png"/>  : 
      (!locations) ? 
       <Spinner/> : 
       (locations === null) ? 
       null :
       (locations.length === 0) ? 
       <NotFound text="По данным фильтра ничего не найдено" url="not-found.png"/> :  
       <LocationCardList data={locations}/> 

    return (
      <div className="locations">
        <div className="locations__header">
          <SearchPanel
            path="./searchLoc"
            filterPath="/filterLoc"
            placeholder={"Найти локацию"}
            filter/>
          <div className="locations__total">
            Всего локаций: {locations?.length}
          </div>
        </div>
        {content}
        {
          (!filterState) ?
            <div
              style={(!locations) ? {display: "none"} : {display: "block"}}
              className={(this.props.locationsStore.remainingPages !== 0) ? "characters__observer" : "characters__observer_hidden" }
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
