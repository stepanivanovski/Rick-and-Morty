import { createSelector } from 'reselect'

const getFilter = (state) => state.characters.alphabetFilterState
const getCharacters = (state) => state.characters.characters

export const getCharactersSelector = createSelector(
  [ getFilter, getCharacters ],
  (alphabetFilterState, characters) => {
    switch (alphabetFilterState) {
      case 'abc':
        console.log(characters, alphabetFilterState);
        return [...characters].sort((a, b) => {
          let nameA = a["fullName"].trim();
          let nameB = b["fullName"].trim();
          if (nameA > nameB) return 1;

          if (nameB > nameA) return -1;

          return 0;
        })
      case 'cba':
        return [...characters].sort((a, b) => {
          let nameA = a["fullName"].trim();
          let nameB = b["fullName"].trim();
      
          if (nameA > nameB) return -1;

          if (nameB > nameA) return 1;

          return 0;
        })
      default:
        return characters
    }
  }
);