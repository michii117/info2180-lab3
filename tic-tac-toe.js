
var board= [-1,-1,-1,-1,-1,-1,-1,-1,-1];
var moved= 0;


window.addEventListener( 'load' , (event) => { 
    
    var childrenArr= document.getElementById("board").children;

    for (let i=0; i <childrenArr.length; i++){

        // Shows squares css
        childrenArr[i].classList.add("square");

        // Controls click event to place X or O
        childrenArr[i].addEventListener('click', (event)=> {

            
            if(board[i]==-1){
                if(moved==0){
                    childrenArr[i].classList.add("X")
                    childrenArr[i].innerHTML="X";
                    board[i]='X';
                    moved=1;
                }else{
                    childrenArr[i].classList.add("O")
                    childrenArr[i].innerHTML="O";
                    board[i]='O';
                    moved=0;
                }                
            }else{
                alert("Cant move there")
            }
        });


    }

    var squares= document.getElementsByClassName("square");
    squares.onmouseover= function(){console.log("hover")}

}); 



