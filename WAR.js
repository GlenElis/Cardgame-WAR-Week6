// Coding Steps:
// For the final project you will be creating an automated version of the classic card game WAR. 
//You do not need to accept any user input, when you run your code, the entire game should play out instantly 
//without any user input. 
// Think about how you would build this project and write your plan down. 
//Consider classes such as Card, Deck, and Player and what fields and methods they might each have. 
//You can implement the game however you’d like (i.e. printing to the console, using alert, or some other way). 
//The completed project should, when ran, do the following:
// Deal 26 Cards to two Players from a Deck. 
// Iterate through the turns where each Player plays a Card
// The Player who played the higher card is awarded a point
// Ties result in zero points for either Player
// After all cards have been played, display the score.



class Card {
    constructor(card, value, suit) {
        this.card = card;
        this.value = value;
        this.suit = suit;
    }   
    showCard() {
        console.log(`${this.value} ${this.suit} `);
    }
}



class Player {
    hand = [];
    name
    score = 0
    constructor(name) {
        this.name = name;
    }
    setHand(hand) {
        this.hand = hand;
    }
    playTopCard() {
    return this.hand.shift();
    }
}

class Deck {
        deck = [];
        suits = ['♠', '♣', '♥', '♦'];
        cards = {
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
            'A': 14,
        }
        constructor() {
            this.fullDeck();
        }
        fullDeck() {
             this.suits.forEach(suit => {
                for(let c in this.cards){
                    this.deck.push(new Card(c, this.cards[c], suit));
            };
        })
        this.deck = shuffle(this.deck)
    }
        shuffle(array) {
        let currentIndex = array.length, randomIndex;
        while(currentIndex != 0) {
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex--;

            [array[currentIndex], array[randomIndex]] = [
                array[randomIndex], array[currentIndex]];
        }
        return array;
    }


    splitDeck() {
        let newArr = shuffle(this.deck)
        let halfDeck = Math.ceil(this.deck.length / 2);
        let otherDeck = this.deck.splice(0, halfDeck);
        return [otherDeck, this.deck]
    }
}
    
 

    ///////////
    // GAME //
    ///////////
//make deck of cards
let mainDeck = new Deck();

//2 players
let p1 = new Player('Sam');
let p2 = new Player('Tom')

//deal 26 cards to each player
let(left, right) = mainDeck.splitDeck()
p1.setHand(left)
p2.setHand(right)
console.log()

//loop for turns
while(p1.hand.length > 0) {
    //players take turns
    let p1Card = p1.playTopCard()
    let p2Card = p2.playTopCard()
    if(p1Card.value > p2Card.value) {
        p1.score++
    }else if(p1Card.value < p2Card.value) {
        p2.score++
    }
    console.log()
}


function finalScore(p1, p2) {
    if(p1.score > p2.score) {
        console.log(`${p1.name} wins WAR! Score: ${p1.score}-${p2.score} `) 
    } else if(p1.score < p2.score) {
        console.log(`${p2.name} wins WAR! Score: ${p2.score}-${p1.score} `)
    }else {
        console.log("It's a tie!");
    }
}









