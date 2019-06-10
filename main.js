var seconds;
var myArray = ["black", "white", "yellow", "red", "green", "blue"];

async function doshit() {
    seconds = document.getElementById("timeField").value;

    

    var x = setInterval(function() {
        if(seconds == 0){
            var y = setInterval(async () => {
                var rand = myArray[Math.floor(Math.random() * myArray.length)];
                document.getElementById("body").style.backgroundColor = rand;
                await sleep(10)
                rand = myArray[Math.floor(Math.random() * myArray.length)];
                document.getElementById("body").style.backgroundColor = rand;
                seconds = 1;
            }, 100);
        }
        
        seconds--;

        document.getElementById("timer").innerHTML = seconds;
        
    }, 1000); 
    document.getElementById("epilepsywarning").style.display = "none";
}

async function runThing() {
    for(let i = 0; i < 1000; i++){
        document.getElementById("body").style.backgroundColor = "black";
        await sleep(10)
        document.getElementById("body").style.backgroundColor = "white";
    }
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }