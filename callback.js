// call back function

function names(fun) {// call Back Function
    console.log("Hello! I am name");
    fun();
}



// const greet=function() {
//     console.log("I am Call Back Function");
// }; // callBack Function call

// names(greet);
// greet();

 // callBack Function call

// names(function() {
//     console.log("I am Call Back Function");
// });

// names(()=>{
//     console.log("I am Call Back Function");
// });

function fetchData() {
    // bahut saara
    console.log("I am Fetching Data");
}

setInterval(fetchData,5000);


