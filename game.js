//all posible card colors
const cardColors = ["red", "red", "green", "green", "blue", "blue", "brown", "brown", "yellow", "yellow", "gray", "gray", "orange", "orange", "violet", "violet", "pink", "pink"];

// import divs 
let cards = document.querySelectorAll('div');
//and change them from node list to array
cards = [...cards];


const init = function () {
    //picking random color from array for single card
    cards.forEach((card) => {
        const position = Math.floor(Math.random() * cardColors.length);
        //and givin them specific class
        card.classList.add(cardColors[position]);
        //and deleting this class form array, so there gonna be only 2 cards in one color
        cardColors.splice(position, 1)
    })
}
//31:28
init();