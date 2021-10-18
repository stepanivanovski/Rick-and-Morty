import { makeAutoObservable } from 'mobx';
import { getLocations, getLocationById, getFilteredLocations } from '../services/api/locations.api';

class Locations {
  _locations = null;
  location = {};
  loading = true;
  error = false;
  filterState = false;
  alphabetFilterState = null;
  type = "";
  measurement = "";
  nextPage = 1;
  remainingPages = 1;

  constructor() {
    makeAutoObservable(this)
  }

  locationsLoaded = (locations) => {
    if (this._locations === null) {
      this._locations = locations;
    } else {
      this._locations = [...this._locations, ...locations]
    }

    this.loading = false;
    this.error = false;
  }

  locationLoaded = (location) => {
    this._location = location;
    this.loading = false;
    this.error = false;
  }

  onLoading = () => {
    this.loading = true;
    this.error = false
  }

  onError = () => {
    this.error = true;
    this.loading= false;
  }

  resetFilter = () => {
    this.alphabetFilterState = null;
    this.filterState = false;
    this.measurement = "";
    this.type = "";
    this._locations = null;
    this.nextPage = 1;
    this.remainingPages = 1;
  }

  resetLocation = () => {
    this.location = {}
  }

  resetLocations = () => {
    this._locations = null;
  }

  setType = (type) => {
    this.type = type;
    this.filterState = true;
  }

  setMeasurement = (measurement) => {
    this.measurement = measurement;
    this.filterState = true;
  }
  
  setAlphabet = (alphabetValue) => {
    if (this.alphabetFilterState === alphabetValue) {
      this.alphabetFilterState = null;
    } else {
      this.alphabetFilterState = alphabetValue;
    }
  }

  setNextPage = (pageNumber) => {
    this.nextPage = pageNumber;
  }

  setRemainingPages = (pagesAmount) => {
    this.remainingPages = pagesAmount;
  }

  getLocations = async (page) => {
    getLocations(page)
      .then(res => {
        this.locationsLoaded(res.data)
        this.setNextPage(res.nextPage)
        this.setRemainingPages(res.pages)
      })
      .catch(error => {
        this.onError(error)
      })
  }

  getFilteredLocations = async (options, name) => {
    this.resetLocations()
    getFilteredLocations(options, name)
      .then(res => {
        this.locationsLoaded(res);
      })
      .catch(error => {
        this.onError()
      })
  }

  getLocationById = async (id) => {
    this.onLoading()
    getLocationById(id)
      .then(res => {
        this.locationLoaded(res);
      })
      .catch(error => {
        this.onError()
      })
  }

  get locations() {
    if ( this._locations === null ) {
      return null
    }

    switch (this.alphabetFilterState) {
      case 'abc':
        return [...this._locations].sort((a, b) => {
          let nameA = a["name"].trim();
          let nameB = b["name"].trim();
      
          if (nameA > nameB) return 1;

          if (nameB > nameA) return -1;

          return 0;
        })
      case 'cba':
        return [...this._locations].sort((a, b) => {
          let nameA = a["name"].trim();
          let nameB = b["name"].trim();
      
          if (nameA > nameB) return -1;

          if (nameB > nameA) return 1;

          return 0;
        })
      default:
        return this._locations
    }
  }
}

export default new Locations();