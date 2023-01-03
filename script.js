//mini-project
function playTheGame(){
   
    const reactionofUser = confirm("Do you want to play ?");
    //confirm("voulez-vous jouer?");
    if (!reactionofUser) {
        alert("no probleme , good bye")
      }
       // let reply = null;
       const computerNumber = generateRandowNumber()
       let answer = prompt("Entrer le nombre ")
       let numberOfTries = 0
       const userNumber = Number(answer)
       while(Number(answer) != computerNumber){
         numberOfTries  = numberOfTries + 1
         if (numberOfTries === 3) {
            alert("sorry, too many tries. the number was " + computerNumber)
            
         }
        if (isOnlyNumbers(answer)){
            alert("Sorry not a number, goodbye")
        }
       }
        
        //reply = Number(answer);
        if(!isBetweenZeroAndTen(userNumber)){
            alert("sory it's a good number , goodbye ");
         //console.log("Your are playing the game");
         let biggerOrsmall = (Number(answer) > computerNumber ) ? "bigger": "smaller"
         alert("your is number" + biggerOrsmall + "than the computer's, guess again")
      }
      console.log("computerNumber:", computerNumber);
      if (userNumber > computerNumber) {
        alert("you number is bigger then the computer's guess again")
      }
      if (userNumber < computerNumber) { 
        alert("number is small than the computer's, guess again ")
        answer = prompt("enter a number")
      }
      const finalmessage = `WINNER ! the number was indeed  ${computerNumber}. you found in ${numberOfTries + 1} tries`
      alert("WINNER ! the number was indeed",  + computerNumber + ".You found in" + Number(numberOfTries) + 1 + "tries");
    }
    function isOnlyNumbers(str){
        const regex = new RegExp(/^[0-9]*$/);
        return regex.test(str)
    
    }

    function isBetweenZeroAndTen(number){ 
        return number >= 0 && number <= 10
    }
    function generateRandowNumber(){
return Math.floor(Math.random() * 11)
    }

    function compareNumbers(userNumber , computerNumber){
        if(userNumber === computerNumber){
            alert("WINNER")
            return
        }
        if (userNumber >= computerNumber ) {
            alert("you number is bigger then the computer")
            
        }
    }
