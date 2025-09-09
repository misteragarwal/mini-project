const winset=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]]

const start=document.querySelector('#start')
const gamearea=document.querySelectorAll('td')
const players1=document.querySelector('#playerone')
const player2=document.querySelector('#playertwo')
const reset=document.querySelector('#reset')
const message=document.getElementById('message')
let chance;

start.addEventListener('click',()=>{startgame()});

function startgame(){
    let num=Math.floor(Math.random()*10);
    start.style.display='none';
    if(num>=5){
        chance=1;
        message.innerHTML='Playerone 1 Marks first....';
    }
    else{
        chance=0;
        message.innerHTML='Playerone 2 Marks first....';
    }
    playgame();
}


function playgame(){
gamearea.forEach((box)=>{
    box.addEventListener('click',function(e){
        const cell=e.target;
        //player 2
        if(chance === 0){
            cell.innerHTML=`O`
            chance=1;
        }
        //player 1
        else{
            cell.innerHTML=`X`
            chance=0;
        }
        winner();
    },{ once: true })
})
}

function winner(){
    let someonewon=false;
    for(const it of winset){
        if(gamearea[it[0]].innerHTML=== 'O' && gamearea[it[1]].innerHTML=== 'O' && gamearea[it[2]].innerHTML=== 'O'){
            player2.innerHTML="Player 2: Won";
            players1.innerHTML="Player 1: Lossed";
            message.innerHTML=`player 2, You won the match!!`
            endGame();
            someonewon=true;
            break
            

        }
        else if(gamearea[it[0]].innerHTML==='X' && gamearea[it[1]].innerHTML==='X' && gamearea[it[2]].innerHTML==='X'){
            player2.innerHTML="Player 2: Lossed";
            players1.innerHTML="Player 1: Won";
            message.innerHTML=`player 1, You won the match!!`
            endGame();
            someonewon=true;
            break
        }
    }
    if(!someonewon){
    const filled = [...gamearea].every(cell => cell.innerHTML !== '');
    if(filled){
      message.innerHTML = "It's a Draw!!";
      endGame();
    }
  }

}

function endGame(){
    gamearea.forEach(cell => {
        cell.style.pointerEvents = "none"; 
    });
    reset.style.display='block';
    reset_game();
}

function reset_game(){
    reset.innerHTML="New Game"
    reset.addEventListener('click',()=>{
        start.style.display='block';
        gamearea.forEach(cell => {
            cell.innerHTML=``;
            cell.style.pointerEvents = "all"; 
        });
        players1.innerHTML=`Player 1: X`;
        player2.innerHTML=`Player 2: O`;
        reset.style.display='none'
        message.innerHTML=``
    })
    
}


