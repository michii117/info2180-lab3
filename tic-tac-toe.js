
window .addEventListener( 'load' , (event) => { 
    
    var childrenArr= document.getElementById("board").children;

    for (let i=0; i <childrenArr.length; i++){
        childrenArr[i].classList.add("square");
    }

}); 



