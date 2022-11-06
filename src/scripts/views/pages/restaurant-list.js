import RestaurantSource from '../../data/restaurant-sources';
import { createRestaurantItemTemplate } from '../templates/template-creator';

const RestaurantList = {
  async render() {
    return `
      <section class="content">
        <h2 class="list-restoran__label">
          Explore Restaurant
          <hr>
        </h2>
        <div class="list-restoran"></div>
      </section>

      <section class="other">
        <article class="jobs-item">
          <img class="jobs-item__thumbnail" src="/images/heros/hero-image_4.jpg" alt="">
          <div class="jobs-item__content">
            <h3 class="jobs-item__name">Join our team</h3>
            <p class="jobs-item__city">We're always hiring and excited to add new talent to our team.</p>
            <p class="jobs-item__more">-LEARN MORE</p>
          </div>
        </article>
        <article class="info-item">
          <div class="info-item__thumbnail"></div>
          <div class="jobs-item__content">
            <h3 class="jobs-item__name">Sustainability</h3>
            <p class="jobs-item__city">Comitted to the triple bottom line-people, planet and profit-we do everything we can to make our restaurant environment as healthy as possible.</p>
            <p class="info-item__more">-LEARN MORE</p>
          </div>
        </article>
      </section>
    `;
  },

  async afterRender() {
    const restaurants = await RestaurantSource.restaurantList();
    const restaurantsContainer = document.querySelector('.list-restoran');
    restaurants.forEach((restaurant) => {
      restaurantsContainer.innerHTML += createRestaurantItemTemplate(restaurant);
    });
  },
};

export default RestaurantList;
