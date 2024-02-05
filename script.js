console.log("welcome to tic tac toe");
let music= new Audio("music.mp3");
let audioturn= new Audio("ting.mp3");
let gameover= new Audio("gameover.mp3");
let turn="X"; 
let isgameover= false;
 
const changeturn = () =>{
    return turn ==="X"?"0":"X"
}

const checkWin= () =>{
    let boxword = document.getElementsByClassName('boxtext')
    let Wins= [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ]
    Wins.forEach(e=>{
       if(( boxword[e[0]].innerText === boxword[e[1]].innerText) && ( boxword[e[2]].innerText === boxword[e[1]].innerText) && ( boxword[e[0]].innerText !== "")){
       document.querySelector('.info1').innerText = boxword[e[0]].innerText + "WON"
       if(isgameover= true){
       
       document.querySelector('.imginfo').getElementsByTagName('img')[0].style.width= "200px";
       }
       } 
    })

}

//music.play()
let boxes= document.getElementsByClassName("box");
Array.from(boxes).forEach(element=> {
    let boxtext = element.querySelector(".boxtext");
    element.addEventListener('click',()=>{
    if(boxtext.innerText === ''){
    boxtext.innerText = turn;
     turn=changeturn();
    audioturn.play();
    checkWin();
    if(!isgameover){
    document.getElementsByClassName("info1")[0].innerText = "Turn For"+   turn;
    }
    }
})
})
reset.addEventListener('click',()=>{
    let word = document.getElementsByClassName('boxtext')
    Array.from(word).forEach(element=> { 
        element.innerText= "";
    })
    let turn="X";
    isgameover= false;
    if(!isgameover){
        document.getElementsByClassName("info1")[0].innerText = "Turn For"+   turn;
        document.querySelector('.imginfo').getElementsByTagName('img')[0].style.width= "0px";
        }

})

