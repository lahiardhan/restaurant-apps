import 'regenerator-runtime'; /* for async await transpile */
import '../styles/main.css';
import '../styles/responsive.css';
import App from './views/App';

const app = new App({
  menuButton: document.querySelector('.header__menu'),
  closeMenu: document.querySelector('.close__menu'),
  drawer: document.querySelector('#nav'),
  // hero: document.querySelector('.hero'),
  content: document.querySelector('#main'),
});

window.addEventListener('hashchange', () => {
  app.renderPage();
});

window.addEventListener('load', () => {
  app.renderPage();
});

// const menu = document.querySelector('.header__menu');
// const nav = document.querySelector('#nav');
// const close = document.querySelector('.close__menu');

// menu.addEventListener('click', (e) => {
//   nav.classList.toggle('open');
//   document.body.style.overflow = 'hidden';
//   e.stopPropagation();
// });

// close.addEventListener('click', (e) => {
//   nav.classList.remove('open');
//   document.body.style.overflow = 'scroll';
//   e.stopPropagation();
// });
