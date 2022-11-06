const Like = {
  async render() {
    return `
      <div class="content">
        <h2 class="content__heading">Your Liked Movie</h2>
        <div id="movies" class="movies">
  
        </div>
      </div>
    `;
  },

  async afterRender() {

  },
};

export default Like;
