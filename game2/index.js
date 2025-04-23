let Button = document.querySelectorAll('.t1');
let reset = document.querySelector('#btn');
let winner = document.querySelector('.winner-reset');
let btn2 = document.querySelector('#newbtn');
let msg = document.querySelector('#msg')
let turn0 =  true;
const winPattern = [[0,1,2],[0,3,6],[3,4,5],[6,7,8],[0,4,8],[2,4,6],[1,4,7],[2,5,8]]
Button.forEach((t1) => {
    t1.addEventListener("click",()=>{
        
        if(turn0){
            t1.innerHTML = "0"
            turn0 = false
        }
    else{
        t1.innerHTML = "x"
        turn0 = true
    }
    t1.disabled = true
    checkFunction()
    });
    
    
});

let disablebox = ()=>{
    for(let box of Button){
        box.disabled = true
    }
    
}
let enablebox = ()=>{
    for(let box of Button){
        box.disabled = false
        box.innerHTML = '';
    }
    
}
const showwinner = (win)=>{
    msg.innerHTML = `player  ${win} is the winner`;
    winner.classList.remove('hide');
    disablebox();


}
let checkFunction = ()=>{
    for(let value of winPattern){
       
       let pos1 = Button[value[0]].innerHTML;
       let pos2 = Button[value[1]].innerHTML;
       let pos3 = Button[value[2]].innerHTML;
        if(pos1 != "" && pos2 != "" && pos3 != ""){
            if(pos1 === pos2 && pos2 === pos3){
                console.log("winner",pos1);
                showwinner(pos1);
            } 
        }
        

    }
   

}
let rstgame = ()=>{
    turn0 = true;
    enablebox();
    winner.classList.add("hide");
}
reset.addEventListener("click",rstgame)
btn2.addEventListener("click",rstgame)
