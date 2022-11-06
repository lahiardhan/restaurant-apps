import routes from '../routes/routes';
import UrlParser from '../routes/url-parser';
import DrawerInitiator from '../utils/drawer-initiator';

/* eslint-disable no-underscore-dangle */
class App {
  constructor({
    menuButton, closeMenu, drawer, hero, content,
  }) {
    this._menuButton = menuButton;
    this._closeMenu = closeMenu;
    this._drawer = drawer;
    this._hero = hero;
    this._content = content;

    this._initialAppShell();
  }

  _initialAppShell() {
    DrawerInitiator.init({
      menuButton: this._menuButton,
      closeMenu: this._closeMenu,
      drawer: this._drawer,
      // hero: this._hero,
    });
  }

  async renderPage() {
    const url = UrlParser.parseActiveUrlWithCombiner();
    const page = routes[url];
    this._content.innerHTML = await page.render();
    await page.afterRender();
  }
}

export default App;
