import FavoriteRestaurantIdb from '../../data/favorite-restaurant-idb';
import { createRestaurantItemTemplate } from '../templates/template-creator';

const Favorites = {
  async render() {
    return `
      <div class="hero">
        <div class="hero__inner">
          <h2 class="hero__title">The place where you can find Sundanese Food.</h2>
          <p class="hero__tagline">
            Sundanese cuisine is the cuisine of the Sundanese people of Western Java, and Banten, Indonesia. It is one of the most popular foods in Indonesia.
          </p>
        </div>
      </div>
      
      <main id="main">
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
    const restaurants = await FavoriteRestaurantIdb.getAllRestaurants();
    const restaurantsContainer = document.querySelector('.list-restoran');

    restaurants.forEach((restaurant) => {
      restaurantsContainer.innerHTML += createRestaurantItemTemplate(restaurant);
    });
  },
};

export default Favorites;
