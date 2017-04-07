


window.onload = function () { //LOAD FUNCTIONS WITH ONLOAD 



  
  var categories;         // Array of topics
  var chosenCategory;     // Selected category
  var getHint ;          // Word getHint
  var word ;              // The selected word from 
  var guess ;             // Guess
  var geusses = [ ];      // Stored guesses EMPTY ARRAY 
  var lives ;             // Lives variable 
  var counter ;           // Count for incorrect guesses 
  var space;              // Number of spaces in word '-'


  var alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h',
        'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's',
        't', 'u', 'v', 'w', 'x', 'y', 'z'];



  // create alphabet ul
  var buttons = function () {
    myButtons = document.getElementById('buttons');
    letters = document.createElement('ul');

    for (var i = 0; i < alphabet.length; i++) {
      letters.id = 'alphabet';
      list = document.createElement('li');
      list.id = 'letter';
      list.innerHTML = alphabet[i];
      check();
      myButtons.appendChild(letters);
      letters.appendChild(list);
    }
  }       

  // GET ELEMENTS BY ID 
  var showLives = document.getElementById("mylives");
  var showCategory = document.getElementById("category");
  var getHint = document.getElementById("hint");
  var showClue = document.getElementById("clue");
  var answer = document.getElementById("solution"); 
  var guessedLetter = document.getElementById("guess"); 




 
    
  
  // Select Category function. Sets category to their index value 
  var selectCat = function () {
    if (chosenCategory === categories[0]) {
      categoryName.innerHTML = "Category: Characters";
    } else if (chosenCategory === categories[1]) {
      categoryName.innerHTML = "Category: Rick's favorite types of booze!";
    } else if (chosenCategory === categories[2]) {
      categoryName.innerHTML = "Category: Antagonists";
    }
  }

  // Guess ul function
   result = function () {
    wordHolder = document.getElementById('hold');
    correct = document.createElement('ul');

    for (var i = 0; i < word.length; i++) {
      correct.setAttribute('id', 'my-word');
      guess = document.createElement('li');
      guess.setAttribute('class', 'guess');
      if (word[i] === "-") {
        guess.innerHTML = "-";
        space = 1;
      } else {
        guess.innerHTML = "_";
      }

      geusses.push(guess);
      wordHolder.appendChild(correct); // append letters 
      correct.appendChild(guess); 
    }
  }
  
  // LIVES 
   comments = function () {
    showLives.innerHTML = "Remaining Guesses: " + lives; //Displays Lives 
    if (lives < 1) { //If statement for lives 
      showLives.innerHTML = "Game Over"; //Display Game Over 
      playSoundLoss(); //Play loss audio
      answer.innerHTML = "The answer was:  " +  word; //THIS IS WHERE THE ANSWER IS SHOWN
       

       //NEEDS SOME SORT OF "RETURN" TO CANCEL GAME PLAY AND LOCK BUTTONS 


    }
    for (var i = 0; i < geusses.length; i++) {
      if (counter + space === geusses.length) {
        showLives.innerHTML = "You Win!";
        playSoundWin(); 
      }
    }
  }

  function gameOver(){
    if( lives < 1){

    }
  }

// Play Loss Audio

 function playSoundLoss() {
          var sound = document.getElementById("audioLoss");
          sound.play()
      }

// Play Win Audio

  function playSoundWin() {
          var sound = document.getElementById("audioWin");
          sound.play()
     }


  // OnClick Function
   check = function () {
    list.onclick = function () {
      var geuss = (this.innerHTML);
      this.setAttribute("class", "active");
      this.onclick = null;
      for (var i = 0; i < word.length; i++) {
        if (word[i] === geuss) {
          geusses[i].innerHTML = geuss;

          // counter += 1;
        } 
      }

      var j = (word.indexOf(geuss));
      if (j === -1) {
        lives -= 1;
        comments();
      } else {
        comments();
      }
    }
  }
  
    
  // PLAY FUNCTION WITH THREE CATEGORIES 
  play = function () {
    categories = [
        ["rick", "morty", "summer", "beth", "jerry", "squanchy", "birdperson", "gazorpazorpfield","meseeks"], //Characters
        ["beer", "tequila", "vodka", "whiskey", "rum","bourbon"], //booze types
        ["evil-rick", "cornvelios-daniel", "tiny-rick", "gromfolites", "seal-team-ricks"] // Antagonists

        
    ];

    chosenCategory = categories[Math.floor(Math.random() * categories.length)];
    word = chosenCategory[Math.floor(Math.random() * chosenCategory.length)];
    word = word.replace(/\s/g, "-");
    console.log(word); //spits out the answer in the console

    buttons(); // 

    geusses = [ ];
    lives = 10; //start with 10 lives 
    counter = 0; //
    space = 0;
    result();
    comments();
    selectCat();
    
  }

  play();
  
  // Hint

    hint.onclick = function() {

      hints = [
        ["Burrrrrp", "Uhhhhh.....guys???!", "Like, totallyyyy.", "Horses", "Apples", "Cat like", "Winged beast","Lasagna cat","Gennie in a bottle"], //Character Hints
        ["Burrrrrp", "agave", "clear", "JD", "mollases","mollases...again"], //Booze hints 
        ["Sanchez gone bad", "Thoughtception", "Mini-me", "Galactic Federation", "Rick Team"] //Antagonist hints 
    ];

    var categoryIndex = categories.indexOf(chosenCategory);
    var hintIndex = chosenCategory.indexOf(word);
    showClue.innerHTML = "Clue: - " +  hints [categoryIndex][hintIndex];


     
  };

   // RESET GAME FUNCTION WITH THE PLAY AGAIN BUTTON

  document.getElementById('reset').onclick = function() {
    correct.parentNode.removeChild(correct); //resets correct
    letters.parentNode.removeChild(letters); //resets letters selected
    showClue.innerHTML = ""; //resets clue
    answer.innerHTML = "";  //resets answer
    play();
  }


  // LOCK GAME PLAY FUNCTION

  function gameOver(){
    if(lives < 1){
      return  
    }
  }

}


