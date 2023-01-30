var select;
var comp=0;
var s=0;
var point=0;
//stone s=1
//paper s=2
// scissor s=3
setInterval(function(){
        comp=Math.floor((Math.random()*3))+1;
},100);


$(".input").on("click",function(event){
    select=event.target;
    select=$(select).attr("class");
    console.log(select);
allocate(select);
    document.querySelector(".game").style.display="none";
    computer();
    document.querySelector(".final").style.display="flex";
    
});
function computer(){
    if(comp==1)
$(".player2 button").attr("class",'option stone');
if(comp==2)
$(".player2 button").attr("class",'option paper');
if(comp==3)
$(".player2 button").attr("class",'option scissor');

}

function allocate(select){
    $(".player1 button").attr("class",select);
   if(select=='input option stone'){
   s=1;
}
   if(select=='input option paper'){
   s=2;
}
   if(select=='input option scissor'){
   s=3;
   }

output(s);
}
function output(s){
    if(s===1 && comp===3){
        $(".declare").text("YOU WIN!");
point++;
    }
   else if(s===2 && comp===1){
        $(".declare").text("YOU WIN!");
        point++;
    }
    else if(s===3 && comp===2){
        $(".declare").text("YOU WIN!");
        point++;
    }
   else if(s===comp){
        $(".declare").text("TIE");
    }
    else{
        $(".declare").text("YOU LOSE");
    }
    finalScore(point);
    }

function finalScore(point){
    $(".score").text(point);
}
$(".again").on("click",function(){

    document.querySelector(".game").style.display="flex";
    document.querySelector(".final").style.display="none";
});