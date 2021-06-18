const ingFilter = document.getElementById('filters-elt-ing"');
const appFilter = document.getElementById('filters-elt-app');
const ustFilter = document.getElementById('filters-elt-ust');






function generateIngredients(ing) {


    const ingLi = document.createElement("li");
    const ingA = document.createElement("a");

    ingLi.style.display = "block";
    ingA.classList.add("filter-tag");
    ingA.title = ing;

    ingA.textContent = ing;

    ingLi.appendChild(ingA);


    return ingLi
}


function generateAppliance(app) {

    const appLi = document.createElement("li");
    const appA = document.createElement("a");

    appLi.style.display = "block";
    appA.classList.add("filter-tag");
    appA.title = app;

    appA.textContent = app;

    appLi.appendChild(appA);


    return appLi



}


function generateUstensils(ust) {

    const ustLi = document.createElement("li");
    const ustA = document.createElement("a");

    ustLi.style.display = "block";
    ustA.classList.add("filter-tag");
    ustA.title = ust;

    ustA.textContent = ust;

    ustLi.appendChild(ustA);


    return ustLi

}




export { generateIngredients, generateAppliance, generateUstensils };




