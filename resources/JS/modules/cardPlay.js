//import { Timer } from "./easytimer.min.js";
export default class CardPlay {
	
	constructor(initiateTimer,time){
		this.initiateTimer = initiateTimer;
		this.time = time;


		this.visibleCard;
		this.firstCard;
		this.secondCard;
		this.matchCardnumber = 0;
		this.movescount = 0;
		this.numberOfCards=0;
		this.cardSymbols;
		var timercount = new Timer();
		
	}

	initiateGame(){
		this.cardSymbols = this.fetchCards();
		this.generatePlayGround();

	}


	generatePlayGround() {
		console.log("1. generating play ground");
		let cardItemList = this.shuffleCards(self.cardSymbols);
   		let restart = document.querySelector(".restart");
		restart.onclick = function() {
    			self.playAgain();
		};
    		cardItemList.map(function (cardClassName, index) {
        
        		let cardDeck = document.querySelector(".playGround");
        		let cardItem = document.createElement("li");
        		cardItem.setAttribute('id', index);
        		cardItem.setAttribute('name', cardClassName);
        		cardItem.classList.add("card");
   			cardItem.onclick = function() {
    				self.playGame(this);
			};
        		let symbolsItem = document.createElement("i");
        		symbolsItem.classList.add("fa");
        		symbolsItem.classList.add(cardClassName);
        		cardItem.appendChild(symbolsItem);
        		cardDeck.appendChild(cardItem);
   		});
		
	}

	shuffleCards(cards){
		console.log("2. shuffling");
		var currentIndex = cards.length,
        			   temporaryValue, 
				   randomIndex;

    		while (currentIndex !== 0) {
        		randomIndex = Math.floor(Math.random() * currentIndex);
        		currentIndex -= 1;
        		temporaryValue = cards[currentIndex];
        		cards[currentIndex] = cards[randomIndex];
        		cards[randomIndex] = temporaryValue;
    		}

    	return cards;
	}

	playGame(tempCard){
		console.log("3. Game Play");
		this.timer();
    	tempCard.classList.add('open','show');
    	if (self.firstCard && self.secondCard) {
        	self.firstCard.classList.remove('open','show');
        	self.secondCard.classList.remove('open','show');
        	self.firstCard = null;
        	self.secondCard = null;
    	}
    	if (!self.visibleCard) {
        	self.visibleCard = tempCard;
        	self.movescount++;        
        	this.chooseCard();
    	} else {
        	let item = {
            		id: tempCard.getAttribute('id'),
            		name: tempCard.getAttribute('name')
        	};

        	if (this.checkForMatch(item)) {
           		tempCard.classList.add('match');
            		tempCard.removeAttribute('onclick');
            		self.visibleCard.classList.add('match');
            		self.visibleCard.removeAttribute('onclick');
            		self.matchCardnumber += 1;
            		this.gameOver();
       		}
        	self.firstCard = tempCard;
        	self.secondCard = self.visibleCard;
        	self.visibleCard = null;
        	this.resetPlayground();
    	}
	}

    	gameOver(){
		console.log("game over");
		 if (self.matchCardnumber == this.numberOfCards) {
			this.saveMatchScore();
        		let modal = document.querySelector('.popup');
        		let close = document.querySelector('.close');
        		document.querySelector("#moves").textContent = self.movescount;
        		document.querySelector('#timer').textContent = timercount.getTimeValues().toString();
        		modal.style.display = "block";
        		close.onclick = function () {
            			modal.style.display = "none";
            			location.reload();
        		}	
    		}

	}

	resetPlayground(){
		console.log("clear the ground");
		setTimeout(() => {
        		if (self.firstCard) {
            			self.firstCard.classList.remove('open','show');
            			self.firstCard = null;
        		}
       			if (self.secondCard) {
            			self.secondCard.classList.remove('open','show');
            			self.secondCard = null;
        		}
    		}, 1000);
	}
	checkForMatch(item){
		console.log("matched");
		let card = {
        		id: self.visibleCard.getAttribute('id'),
        		name: self.visibleCard.getAttribute('name'),
        		cardIsOpen: self.visibleCard.classList.contains('open')
    		};
    	return (item.name === card.name && item.id !== card.id && card.cardIsOpen);
	};

	chooseCard(){
		console.log("4. move counter");
		let movesContainer = document.querySelector('.moves');
    		movesContainer.textContent = self.movescount;		
	}
	playAgain(){
		console.log("once more");
		location.reload();
		
	}
       timer() {
		console.log("timer");
    		timercount.start();
    		timercount.addEventListener('secondsUpdated', function (e) {
        		let basicUsagetimer = document.querySelector('#basicUsage');
        		basicUsagetimer.textContent = timercount.getTimeValues().toString();
    		});
	};
	fetchCards(){	
		console.log("0.Service call to fetch the list of cards");
		//temporary data >> STARTS
		let fetchCardsList = ["fa-snapchat", "fa-glide", "fa-braille","fa-viadeo","fa-blind","fa-gitlab", "fa-bluetooth", "fa-shopping-bag"];
		//temporary data >> ENDS
		this.numberOfCards=(fetchCardsList.length);
		let toBeSuffleCards = this.duplicateCards(fetchCardsList,(this.numberOfCards)*2);
		return toBeSuffleCards;
	};
	duplicateCards(pattern, count){
		let result = [];
   		if (["number", "string"].includes(typeof pattern)) {
        		result = new Array(count);
        		result.fill(pattern);
    		}else if (pattern instanceof Array) {
			pattern.map(function(e,i){
				result = result.concat(pattern);
			})
        		result = result.slice(0, count);
    		}
    		return result;
	};
	saveMatchScore(){
		console.log("API call to save the match score");
	};
}
