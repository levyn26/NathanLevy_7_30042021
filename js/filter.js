const ingFilter = document.getElementById('filters-elt-ing"');
const appFilter = document.getElementById('filters-elt-app');
const ustFilter = document.getElementById('filters-elt-ust');






function generateIngredients(ing) {

    const ingFilterUl = document.getElementById("ing-filter-list");

    // console.log(ingFilterUl);


    ingFilterUl.innerHTML = `
    <li style="display: block;">
        <a class="filter-tag" href="/" title=${ing}>
            ${ing}
        </a>
    </li>`



}


function generateAppliance(app) {

    const appFilterUl = document.getElementById("app-filter-list");

    // console.log(appFilterUl);


    appFilterUl.innerHTML = `
    <li style="display: block;">
        <a class="filter-tag" href="/" title=${app}>
            ${app}
        </a>
    </li>`



}


function generateUstensils(ust) {

    const ustFilterUl = document.getElementById("ust-filter-list");

    // console.log(appFilterUl);


    ustFilterUl.innerHTML = `
    <li style="display: block;">
        <a class="filter-tag" href="/" title=${ust}>
            ${ust}
        </a>
    </li>`



}




export { generateIngredients, generateAppliance, generateUstensils };




