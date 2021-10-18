import { makeAutoObservable } from 'mobx';
import { getCharacters, getCharacterById, getFilteredCharacters } from '../services/api/characters.api';

class Characters {

  _characters = null
  character = {}
  loading = true
  error = false
  checkbox = {
    gender: {
      male: false,
      female: false,
      trans: false
    },  
    status: {
      alive: false,
      dead: false,
      unknown: false,
    }
  }
  nextPage = 1
  remainingPages = 1
  filterState = false
  alphabetFilterState = null

  constructor() {
    makeAutoObservable(this)
  }

  charactersLoaded = (characters) => {
    if (this._characters === null) {
      this._characters = characters
    } else {
      this._characters = [...this._characters, ...characters]

      this.loading = false;
      this.error = false;
    }
  }

  characterLoaded = (character) => {
    this.character = character;
    this.loading = false;
    this.error = false;
  }

  onLoading = () => {
    this.loading = true;
    this.error = false
  }

  onError = () => {
    this.error = true; 
    this.loading = false;
  }

  toggleGender = (genderObject) => {
    this.filterState = true;

    this.checkbox.gender = {...this.checkbox.gender, ...genderObject}
  }

  toggleStatus = (statusObject) => {
    this.filterState = true;

    this.checkbox.status = {...this.checkbox.status, ...statusObject}
  }

  resetCharacter = () => {
    this.character = {}
  }

  resetCharacters = () => {
    this._characters = null;
  }

  resetCharactersFilter = () => {
    this.checkbox.gender = Object.fromEntries(
      Object.entries(this.checkbox.gender)
        .map((item) => [item[0], item[1] = false])
    );

    this.checkbox.status = Object.fromEntries(
      Object.entries(this.checkbox.status)
        .map((item ) => [item[0], item[1] = false])
    );

    this.alphabetFilterState = null;
    this._characters = null;
    this.nextPage = 1;
    this.remainingPages = 1;
    this.filterState = false;
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

  getCharacters = async (page) =>  {
    getCharacters(page)
      .then(res => {
        console.log(res);
        this.charactersLoaded(res.data);
        this.setNextPage(res.nextPage);
        this.setRemainingPages(res.pages);
      })
      .catch(error => {
        this.onError()
      })
  }

  getFilteredCharacters = async (options, name) =>  {
    this.resetCharacters();
    getFilteredCharacters(options, name)
      .then(res => {
        this.charactersLoaded(res);
      })
      .catch(error => {
        this.onError()
      })
  }

  getCharacterById = async (id) => {
    this.onLoading()
    getCharacterById(id)
      .then(res => {
        this.characterLoaded(res);
      })
      .catch(error => {
        this.onError()
      })
  }

  get characters() {
    if ( this._characters === null ) {
      return null
    }
    
    switch (this.alphabetFilterState) {
      case 'abc':
        return [...this._characters].sort((a, b) => {
          let nameA = a["fullName"].trim();
          let nameB = b["fullName"].trim();
          if (nameA > nameB) return 1;

          if (nameB > nameA) return -1;

          return 0;
        })
      case 'cba':
        return [...this._characters].sort((a, b) => {
          let nameA = a["fullName"].trim();
          let nameB = b["fullName"].trim();
      
          if (nameA > nameB) return -1;

          if (nameB > nameA) return 1;

          return 0;
        })
      default:
        return this._characters
    }
  }
}

export default new Characters();