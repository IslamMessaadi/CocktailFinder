// Make sure sw are supported
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker
      .register('./sw.js')
      .then(reg => console.log('Service Worker: Registered (Pages)',reg))
      .catch(err => console.log(`Service Worker: Error: ${err}`));
  });
}

// Detects if device is on iOS 
 const isIos = () => {
  const userAgent = window.navigator.userAgent.toLowerCase();
  return /iphone|ipad|ipod/.test(userAgent);
}
// Detects if device is in standalone mode
const isInStandaloneMode = () => ('standalone' in window.navigator) && (window.navigator.standalone);

// Checks if should display install popup notification:
if (isIos() && !isInStandaloneMode()) {
  this.setState({ showInstallMessage: true });
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