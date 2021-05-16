const filterEl = document.querySelector('.filter')

const ingredients = document.createElement("div");
const appareil = document.createElement("div");
const ustensiles = document.createElement("div");

function ingredientsFilter() {
    //ingrédients

    filterEl.appendChild(ingredients);
    ingredients.classList.add("ingredients");

    ingredients.innerHTML = `
    <p class="filterText">Ingrédients</p>
    <div class="filterIcon">
        <svg width="16" height="11" viewBox="0 0 16 11" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M14.12 0.453369L8 6.56004L1.88 0.453369L0 2.33337L8 10.3334L16 2.33337L14.12 0.453369Z" fill="white"/>
        </svg>                        
    </div>`
}

function appareilFilter() {
    //ingrédients

    filterEl.appendChild(appareil);
    appareil.classList.add("appareil");

    appareil.innerHTML = `
    <p class="filterText">Appareil</p>
    <div class="filterIcon">
        <svg width="16" height="11" viewBox="0 0 16 11" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M14.12 0.453369L8 6.56004L1.88 0.453369L0 2.33337L8 10.3334L16 2.33337L14.12 0.453369Z" fill="white"/>
        </svg>                        
    </div>`
}

function ustensilesFilter() {
    //ingrédients

    filterEl.appendChild(ustensiles);
    ustensiles.classList.add("ustensiles");

    ustensiles.innerHTML = `
    <p class="filterText">Ustensiles</p>
    <div class="filterIcon">
        <svg width="16" height="11" viewBox="0 0 16 11" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M14.12 0.453369L8 6.56004L1.88 0.453369L0 2.33337L8 10.3334L16 2.33337L14.12 0.453369Z" fill="white"/>
        </svg>
    </div>`
}

export { ingredientsFilter, appareilFilter, ustensilesFilter };