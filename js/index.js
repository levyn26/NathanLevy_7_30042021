import { ingredientsFilter, appareilFilter, ustensilesFilter } from './filter.js'
import * as recipes from './recipes.js'
import { generateCards } from './cards.js'

const main = document.querySelector('main');

/**
 * [Bouton filter qui permet de trier ses recherches]
 *
 * @return  {[button]}  [return description]
 */

ingredientsFilter();
appareilFilter();
ustensilesFilter();



for (let cur of recipes.recipes){

    
    generateCards(cur.name, cur.time, cur.ingredients, cur.description);
    main.appendChild(generateCards(cur.name, cur.time, cur.ingredients, cur.description));



}

