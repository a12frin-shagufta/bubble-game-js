/// logic
// game ye h ki har baar hit mai jo num aaye usi se match krta hua num hame click krna h or usme hame 10 score milega 
var timer = 60;
var score = 0;
var hitrn = 0;
function makeBubble(){
    var clutter = "";

    for(i=1; i<=112; i++){
        var rn  = Math.floor(Math.random()*10);
       clutter += `<div class="bubble">${rn}</div>`
       
       // loop lagane ki wjh se ye 70 baar chalega but har baar 1 hatega tbhi dusra aayega at the end hamare pass ek hi div bacha mai chahti hu jo div hat rha h wo save ho jaye tb hamare pas pure 70 div honge uske liy hame = ke pehle + lagan h jisse wo save hoga 
    }
    
    document.querySelector("#pbtm").innerHTML = clutter;
    
    
    // ab mai chahti hu timer chale 
}

function runtimer(){
    
    var timerint = setInterval(function(){
    if(timer>0){
        
        timer --;
        // timer to chal rha h but 0 ke baad wo ruka nhi or value - mai jane lagi 0 pe rokne ke liy if statement lgya ab ye 0 pe ruka hame asa dikh rha h but asal mai wo chal rha h bs print hota hua nhi dikh rha h ase mai memory loss karega use thik krne ke liy ham else part chalyennge
        document.querySelector("#timerval").textContent = timer;
        
    }else{
        clearInterval(timerint);
        document.querySelector("#pbtm").innerHTML = `<h1>Game Over</h1>`;
    }

},1000)
   
    
}

function increaseScore(){
    // mai chahti hu ek hit pe score 10 bde 
    score += 10;
    document.querySelector("#Scoreval").textContent = score;

}
function getNewHit(){
    hitrn =  Math.floor(Math.random()*10);
    document.querySelector("#hitval").textContent = hitrn;
}

document.querySelector("#pbtm").addEventListener("click",function(dets){
 var clickednum = Number(dets.target.textContent);
 if(clickednum === hitrn){
 increaseScore();
 makeBubble();
 getNewHit();
 }
});
// itne sare bubble h to ham sab mai to event listener nhi lga sakte to ham uske parent yani pbtm mai event listenr lga denge

   /// dets.target se mujhe pura div mil rha h mujhe bs num chhaiye to mai textContent karungi jisse mujhe bs text mile ab hame num sirf mil rha but asal mai wo string h use number banae ke liy ye likhna hoga number()  
   // ab click to ho rha h but ab hame num match karan h hit se
getNewHit();
makeBubble();
runtimer();