
function generateCards(title, time, ingredients, desc) {

    const cards = document.createElement("div");

    cards.classList.add("cards");

    cards.innerHTML = `
    <img src="./assets/img.jpg" alt="images">
    <div class="titleAndTime">
        <p class="cardsTitle">${title}</p>
        <div class="time">
            <div class="timeIcon"><svg width="20" height="20" viewBox="0 0 20 20" fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M10 0C4.5 0 0 4.5 0 10C0 15.5 4.5 20 10 20C15.5 20 20 15.5 20 10C20 4.5 15.5 0 10 0ZM10 18C5.59 18 2 14.41 2 10C2 5.59 5.59 2 10 2C14.41 2 18 5.59 18 10C18 14.41 14.41 18 10 18ZM10.5 5H9V11L14.2 14.2L15 12.9L10.5 10.2V5Z"
                        fill="black" />
                </svg>
            </div>
            <p class="timeTitle">${time} min</p>
        </div>
    </div>`

    const ingredientEl = document.createElement('div');

    ingredientEl.className = 'ingredientsWithDesc';

    const listOfClass = ['ingredient', 'quantity', 'unit'];
    const elType = ['strong', 'span', 'span'];

    for (let oneIngredient of ingredients ){

        let list = 0

        for (let prop in oneIngredient){
            const propIngredient = document.createElement(elType[list]);

            propIngredient.textContent = oneIngredient[prop];
            propIngredient.className = listOfClass[list++];
        

            ingredientEl.appendChild(propIngredient);

        }
        
        ingredientEl.appendChild(document.createElement('br'))

    }

    const descriptionEl = document.createElement('p');
    descriptionEl.textContent = desc;
    descriptionEl.className = 'description';

    ingredientEl.appendChild(descriptionEl);

    cards.appendChild(ingredientEl);

 

    return cards
}

export { generateCards };