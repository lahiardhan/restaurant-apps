import CONFIG from '../../global/config';

const createRestaurantDetailTemplate = (restaurant) => `
  <div class="restaurant-detail__wrapper">
    <div class="restaurant-detail__info">
      <h2 class="restaurant-detail__name">${restaurant.name}</h2>
      <p class="restaurant-detail__about">
        <span class="restaurant-detail__rating"><i class="fa fa-star font-yellow"></i>${restaurant.rating}</span> 
        ${restaurant.categories.map((category) => `
          <span class="restaurant-detail__category">${category.name}</span>
        `).join('')}
      </p>
      <p class="restaurant-detail__location font-secondary">${restaurant.address}, ${restaurant.city}</p>
      <img class="restaurant-detail__thumbnail lazyload" data-src="${CONFIG.BASE_IMAGE_URL + restaurant.pictureId}" alt="${restaurant.name}" />
      <p class="restaurant-detail__description">${restaurant.description}</p>
    </div>
    
    <h3>Menu List</h3>
    <div class="restaurant-detail__menu-list">
      <div class="foods">
        <h4>Foods</h4>
        <hr/>
        <ul class="restaurant-detail__foods">
          ${restaurant.menus.foods.map((food) => `
            <li><i class="fa fa-cutlery font-decoration"></i> ${food.name}</li>
          `).join('')}
        </ul>
      </div>
      <div class="drinks">
        <h4>Drinks</h4>
        <hr/>
        <ul class="restaurant-detail__drinks">
          ${restaurant.menus.drinks.map((drink) => `
            <li><i class="fa fa-coffee font-decoration"></i> ${drink.name}</li>
          `).join('')}
        </ul>
      </div>
    </div>

    <h3>Review Customer</h3>
    <div class="restaurant-detail__review">
      ${restaurant.customerReviews.map((customer) => `
        <div class="review-container">
          <i class="fa fa-user-circle customer-avatar font-secondary"></i>
          <div class="customer-name">
            <h4>${customer.name}</h4>
            <span class="customer-review-date">${customer.date}</span>
          </div>
          <p class="customer-review">${customer.review}</p>
        </div>
      `).join('')}
    </div>
  </div>
`;

const createRestaurantItemTemplate = (restaurant) => `
  <article class="restaurant-item">
    <a href="/#/detail/${restaurant.id}">
      <img class="restaurant-item__thumbnail lazyload" data-src="${CONFIG.BASE_IMAGE_URL + restaurant.pictureId}" alt="${restaurant.name || '-'}">
      <div class="restaurant-item__content">
        <p class="restaurant-item__city">${restaurant.city} | <span class="restaurant-item__rating" aria-label="rating restaurant ${restaurant.rating || 'NaN'}"><i class="fa fa-star font-yellow"></i>${restaurant.rating}</span>
        </p>
        <h3 class="restaurant-item__name">${restaurant.name || '-'}</h3>
      </div>
    </a>
  </article>
`;

const createLikeButtonTemplate = () => (`
  <button aria-label="like this restaurants" id="likeButton" class="like">
     <i class="fa fa-heart-o" aria-hidden="true"></i>
  </button>
`);

const createUnlikeButtonTemplate = () => (`
  <button aria-label="unlike this restaurants" id="likeButton" class="like">
    <i class="fa fa-heart" aria-hidden="true"></i>
  </button>
`);

export {
  createRestaurantItemTemplate,
  createRestaurantDetailTemplate,
  createLikeButtonTemplate,
  createUnlikeButtonTemplate,
};
