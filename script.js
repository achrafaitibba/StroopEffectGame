const colors=["red","blue","yellow","white"];
var colorIndex=Math.floor(Math.random() * 4)
var cc=document.getElementById("color").innerHTML=colors[colorIndex]
var colorIndex1=Math.floor(Math.random() * 4)
document.getElementById("color").style.color=colors[colorIndex1]

var Score=0;

var isNotClicked=0;
var myTimeout= setTimeout(counterEnds,1000);
var t=4;
function counterEnds(){
    
    
     if(t>0  && isNotClicked!=1){
        t=t-1
    document.getElementById("counter").innerHTML=t;
    setTimeout(counterEnds,1000);
    }
     else if(isNotClicked==1){
        document.getElementById("btn1").style.visibility = "hidden";

     }
    else{
        document.getElementById("btn1").style.visibility = "visible";
        
        
    }
}


    function rejouerPlusRapide(){
        document.getElementById("btn1").style.visibility = "hidden";
        document.getElementById("score").innerHTML=0;
        Score=0
        changeColor();
        t=4
        counterEnds()
        
        
    }
    
    function rejouer(){
        document.getElementById("btn").style.visibility = "hidden";
        document.getElementById("score").innerHTML=0;
        Score=0
        changeColor();
        isNotClicked=0;
        t=4
        counterEnds()
        
             
    }
    function changeColor(){
        colorIndex=Math.floor(Math.random() * 4)
        cc=document.getElementById("color").innerHTML=colors[colorIndex]
        colorIndex1=Math.floor(Math.random() * 4)
        document.getElementById("color").style.color=colors[colorIndex1]
    }

function clickedRed(){
    if(cc=="red"){
       
       changeColor(); 
       Score++;
       document.getElementById("score").innerHTML=Score;
       t=4
       
       

    }else{
        Score=0
        document.getElementById("btn").style.visibility = "visible";
        changeColor();
        isNotClicked=1

        
        
    }
}

function clickedBlue(){
    if(cc=="blue"){
        
     changeColor(); 
     Score++;
     document.getElementById("score").innerHTML=Score;
     t=4

    }else{
        Score=0
        document.getElementById("btn").style.visibility = "visible";
        changeColor();
        isNotClicked=1
        
    }
}
function clickedYellow(){
    if(cc=="yellow"){
        
      changeColor();  
      Score++;
      document.getElementById("score").innerHTML=Score;
      t=4

    }else{
        Score=0
        document.getElementById("btn").style.visibility = "visible";
        changeColor();
        isNotClicked=1

        
    }
}
function clickedWhite(){
    if(cc=="white"){
        
      changeColor(); 
      Score++;
      document.getElementById("score").innerHTML=Score;
      t=4
 
    }else{
        Score=0
        document.getElementById("btn").style.visibility = "visible";
        changeColor();
        isNotClicked=1

        
    }
}

const open = document.getElementById('open')
const close = document.getElementById('close')
const container = document.querySelector('.bodyPrincipal')

open.addEventListener('click', () => container.classList.add('show-nav'))

close.addEventListener('click', () => container.classList.remove('show-nav'))