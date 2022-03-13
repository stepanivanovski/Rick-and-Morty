import { createSelector } from 'reselect'

const getFilter = (state) => state.characters.alphabetFilterState
const getCharacters = (state) => state.characters.characters

export const getCharactersSelector = createSelector(
  [getFilter, getCharacters],
  (alphabetFilterState, characters) => {
    if (characters === null) {
      return null
    }

    switch (alphabetFilterState) {
      case 'abc':
        console.log(characters, alphabetFilterState)
        return [...characters].sort((a, b) => {
          let nameA = a['name'].trim()
          let nameB = b['name'].trim()
          if (nameA > nameB) return 1

          if (nameB > nameA) return -1

          return 0
        })
      case 'cba':
        return [...characters].sort((a, b) => {
          let nameA = a['name'].trim()
          let nameB = b['name'].trim()

          if (nameA > nameB) return -1

          if (nameB > nameA) return 1

          return 0
        })
      default:
        return characters
    }
  }
)
