import RestaurantSource from '../../data/restaurant-sources';
import Loader from '../../utils/loader';
import { createRestaurantItemTemplate } from '../templates/template-creator';

const RestaurantList = {
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
      </main>
    `;
  },

  async afterRender() {
    Loader.hideLoading();
    const restaurants = await RestaurantSource.restaurantList();
    const restaurantsContainer = document.querySelector('.list-restoran');

    restaurants.forEach((restaurant) => {
      restaurantsContainer.innerHTML += createRestaurantItemTemplate(restaurant);
    });
  },
};

export default RestaurantList;
