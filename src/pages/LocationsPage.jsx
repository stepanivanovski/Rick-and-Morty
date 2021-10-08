import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Spinner from "../components/Spinner";
import NotFound from "../components/NotFound";
import SearchPanel from "../components/SearchPanel";
import LocationCardList from "../components/cards/LocationCardList";
import NavBar from "../components/NavBar";
import { 
  onLoading,
  fetchData,
} from "../store/fetchDataSlice"

const LocationsPage = () => {
  
  const dispatch = useDispatch();
  const { fetch, locFilter } = useSelector(state => state)
  
  const { loading, error, locations} = fetch;
  const { locAlphabet, type, measurement } = locFilter;


  useEffect(() => {
    if (!locFilter) {
      dispatch(fetchData("locations", {localFilterData: locAlphabet}));
    } else {
      dispatch(fetchData("filteredLoc", {removeFilterData: { type, measurement }, localFilterData: locAlphabet}))
    }
    return dispatch(onLoading());
  },[]) 
  
  const content = (loading) ? 
    <Spinner/> : 
    (error) ? 
    <NotFound text="Упс, что-то пошло не так, проверьте подключение к интернету" 
      url="not-found.png"/>  : 
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
          Всего локаций: {locations.length}
        </div>
      </div>
      {content}
      <NavBar/>
    </div>
  );
};

export default LocationsPage;