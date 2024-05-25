const rockEl=document.querySelector('#rock');
const paperEl=document.querySelector('#paper');
const scissorsEl=document.querySelector('#scissors');
const playerEmoji=document.querySelector('.emoji2Box');
const computerEmoji=document.querySelector('.emoji1Box');
const result=document.querySelector('.results');
const counterBox=document.querySelector('.textRight');
let counter1=0;
let counter2=0;

const emojiCardEl=document.querySelectorAll('.emoji');

emojiCardEl.forEach(card=>{
    card.addEventListener("click", (e)=>{
        let value=(e.target.textContent);
        let computerEmojiArray=['✊','✌️','✋'];

        let random=Math.round(Math.random()*2);
        // console.log(random);
        
        // console.log(value);
        if (value=='✊') {
           playerEmoji.textContent='✊'; 
           computerEmoji.textContent=computerEmojiArray[random];
        }else if(value=='✌️'){
            playerEmoji.textContent='✌️'; 
            computerEmoji.textContent=computerEmojiArray[random];
        }else{
            playerEmoji.textContent='✋';
            computerEmoji.textContent=computerEmojiArray[random];
        }

        if (playerEmoji.textContent == computerEmoji.textContent) {
            result.textContent="It's a draw";
       }else if(playerEmoji.textContent =='✋' && computerEmoji.textContent=='✊' || playerEmoji.textContent =='✌️' && computerEmoji.textContent=='✋' || playerEmoji.textContent =='✊' && computerEmoji.textContent=='✌️'){
            result.textContent="Player Wins";
            playerCounter();
       }else{
            result.textContent="Computer Wins";
            computerCounter();
       }
    })
});

function playerCounter(){
    counter1+=1;
    counterBox.textContent=`computer ${counter2} : ${counter1} player`;
}
function computerCounter(){
    counter2+=1;
    counterBox.textContent=`computer  ${counter2} : ${counter1} player`;
}