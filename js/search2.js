import * as recipes from './recipes.js';
import { generateCards } from './cards.js';
import { generateIngredients, generateAppliance, generateUstensils } from './filter.js'

// DOM

const main = document.querySelector('main');
const searchInput = document.getElementById('search');


/**
 * [setCards is generate card with all parameter]
 *
 * @return  {[clearCards]}  [clear all the cards]
 * @return  {[generateCards]}  [with boucle for of recipes.recipes generateCards with some parameter look like name, time..]
 * @return  {[setNoResults]}  [condition for set no results]
 */

function setCards() {

    clearCards();

    for (let cur of recipes.recipes) {

        main.appendChild(generateCards(cur.name, cur.time, cur.ingredients, cur.description));

    }

    if (recipes.recipes === 0) {

        setNoResults();

    }

}

setCards();


/**
 * [clearCards clear all the cards with innerHTML]
 */

function clearCards() {

    main.innerHTML = ``

}





/**
 * [searchAppliance Search Apppliance]
 *
 * @param   {[type]}  listOfPlat        [listOfPlat is Set to get all list]
 * @param   {[type]}  choseARechercher  [choseARechercher is the action to search look like e.target.value]
 * @param   {[type]}  type              [type is appliance or name...]
 *
 * @return  {[type]}                    [return the search]
 */


const searchAppliance = (listOfPlat, choseARechercher, type = "appliance") => {

    //for appliance 

    for (let applianceRecipes of recipes.recipes) {

        if (applianceRecipes[type].toLowerCase().includes(choseARechercher.toLowerCase())) {

            listOfPlat.add(applianceRecipes)

        }


    }


}






const searchIngredients = (listOfPlat, choseARechercher) => {

    //for ingredient



    for (let ingredientsRecipes of recipes.recipes) {

        for (let ingredients of ingredientsRecipes.ingredients) {

            if (ingredients.ingredient.toLowerCase().includes(choseARechercher.toLowerCase())) {

                listOfPlat.add(ingredientsRecipes)

            }

        }

    }



}





const searchUstensils = (listOfPlat, choseARechercher) => {


    for (let ustensilsRecipes of recipes.recipes) {

        for (let ustensils of ustensilsRecipes.ustensils) {

            if (ustensils.toLowerCase().trim().includes(choseARechercher.toLowerCase().trim())) {

                listOfPlat.add(ustensilsRecipes)

            }

        }

    }

}






const rech = document.getElementById('search')

rech.onkeydown = (e) => {


    let listOfPlat = new Set();

    clearCards();


    searchIngredients(listOfPlat, e.target.value, "ingredient")
    searchAppliance(listOfPlat, e.target.value)
    searchAppliance(listOfPlat, e.target.value, "name")
    searchUstensils(listOfPlat, e.target.value)


    if (listOfPlat.size > 0) {
        for (let cur of listOfPlat) {
            main.appendChild(generateCards(cur.name, cur.time, cur.ingredients, cur.description));
        }
    }



}




const ingFilter = document.querySelector(".ingScaled");
const ingStatus = document.querySelector(".ing-status");
const ingArrow = document.getElementById('ing-btn');

const appFilter = document.querySelector(".appScaled");
const appStatus = document.querySelector(".app-status");

const ustFilter = document.querySelector(".ustScaled");
const ustStatus = document.querySelector(".ust-status");



function ingredientsFilter() {


    let mySet = new Set()

    const ingredientsArray = recipes.recipes.map(listOfPlates => listOfPlates.ingredients)
    for (let ingArr of ingredientsArray)
        mySet.add(...ingArr.map(ingredient => ingredient.ingredient.slice(0, -3)))


    const ingFilterUl = document.getElementById("ing-filter-list");


    let listOfIng = new Set();

    for (let cur of mySet) {

        let ingredientClick = generateIngredients(cur);

        ingredientClick.onclick = (e) => {

            clearCards()
            searchIngredients(listOfIng, e.target.title, "ingredient")

            if (listOfIng.size > 0) {
                for (let cur of listOfIng) {
                    main.appendChild(generateCards(cur.name, cur.time, cur.ingredients, cur.description));
                }
            }

        }

        ingFilterUl.appendChild(ingredientClick);

    }


}

function appliancesFilter() {


    const applianceArray = new Set(recipes.recipes.map(listOfPlates => listOfPlates.appliance))


    const appFilterUl = document.getElementById("app-filter-list");


    for (let cur of applianceArray) {

        appFilterUl.appendChild(generateAppliance(cur));

    }

}

function ustensilsFilter() {


    let mySet = new Set()

    const ustensilArray = recipes.recipes.map(listOfPlates => listOfPlates.ustensils)
    for (let ustArr of ustensilArray)
        mySet.add(...ustArr)


    const ustFilterUl = document.getElementById("ust-filter-list");


    for (let cur of mySet) {

        ustFilterUl.appendChild(generateUstensils(cur));

    }

}



ingFilter.addEventListener('click', openIngredientsFilter => {
    ingFilter.classList.toggle("scaled");
    ingStatus.classList.toggle("open");
    ingArrow.style.transform = "translateY(-50%) rotate(180deg)";

    const ingFilterUl = document.getElementById("ing-filter-list");

    ingFilterUl.textContent = '';

    ingredientsFilter();

    ingFilter.addEventListener('click', openIngredientsFilter => {
        ingArrow.style.transform = "translateY(-50%) rotate(360deg)";
    })
})

appFilter.addEventListener('click', openAppareilsFilter => {
    appFilter.classList.toggle("scaled");
    appStatus.classList.toggle("open");
    appliancesFilter();
})

ustFilter.addEventListener('click', openUstensilesFilter => {
    ustFilter.classList.toggle("scaled");
    ustStatus.classList.toggle("open");
    ustensilsFilter()
})




