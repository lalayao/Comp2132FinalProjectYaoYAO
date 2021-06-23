var LetsNewGame = document.getElementById("btn-newgame");
var LetsRollDice = document.getElementById("btn-rolldice");

const output3 = document.getElementById("box3");
const output4 = document.getElementById("box4");
const output5 = document.getElementById("box5");
const output6 = document.getElementById("box6");
const output7 = document.getElementById("box7");
const output8 = document.getElementById("box8");
const output9 = document.getElementById("box9");
const output10 = document.getElementById("box10");
const output11 = document.getElementById("box11");
const output12 = document.getElementById("box12");
const output13 = document.getElementById("box13");
const output14 = document.getElementById("box14");
const YourDice1Img = document.getElementById("YourDice1Img");
const YourDice2Img = document.getElementById("YourDice2Img");
const OpponentDice1Img = document.getElementById("OpponentDice1Img");
const OpponentDice2Img = document.getElementById("OpponentDice2Img");

const popUp = document.getElementById("pop-up");
const btnPopClose = document.getElementById("btn-pop-close");
const statement = document.getElementById("Statement");


var YourRoundScore;

var OpponentRoundScore;

var YourTotalScore = 0;

var OpponentTotalScore = 0;

var OpponentScore;

var GameRound = 3;



//var random = Math.floor(Math.random()*6)+1;

LetsNewGame.addEventListener("click", function () {
    location.reload()
})


btnPopClose.addEventListener("click", function () {
    popUp.style.opacity = 0;
});


LetsRollDice.addEventListener("click", function () {
    GameRound = GameRound - 1;
    
    YourDice1 = Math.floor(Math.random() * 6) + 1;
    YourDice2 = Math.floor(Math.random() * 6) + 1;
    OpponentDice1 = Math.floor(Math.random() * 6) + 1;
    OpponentDice2 = Math.floor(Math.random() * 6) + 1;
    YourDice1Img.src = `images/DICE-${YourDice1}.jpg`;
    YourDice2Img.src = `images/DICE-${YourDice2}.jpg`;
    OpponentDice1Img.src = `images/DICE-${OpponentDice1}.jpg`;
    OpponentDice2Img.src = `images/DICE-${OpponentDice2}.jpg`;

    


    if (YourDice1 === 1 && YourDice2 === 1) {
        YourRoundScore = 4
        output7.innerHTML = `${YourRoundScore}`
    } else if (YourDice1 === YourDice2) {
        YourRoundScore = (YourDice1 + YourDice2) * 2;
        output7.innerHTML = `${YourRoundScore}`
    } else if (YourDice1 == 1 || YourDice2 == 1) {
        YourRoundScore = 0;
        output7.innerHTML = `${YourRoundScore}`;
    } else {
        YourRoundScore = YourDice1 + YourDice2;
        output7.innerHTML = `${YourRoundScore}`;
    }

    
    if (OpponentDice1 === 1 && OpponentDice2 === 1) {
        OpponentRoundScore = 4
        output13.innerHTML = `${OpponentRoundScore}`
    } else if (OpponentDice1 === OpponentDice2) {
        OpponentRoundScore = (OpponentDice1 + OpponentDice2) * 2;
        output13.innerHTML = `${OpponentRoundScore}`
    } else if (OpponentDice1 == 1 || OpponentDice2 == 1) {
        OpponentRoundScore = 0;
        output13.innerHTML = `${OpponentRoundScore}`;
    } else {
        OpponentRoundScore = OpponentDice1 + OpponentDice2;
        output13.innerHTML = `${OpponentRoundScore}`;
    }

    YourTotalScore += YourRoundScore;

    OpponentTotalScore += OpponentRoundScore;

    output8.innerHTML = YourTotalScore;
    
    output14.innerHTML = OpponentTotalScore;



    if (GameRound == 0) {
        LetsRollDice.disabled = true;
     

        if (YourTotalScore > OpponentTotalScore) {
            statement.innerHTML = `Your Final Score:${YourTotalScore} <br>Opponent's Final Score:${OpponentTotalScore}.<br>Congratulation!!!You Win!!!`

        } else if (OpponentTotalScore > YourTotalScore) {
            popUp.style.backgroundColor = "#884fe4";
            statement.innerHTML = `Your Final Score:${YourTotalScore} <br>Opponent's Final Score:${OpponentTotalScore}.<br>Sorry,You Lost..`

        } else {
            popUp.style.backgroundColor = "#16a085";
            statement.innerHTML = `Your Final Score:${YourTotalScore} <br>Opponent's Final Score:${OpponentTotalScore}.<br>Well Done! Draw Game!!!`
        }
        
    }

    const delay = 1000;
    
    let popupAnimation;

    let opacityValue = 0.9;

    setTimeout( function(){
        
        if(GameRound === 0){
           
            popupAnimation = requestAnimationFrame( fadeIn );
        }
    }, delay);
    
    function fadeIn(){
        opacityValue = opacityValue + .1;
        if(opacityValue <= 1){
            popUp.style.opacity = opacityValue;
            requestAnimationFrame( fadeIn );
        }else{
            popUp.style.opacity = 1;
        }    
    }


});



const $tabs = $('.tab');
const $content = $('.content');

$content.hide();

$tabs.click(function(){

    if( $(this).next().is(':visible') ){
        $(this).next().slideUp();  
    }else{
        $content.slideUp();
        $(this).next().slideDown();
    }                   
});



