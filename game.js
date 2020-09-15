//all posible card colors
const cardColors = ["red", "red", "green", "green", "blue", "blue", "brown", "brown", "yellow", "yellow", "gray", "gray", "orange", "orange", "violet", "violet", "pink", "pink"];

// import divs 
let cards = document.querySelectorAll('div');
//and change them from node list to array
cards = [...cards];

//"now"
const startTime = new Date().getTime();
//last clicked card
let activeCard = '';
//variable for pair of cards
const activeCards = [];
//counting how many pairs are in summary
const gamePairs = cards.length / 2;
//counting how many pairs are left
let gameResult = 0;


//function on click
const clickCard = function () {
    activeCard = this;
    //checking if you didn't double clicked one div
    if (activeCard == activeCards[0]) return;
    activeCard.classList.remove('hidden');
    //checking if it's first click
    if (activeCards.length === 0) {
        activeCards[0] = activeCard;
        return;
    } else {
        //blocking clicks after second one
        cards.forEach(card => {
            card.removeEventListener('click', clickCard);
        })
        activeCards[1] = activeCard;

        setTimeout(function () {
            //checking if it's a pair
            if (activeCards[0].className === activeCards[1].className) {
                console.log('win')
                activeCards.forEach(card => card.classList.add('off'))
                //counting next pairs
                gameResult++;
                //blocking clicking same pair
                cards = cards.filter(card => !card.classList.contains('off'))

                //last pair and game end
                if (gameResult == gamePairs) {
                    const endTime = new Date().getTime();
                    const gameTime = (endTime - startTime) / 1000;
                    alert(`You did it! Your time: ${gameTime}s`)
                    location.reload();
                }
            } else {
                console.log('lose')
                activeCards.forEach(card => card.classList.add('hidden'))
            }
            //reset after win or lose (so you can continue game)
            activeCard = '';
            activeCards.length = 0;
            cards.forEach(card => card.addEventListener('click', clickCard))
        }, 500)

    }
};

//main function
const init = function () {
    //picking random color from array for single card
    cards.forEach(card => {
        const position = Math.floor(Math.random() * cardColors.length);
        //and givin them specific class
        card.classList.add(cardColors[position]);
        //and deleting this class form array, so there gonna be only 2 cards in one color
        cardColors.splice(position, 1)
    })

    setTimeout(function () {
        cards.forEach(card => {
            //hiding cards after 2s from game start
            card.classList.add('hidden');
            card.addEventListener('click', clickCard)
        })
    }, 2000)
}

init();