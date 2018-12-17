// Create Cocktail 
const cocktail = new Cocktail();

// Create UI 
const ui = new UI();

// Add event listener, which fetchs data, and print into favorites page
window.addEventListener('load', (e) => {
  let favs = JSON.parse(localStorage.getItem('favorites'));

  if(favs == null) return;
  favs.forEach((fav) => {
    cocktail.getFavorite(fav)
      .then(data => {
        if (data.favoriteData.favorite === null) {
          // Shows nothing
        } else {
          ui.showFavorites(data.favoriteData);
        }
      })
  });
});

// Create input
const searchCocktail = document.getElementById('searchCocktail');

if (searchCocktail !== null) {
  // Add event listener
  searchCocktail.addEventListener('keyup', (e) => {

    const userText = e.target.value;

    if (userText !== '') {
      // Make http request
      cocktail.getCocktail(userText)
        .then(data => {
          if (data.cocktailData.drinks === null) {
            // Shows nothing
          } else {
            // shows ui
            ui.showCocktail(data.cocktailData);
          }
        })
    } else {
      ui.clearCard();
    }
  });
}

