const url = 'https://deckofcardsapi.com/api/deck/new/draw/?count=1';
const draw5 = 'https://deckofcardsapi.com/api/deck/new/draw/?count=5';
const hand = document.getElementById("handOfFive");

document.getElementById("btnCard").addEventListener("click", dealCard);
document.getElementById("btnFive").addEventListener("click", dealFive);

function dealCard() {
    fetch(url)
        .then(function (response) {
    return response.json();
})

.then(data => {
    hand.innerHTML = ''
    for(let card in data.cards) {
        console.log(data.cards[card]);
        let drawnCard = `<img src="${data.cards[card].image}"/>`;
        console.log(drawnCard);
        hand.innerHTML = drawnCard;
    }
})

.catch(error => console.log('error', error));
}

function dealFive() {
    fetch(draw5)
    .then(function (response) {
        return response.json();
    })

    .then(data => {
        hand.innerHTML = ''
        for (let five in data.cards) {
            console.log(data.cards[five].value, data.cards[five].suit)
            let cardImage = document.createElement("img")
            cardImage.src= data.cards[five].image
            hand.append(cardImage);
        }
    })
}