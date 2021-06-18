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

    //for ingredient

    for (let ingredientsRecipes of recipes.recipes) {

        for (let ingredients of ingredientsRecipes.ingredients) {


            const ingFilterUl = document.getElementById("ing-filter-list");

            ingFilterUl.appendChild(generateIngredients(ingredients.ingredient.slice(0, -2)));

        }
    }

}

function appliancesFilter() {

    //for ingredient

    for (let applianceRecipes of recipes.recipes) {

        console.log(applianceRecipes.appliance);

        const appFilterUl = document.getElementById("app-filter-list");

        appFilterUl.appendChild(generateAppliance(applianceRecipes.appliance));

    }

}

function ustensilsFilter() {

    //for ingredient


    for (let ustensilsRecipes of recipes.recipes) {

        for (let ustensils of ustensilsRecipes.ustensils) {


            console.log(ustensils);

            const ustFilterUl = document.getElementById("ust-filter-list");

            ustFilterUl.appendChild(generateUstensils(ustensils.toLowerCase().trim()));


        }

    }

}



ingFilter.addEventListener('click', openIngredientsFilter => {
    ingFilter.classList.toggle("scaled");
    ingStatus.classList.toggle("open");
    ingArrow.style.transform = "translateY(-50%) rotate(180deg)";
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




