import * as recipes from './recipes.js';

import { generateCards } from './cards.js';

const main = document.querySelector('main');
const searchInput = document.getElementById('search');




function setCards() {

    clearCards();

    for (let cur of recipes.recipes) {

        generateCards(cur.name, cur.time, cur.ingredients, cur.description);
        main.appendChild(generateCards(cur.name, cur.time, cur.ingredients, cur.description));



    }

    if (recipes.recipes === 0) {
        setNoResults();
    }

}

setCards();

function clearCards() {
    main.innerHTML = ``
}






const searchAppliance = (listOfPlat, choseARechercher, type = "appliance") => {

    //for appliance 

    for (let applianceRecipes of recipes.recipes) {

        if (applianceRecipes[type].toLowerCase().includes(choseARechercher.toLowerCase())) {
            listOfPlat.add(applianceRecipes)
        }


    }

    // return trouve.length > 0 ? trouve : "rien trouve appliance"


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




ingFilter.addEventListener('click', openIngredientsFilter => {
    ingFilter.classList.toggle("scaled");
    ingStatus.classList.toggle("open");
    ingArrow.style.transform = "translateY(-50%) rotate(180deg)";

    ingFilter.addEventListener('click', openIngredientsFilter => {
        ingArrow.style.transform = "translateY(-50%) rotate(360deg)";
    })
})

appFilter.addEventListener('click', openAppareilsFilter => {
    appFilter.classList.toggle("scaled");
    appStatus.classList.toggle("open");
})

ustFilter.addEventListener('click', openUstensilesFilter => {
    ustFilter.classList.toggle("scaled");
    ustStatus.classList.toggle("open");
})

