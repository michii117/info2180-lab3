
var board= [0,0,0,0,0,0,0,0,0];
var moved= "X";
var childrenArr;
var restart;


window.addEventListener( 'load' , (event) => { 


    restart= document.getElementsByClassName("btn")[0]

    
    childrenArr= document.getElementById("board").children;

    for (let i=0; i <childrenArr.length; i++){

        // Shows squares css
        childrenArr[i].classList.add("square");

        // Controls click event to place X or O
        childrenArr[i].addEventListener('click', (event)=> {

            
            if(board[i]==0){
                if(moved=="X"){
                    move("X",i);
                    moved= "O";
                }else{
                    move("O",i)
                    moved= "X";
                }                
            }else{
                alert("Cant move there")
            }

        });

        //Control hover
        childrenArr[i].onmouseover= function(){
            childrenArr[i].classList.add("hover");
        }
        childrenArr[i].onmouseleave= function(){            
            childrenArr[i].classList.remove("hover");
        }

    }


    restart.addEventListener("click",(event) => {
        board= [0,0,0,0,0,0,0,0,0];
        moved= "X";
        var stat= document.getElementById("status");
        stat.innerHTML= "Move your mouse over a square and click to play an X or an O.";
        stat.classList.remove("you-won");
        
        for (let i=0; i <childrenArr.length; i++){
            childrenArr[i].innerHTML= "";
            childrenArr[i].classList.remove("X");
            childrenArr[i].classList.remove("O");
        }
    
    
    });

}); 




function checkWinner(m){
    var status;
    status= document.getElementById("status")

    if((board[0]==m && board[1]==m && board[2]==m) ||  (board[3]==m && board[4]==m && board[5]==m) || 
    (board[6]==m && board[7]==m && board[8]==m) ||  (board[0]==m && board[3]==m && board[6]==m) ||  
    (board[1]==m && board[4]==m && board[7]==m) ||  (board[2]==m && board[5]==m && board[8]==m)
    || (board[0]==m && board[4]==m && board[8]==m) ||  (board[2]==m && board[4]==m && board[6]==m)){

        status.innerHTML= "Congratulations! "+ m + " is the Winner!"
        status.classList.add("you-won")

    } else if(board.indexOf(0)==-1){

        status.innerHTML= "No winner. It's a Draw."
        status.classList.add("you-won")

    }
}

function move(m,i){
    childrenArr[i].classList.add(m)
    childrenArr[i].innerHTML= m;
    board[i]= m;
    checkWinner(m)
}


