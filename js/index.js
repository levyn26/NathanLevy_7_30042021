// import { ingredientsFilter, appareilFilter, ustensilesFilter } from './filter.js';
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



const rechercher = (choseARechercher, type = "appliance") => {

    return recipes.recipes.filter((it) => { return it[type].toLowerCase().includes(choseARechercher.toLowerCase()) })


}


const rechercherIngredient = (choseARechercher, typeIngredient) => {


    const trouve = recipes.recipes.filter((it) => {

        return it["ingredients"].filter(ingredient => {
            return ingredient[typeIngredient].toLowerCase().trim().includes(choseARechercher.toLowerCase().trim())
        }).length > 0

    })

    return trouve.length > 0 ? trouve : "rien trouve"
}

const rechercherUstensils = (choseARechercher) => {

    const trouve = recipes.recipes.filter((it) => {

        return it["ustensils"].filter(ustensils => {
            return ustensils.toLowerCase().trim().includes(choseARechercher.toLowerCase().trim())
        }).length > 0

    })

    return trouve.length > 0 ? trouve : "rien trouve ustensils"

}



const rech = document.getElementById('search')

rech.onkeydown = (e) => {


    clearCards();


    if (rechercherIngredient(e.target.value, "ingredient") != "rien trouve") {

        for (let cur of rechercherIngredient(e.target.value, "ingredient")) {

            main.appendChild(generateCards(cur.name, cur.time, cur.ingredients, cur.description));

        }

    } else if (rechercherUstensils(e.target.value) != "rien trouve ustensils") {

        for (let cur of rechercherUstensils(e.target.value)) {

            main.appendChild(generateCards(cur.name, cur.time, cur.ingredients, cur.description));

        }

    } else if (rechercher(e.target.value, "appliance").length > 0) {

        for (let cur of rechercher(e.target.value)) {

            main.appendChild(generateCards(cur.name, cur.time, cur.ingredients, cur.description));

        }

    } else {
        for (let cur of (rechercher(e.target.value, "name"))) {

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
    ingArrow.style.transform = "rotate(180deg)"
})

appFilter.addEventListener('click', openAppareilsFilter => {
    appFilter.classList.toggle("scaled");
    appStatus.classList.toggle("open");
})

ustFilter.addEventListener('click', openUstensilesFilter => {
    ustFilter.classList.toggle("scaled");
    ustStatus.classList.toggle("open");
})

