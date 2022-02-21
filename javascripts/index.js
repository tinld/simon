var memoryColor = []; //String array
var pickColor = []; //String array
var level = 1;
var i = 0;
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
    pickColorProgress(this.id);
    if(checkColor(pickColor.length-1) === true)
    {
        i++;
        level++;
        pickColor = [];
        setTimeout(function(){
            randomColorProgress();
        }, 1000);
    }
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
    $("h1").text("Level " + level);
    var randomColor = Math.random() * 4;
    randomColor = Math.floor(randomColor);
    var colorID = document.querySelectorAll(".btn")[randomColor].id;
    makeSound(colorID);
    buttonAnimate(colorID);
    memoryColor.push(colorID);
}

function pickColorProgress(color)
{
    pickColor.push(color);
}

function checkColor(length) {

    if(memoryColor[length] === pickColor[length])
    {
        if(memoryColor.length === pickColor.length)
        {
            return true;
        }
        else
            return false;
    }
    return false;

}
