import FavoriteRestaurantIdb from '../../data/favorite-restaurant-idb';
import Loader from '../../utils/loader';
import { createRestaurantItemTemplate } from '../templates/template-creator';

const Favorites = {
  async render() {
    return `
      <main id="main" tabindex="0">
        <section class="content">
          <h2 class="list-restoran__label">
            Favorites Restaurants
            <hr>
          </h2>
          <div class="list-restoran"></div>
        </section>
      </main>
    `;
  },

  async afterRender() {
    Loader.hideLoading();
    const restaurants = await FavoriteRestaurantIdb.getAllRestaurants();
    const mainContainer = document.querySelector('#main');
    const restaurantsContainer = document.querySelector('.list-restoran');

    if (!restaurants.length) {
      mainContainer.innerHTML += `
        <div class="error-load-text">
          <p>No favorite restaurant list</p>
        </div>
      `;
    }

    restaurants.forEach((restaurant) => {
      restaurantsContainer.innerHTML += createRestaurantItemTemplate(restaurant);
    });
  },
};

export default Favorites;
