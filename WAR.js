const SUITS = ['♠', '♣', '♥', '♦'];
const VALUES = ['2','3','4','5','6','7','8','9','10','J','Q','K','A'];
const valuesList = {
    '2': 2, 
    '3': 3,
    '4': 4,
    '5': 5,
    '6': 6,
    '7': 7,
    '8': 8,
    '9': 9,
    '10': 10,
    'J': 11,
    'Q': 12,
    'K': 13,
    'A': 14
}

class Card {
    constructor(suit, value) {
        this.suit = suit;
        this.value = value;
    }    
}

class Player {
    constructor(name) {
        this.name = name;
        this.playerHand = [];
        this.playerScore = 0;
    }
    addDeck(deck) {
        this.playerHand = deck;
    }
}

class Deck {
    constructor (cards = freshNewDeck()) {
        this.cards = cards;
        }
        shuffle() {
            for(let i = this.cards.length - 1; i > 0; i--) {
            const newCard = Math.floor(Math.random() * i);
            const oldCard = this.cards[newCard];
            this.cards[newCard] = this.cards[i];
            this.cards[i] = oldCard;
       }
   }
}
function freshNewDeck() {
    return SUITS.flatMap(suit => {
        return VALUES.map(value => {
            return new Card(suit,value);
        });
    });
}


function splitDeck() {
    let player1Deck = new Deck();
    let player2Deck = new Deck();
    for(let i=0; i<this.cards.length; i++) {
        player1Deck.playerHand.slice(0, splitDeck);
        player2Deck.playerHand.slice(splitDeck, this.cards.length);
    }
    return splitDeck();
}


function playersResults(player1, player2) {
    for(let i = 0; i < player1.playerHand.length; i++) {
        if(valuesList[player1.playerHand[i].value] > valuesList[player2.playerHand[i].value]) {
            player1.playerScore += 1;
            console.log(`${player1.name} won this turn!`);
        }else if (valuesList[player1.playerHand[i].value] < valuesList[player2.playerHand[i].value]) {
            player2.playerScore += 1;
            console.log(`${player2.name} won this turn!`);
        }else {
            console.log('It is a tie! 0 points');
        }
    }
}

function finalScore(player1, player2) {
    if(player1.playerScore > player2.playerScore) {
        console.log(`${player1.name} won the game of WAR with: ${player1.playerScore} `) 
    } else if(player1.playerScore < player2.playerScore) {
        console.log(`${player2.name} won the game of WAR with: ${player2.playerScore} `)
    }else {
        console.log(`${player1.name} and ${player2.name} finished on a tie!`);
    }
}

let newDeck = new Deck();
console.log(newDeck);





//create game for loop that runs for 26 turns in a loop
//deal the cards to 2 players (splitDeck)
