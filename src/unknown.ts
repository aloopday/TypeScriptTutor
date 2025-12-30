let w: unknown =1;
w = "string"; //no error
w={
    runANonExistentMethod: () =>{
        console.log("I think therefore I am");
    }
}as{ runANonExistentMethod: ()=> void}


if(typeof w ==='object' && w !==null){
    (w as {runANonExistentMethod: Function}).runANonExistentMethod();
}

// Although we have to cast multiple times we can do a check
// in the if to secure our type and have a safer casting.