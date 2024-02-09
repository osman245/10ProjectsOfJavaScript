

//declare and initialize objects
const choose = document.getElementById("choose");
const btn = document.getElementById("button");
let computerChoice = "ROCK";


// Generate computer value

const compFn = () => {
let random = Math.random();
if ( random <= 0.33) {
computerChoice = "ROCK"
} else if(random <= 0.66) {
computerChoice = "SCISSORS";
}else {
computerChoice = "PAPER";
}
return computerChoice;
}

//generate results 
const resultFn = () => {

let prompt = "";    
const comp = compFn();
const choose = choose.getValue();

if( comp == choose) {
    prompt+= "This is a draw";
}else if(comp == "PAPER" && comp == "SCISSORS") {

}

}



btn.addEventListener('click', function(){
});