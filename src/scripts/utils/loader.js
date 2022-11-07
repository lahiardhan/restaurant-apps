const Loader = {
  hideLoading() {
    const loaderContainer = document.querySelector('.loader-container');
    setTimeout(() => {
      loaderContainer.style.display = 'none';
    }, 3000);
  },
};

export default Loader;
