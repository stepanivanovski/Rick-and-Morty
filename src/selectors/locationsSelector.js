import { createSelector } from 'reselect'

const getFilter = (state) => state.locations.alphabetFilterState
const getLocations = (state) => state.locations.locations

export const getLocationsSelector = createSelector(
  [ getFilter, getLocations ],
  (alphabetFilterState, locations) => {
    if ( locations === null ) {
      return null
    }

    switch (alphabetFilterState) {
      case 'abc':
        return [...locations].sort((a, b) => {
          let nameA = a["name"].trim();
          let nameB = b["name"].trim();
      
          if (nameA > nameB) return 1;

          if (nameB > nameA) return -1;

          return 0;
        })
      case 'cba':
        return [...locations].sort((a, b) => {
          let nameA = a["name"].trim();
          let nameB = b["name"].trim();
      
          if (nameA > nameB) return -1;

          if (nameB > nameA) return 1;

          return 0;
        })
      default:
        return locations
    }
  }
);