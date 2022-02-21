var memoryColor = []; //String array
var pickColor = []; //String array
var level = 0;
var started = false;

$("body").keypress(function (e) {
    if(!started)
    {
        randomColorProgress();
        started = true;
    }
});

$(".btn").click(function (e) {
    makeSound(this.id);
    buttonAnimate(this.id);
    pickColor.push(this.id);

    checkColor(pickColor.length-1);
});

//Make Sound
function makeSound(key) {
    var sound = new Audio("sounds/" + key + ".mp3");
    sound.play();
}


//Effect
function buttonAnimate(buttonID) {
    $("." + buttonID).addClass("pressed");
    setTimeout(function () {
        $("." + buttonID).removeClass("pressed");
    }, 400)
}




function randomColorProgress()
{
    pickColor = [];
    level++;
    $("h1").text("Level " + level);
    var randomColor = Math.random() * 4;
    randomColor = Math.floor(randomColor);
    var colorID = document.querySelectorAll(".btn")[randomColor].id;
    makeSound(colorID);
    buttonAnimate(colorID);
    memoryColor.push(colorID);
}


function checkColor(length) {

    if(memoryColor[length] === pickColor[length])
    {
        if(memoryColor.length === pickColor.length)
        {
            setTimeout(function(){
                randomColorProgress();
            }, 1000);
        }
    }
    else
    {
        $("h1").text("Wrong. Game Over, press any key to restart.");
        makeSound("wrong");
        $("body").addClass("game-over");
        setTimeout(function()
        {
            $("body").removeClass("game-over");
        }, 200)


        started = false;
        level = 0;
        memoryColor = [];
    }
}

