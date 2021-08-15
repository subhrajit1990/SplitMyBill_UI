import CommonFunctions from './commonFunctions.js'
export default class CardPlay extends CommonFunctions {
	
	constructor(initiateTimer,time){
		super();
		this.initiateTimer = initiateTimer;
		this.time = time;
		this.visibleCard;
		this.firstCard;
		this.secondCard;
		this.matchCardnumber = 0;
		this.movescount = 0;
		this.numberOfCards=0;
		this.cardSymbols;	
		this.timercount = new Timer();
	}
	
	initiateGame(){
		this.cardSymbols = this.fetchCards();
		this.generatePlayGround();

	}

	generatePlayGround() {
		console.log("1. generating play ground");
		let cardItemList = this.shuffleCards(this.cardSymbols),
   		restart = document.querySelector(".restart"),
		self = this;
		restart.onclick = function() {
    		self.playAgain();
		};
    	cardItemList.map(function (cardClassName, index) {        
        	let cardDeck = document.querySelector(".playGround"),
        	cardItem = document.createElement("li");
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
    	if (this.firstCard && this.secondCard) {
        	this.firstCard.classList.remove('open','show');
        	this.secondCard.classList.remove('open','show');
        	this.firstCard = null;
        	this.secondCard = null;
    	}
    	if (!this.visibleCard) {
        	this.visibleCard = tempCard;
        	this.movescount++;        
        	this.chooseCard();
    	} else {
        	let item = {
            	id: tempCard.getAttribute('id'),
            	name: tempCard.getAttribute('name')
        	};

        	if (this.checkForMatch(item)) {
           		tempCard.classList.add('match');
            	tempCard.removeAttribute('onclick');
            	this.visibleCard.classList.add('match');
            	this.visibleCard.removeAttribute('onclick');
            	this.matchCardnumber += 1;
            	this.gameOver();
       		}
        	this.firstCard = tempCard;
        	this.secondCard = this.visibleCard;
        	this.visibleCard = null;
        	this.resetPlayground();
    	}
	}

    gameOver(){
		console.log("game over");
        if (this.matchCardnumber == this.numberOfCards) {
            this.saveMatchScore();
        	let modal = document.querySelector('.popup');
        	let close = document.querySelector('.close');
        	document.querySelector("#moves").textContent = self.movescount;
        	document.querySelector('#timer').textContent = (this.timercount).getTimeValues().toString();
        	modal.style.display = "block";
        	close.onclick = function () {
            	modal.style.display = "none";
            	location.reload();
        	}	
    	}

	}

	resetPlayground(){
		let self = this;
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
        	id: this.visibleCard.getAttribute('id'),
        	name: this.visibleCard.getAttribute('name'),
        	cardIsOpen: this.visibleCard.classList.contains('open')
    	};
    	return (item.name === card.name && item.id !== card.id && card.cardIsOpen);
	};

	chooseCard(){
		console.log("4. move counter");
		let movesContainer = document.querySelector('.moves');
    		movesContainer.textContent = this.movescount;		
	}

	playAgain(){
		console.log("once more");
		location.reload();
		
	}

    timer() {
        let self = this;
		console.log("timer");
    	(this.timercount).start();
    	(this.timercount).addEventListener('secondsUpdated', function (e) {
        	let basicUsagetimer = document.querySelector('#basicUsage');
        	basicUsagetimer.textContent = (self.timercount).getTimeValues().toString();
    	});
	};

	 fetchCards(){	
		console.log("0.Service call to fetch the list of cards");
        /* 
        fetch the card icons from external service and hard code few icons
        "fa-snapchat", "fa-glide", "fa-braille","fa-viadeo","fa-blind","fa-gitlab", "fa-bluetooth", "fa-shopping-bag"
         */
		
		// {"fetchCardsRequestWrapper":{}}
       
       const extraParameters = {            
            method: 'POST',
	    body: JSON.stringify({"fetchCardsRequestWrapper":{}})
        };

        /*let fethData = await this.serverCall("expenses/api/getCards",extraParameters,"").then(response => {
            console.log(response); 
            return response;
         }); */
		
	let fethData = 	{
  "ResponseHeader": {
    "ResponseCode": "0",
    "httpStatus": "OK"
  },
  "gameCardListResponse": {
    "gameCardResponse": [
      {
        "cardIcon": "fa-bath"
      },
      {
        "cardIcon": "fa-bell"
      },
      {
        "cardIcon": "fa-binoculars"
      },
      {
        "cardIcon": "fa-birthday-cake"
      },
      {
        "cardIcon": "fa-blind"
      },
      {
        "cardIcon": "fa-beer"
      },
      {
        "cardIcon": "fa-rocket"
      },
      {
        "cardIcon": "fa-ship"
      },
      {
        "cardIcon": "fa-truck"
      },
      {
        "cardIcon": "fa-gamepad"
      }
    ]
  }
} ;

      
        let fetchCardsList = [];
        if(fethData.ResponseHeader.ResponseCode === "0"){

            (fetchCardsRes.gameCardListResponse.gameCardResponse).map((ele,index) => {
                fetchCardsList.push(ele.cardIcon);

            });

        }
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
