import { makeAutoObservable } from 'mobx';

class Theme {
  theme = "light"

  constructor() {
    makeAutoObservable(this)
  }

  changeTheme(theme) {
    this.theme = theme
  }
}

export default new Theme();
