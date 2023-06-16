function showImage(id){
    elImage.setAttribute("src",'./image/'+id+'.png');
}
function showInfo(id){
    elInfos = document.querySelector('.info');
    elInfos.textContent = 'Player '+id+' WIN !!! ';
    elInfos.style.display ='block';

}
function showRondCurrent(id){
    document.querySelector('#current'+id).textContent = rondTotal;
}
function roll(id){
    let nbrand = Math.floor(Math.random() * 6) +1;
    showImage(nbrand);
    if(nbrand == 1){
        rondTotal = 0;
        showRondCurrent(id);
        nextPlayer()
    }else{

        addRond(id , nbrand);
    }
}
function addRond(id, nb){
    rondTotal += nb;
    showRondCurrent(id);
}
function addScore(id){

    SCORE[id-1]+= rondTotal;
    if(SCORE[id-1] >= 100){
        endGame = true;
        showInfo(id);
    }
}
function showScore(id){
    document.querySelector('#score'+id).textContent = SCORE[id-1];
}
function hold(id){

    addScore(id);
    rondTotal = 0;
    showRondCurrent(id, rondTotal);
    showScore(id);
    !endGame&&nextPlayer();
}
function nextPlayer(){
    currentPlayer = currentPlayer == 1 ? 2 : 1;
    lst.forEach((element)=>{
        element.classList.toggle('active');
    })
}
function initGame(){
    document.querySelector('.info').style.display = 'none';
    rondTotal = 0;
    SCORE =[0 ,0];
    endGame = false;
    showScore(1);
    showScore(2);
    showRondCurrent(1);
    showRondCurrent(2);
    showImage(1);
}

const elImage = document.querySelector('#image');
const elRollDice = document.querySelector('#rollDice');
const elHold = document.querySelector('#hold');
const elNewGame = document.querySelector('#newGame');
const lst = [...document.querySelectorAll('.boxPlayer H3')];
let SCORE = [0 ,0];
let rondTotal = 0;
let currentPlayer = 1;
let endGame = false;

elRollDice.addEventListener('click',function(e){

    !endGame&&roll(currentPlayer);
},false);

elHold.addEventListener('click',function(e){

    !endGame&&hold(currentPlayer);
},false);

elNewGame.addEventListener('click',function(e){
    initGame();

})
