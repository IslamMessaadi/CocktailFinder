// Make sure sw are supported
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker
      .register('../sw.js')
      .then(reg => console.log('Service Worker: Registered (Pages)'))
      .catch(err => console.log(`Service Worker: Error: ${err}`));
  });
}

class Cocktail {
  async getCocktail(cocktail) {
    const cocktailResponse = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${cocktail}`);

    const cocktailData = await cocktailResponse.json();

    return {
      cocktailData
    }
  }

  async getFavorite(favorite) {
    const favoriteResponse = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${favorite}`);

    const favoriteData = await favoriteResponse.json();

    return {
      favoriteData
    }
  }
}