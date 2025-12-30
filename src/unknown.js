var w = 1;
w = "string"; //no error
w = {
    runANonExistentMethod: function () {
        console.log("I think therefore I am");
    }
};
if (typeof w === 'object' && w !== null) {
    w.runANonExistentMethod();
}
// Although we have to cast multiple times we can do a check
// in the if to secure our type and have a safer casting.
