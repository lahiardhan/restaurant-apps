import RestaurantSource from '../../data/restaurant-sources';
import { createRestaurantItemTemplate } from '../templates/template-creator';

const RestaurantList = {
  async render() {
    return `
      <div class="hero lazyload">
        <div class="hero__inner">
          <h2 class="hero__title">The place where you can find Sundanese Food.</h2>
          <p class="hero__tagline">
            Sundanese cuisine is the cuisine of the Sundanese people of Western Java, and Banten, Indonesia. It is one of the most popular foods in Indonesia.
          </p>
        </div>
      </div>

      <main id="main" tabindex="0">
        <section class="content">
          <h2 class="list-restaurant__label">
            Explore Restaurant
            <hr>
          </h2>
          <div class="list-restaurant"></div>
        </section>

        <section class="other">
          <article class="jobs-item">
            <picture>
              <source class="jobs-item__thumbnail lazyload" media="(max-width: 600px)" srcset="/images/sharp/hero-image_4-small.jpg" type="image/jpeg">
              <img class="jobs-item__thumbnail lazyload" src="/images/sharp/hero-image_4-large.jpg" alt="">
            </picture>
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
    const restaurants = await RestaurantSource.restaurantList();
    const restaurantsContainer = document.querySelector('.list-restaurant');

    restaurants.forEach((restaurant) => {
      restaurantsContainer.innerHTML += createRestaurantItemTemplate(restaurant);
    });
  },
};

export default RestaurantList;
