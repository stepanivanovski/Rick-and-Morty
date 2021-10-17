import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Spinner from "../components/Spinner";
import NotFound from "../components/NotFound";
import SearchPanel from "../components/SearchPanel";
import LocationCardList from "../components/cards/LocationCardList";
import NavBar from "../components/NavBar";
import { getLocationsSelector } from '../selectors/locationsSelector';
import { 
  onLoading,
  resetLocations,
  getLocationsThunk,
  getFilteredLocationsThunk
} from "../store/locationsSlice"

const LocationsPage = () => {
  
  const dispatch = useDispatch();
  const {  loading, error, filterState, type, measurement } = useSelector(state => state.locations);

  const locations = useSelector(getLocationsSelector)

  useEffect(() => {
    if (!locations) {
      if (!filterState) {
        dispatch(getLocationsThunk());
      } else {
        dispatch(getFilteredLocationsThunk({  type, measurement }))
      }
    }
  },[]) 
  
  const content = (!locations) ? 
    <Spinner/> : 
    (error) ? 
    <NotFound text="Упс, что-то пошло не так, проверьте подключение к интернету" 
      url="not-found.png"/>  : 
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
      <NavBar/>
    </div>
  );
};

export default LocationsPage;