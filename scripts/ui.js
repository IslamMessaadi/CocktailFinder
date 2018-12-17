class UI {
  constructor() {
    this.cocktailCard = document.getElementById('cocktailCard');
    this.favoritesCard = document.getElementById('favoritesCard');
  }
  

  toggleButtonClass() {
      this.classList.toggle('favBtn');

      // Check if btn has .favBtn class
      if (this.classList.contains('favBtn')) {
        
        // Start set this to LocalStorage
        let cocktailId = this.id;

        if (localStorage.getItem('favorites') === null) {
          let favorites = [];
          favorites.push(cocktailId);
          localStorage.setItem('favorites', JSON.stringify(favorites));
        } else {
          let favorites = JSON.parse(localStorage.getItem('favorites'));
          favorites.push(cocktailId);
          localStorage.setItem('favorites', JSON.stringify(favorites));
        }
      
      } else {
        // Remove this id from localStorage  
        let cocktailId = this.id;

        let favorites = JSON.parse(localStorage.getItem('favorites'));

        favorites.forEach(fav => {
          if(fav == cocktailId) favorites.splice(favorites.indexOf(fav), 1);
        });

        localStorage.setItem('favorites', JSON.stringify(favorites));
      }
      
      // Checks if current page is Favorites.html, then reload one
      if(window.location.pathname == '/CocktailFinder/favorites.html') location.reload(true);
  }

  showCocktail(cocktail) {
    let output='';

    cocktail.drinks.forEach(drink => {
      output += `<div class="card card-body my-3 special-card ">
        <div class="row">
          <div class="col-md-6">
            <img class="img-fluid mb-2 rounded" src="${drink.strDrinkThumb}" />
          </div>
          <div class="col-md-6 text-center">
            <button id="${drink.idDrink}" class="btn btn-outline-dark float-right" type="submit" data-toggle="tooltip" data-placement="bottom" title="Add to favorites">
              <span class="far fa-star"></span>
            </button>
            <h2 class="my-2">${drink.strDrink}</h2>
            <p class="my-4 text-white">${drink.strInstructions}</p>
            <ul class="list-group text-white">
              <li class="list-group-item special-card">${drink.strMeasure1}  ${drink.strIngredient1}</li>
              <li class="list-group-item special-card">${drink.strMeasure2}  ${drink.strIngredient2}</li>
              <li class="list-group-item special-card">${drink.strMeasure3}  ${drink.strIngredient3}</li>
              <li class="list-group-item special-card">${drink.strMeasure4}  ${drink.strIngredient4}</li>
              <li class="list-group-item special-card">${drink.strMeasure5}  ${drink.strIngredient5}</li>
              <li class="list-group-item special-card">${drink.strMeasure6}  ${drink.strIngredient6}</li>
            </ul>
          </div>
        </div>
      </div>`
    });

    //console.log('output >>>>>>>>>> ',output) ;
    //console.error(output) ;
    //if(output !== 'undefined') 
    this.cocktailCard.innerHTML = output;

    // Fetch button to toggle class on it
    let outputBtn = document.querySelectorAll(".btn.btn-outline-dark.float-right");

    outputBtn.forEach(e => {
      e.addEventListener('click', this.toggleButtonClass);
    });

    outputBtn.forEach(e => {
      e.addEventListener('touchenter', this.toggleButtonClass);
    });
  }  

  showFavorites(favorite) {
    let favOutput="";

    // Check output from favorite data, and them properly added to output
    favorite.drinks.forEach(drink => {
      favOutput += `<div class="card card-body my-3 special-card animated fadeIn">
      <div class="row">
        <div class="col-md-6">
          <img class="img-fluid mb-2 rounded" src="${drink.strDrinkThumb}" />
        </div>
        <div class="col-md-6 text-center">
          <button id="${drink.idDrink}" class="btn btn-outline-dark float-right favBtn" type="submit" data-toggle="tooltip" data-placement="bottom" title="Remove from favorites">
            <span class="far fa-star"></span>
          </button>
          <h2 class="my-2">${drink.strDrink}</h2>
          <p class="my-4 text-white">${drink.strInstructions}</p>
          <ul class="list-group text-white">
            <li class="list-group-item special-card">${drink.strMeasure1}  ${drink.strIngredient1}</li>
            <li class="list-group-item special-card">${drink.strMeasure2}  ${drink.strIngredient2}</li>
            <li class="list-group-item special-card">${drink.strMeasure3}  ${drink.strIngredient3}</li>
            <li class="list-group-item special-card">${drink.strMeasure4}  ${drink.strIngredient4}</li>
            <li class="list-group-item special-card">${drink.strMeasure5}  ${drink.strIngredient5}</li>
            <li class="list-group-item special-card">${drink.strMeasure6}  ${drink.strIngredient6}</li>
          </ul>
        </div>
      </div>
    </div>`
    });

    //if(favOutput !== 'undefined') 
    //console.log('output >>>>>>>>>> ',favOutput) ;
   //console.error(favOutput) ;
    this.favoritesCard.innerHTML += favOutput;

    // Fetch button to toggle class on it
    let outputBtn = document.querySelectorAll(".btn.btn-outline-dark.float-right");

    outputBtn.forEach(e => {
      e.addEventListener('click', this.toggleButtonClass);
    });

    outputBtn.forEach(e => {
      e.addEventListener('touchenter', this.toggleButtonClass);
    });
  }


  clearCard() {
    this.cocktailCard.innerHTML = '';
  }

}

