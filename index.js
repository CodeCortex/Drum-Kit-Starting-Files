// alert("hellow");


// document.querySelector("button").addEventListener("click",handleClick);

// function handleClick(){
//     alert("i got clicked");
// }

// another way of same 

// document.querySelector("button").addEventListener("click",function(){
//     alert("i am getting clicked");
// });


// var noOfDrumButton = document.querySelectorAll(".drum").length;

// for (var i = 0; i < noOfDrumButton; i++) {
//     document.querySelectorAll("button")[i].addEventListener("click", function () {
//         alert("i got clicked!");
//     });

// }


// var noOfDrumButton = document.querySelectorAll(".drum").length;

// for (var i = 0; i < noOfDrumButton; i++) {
//     document.querySelectorAll("button")[i].addEventListener("click", function () {
//         var audio = new Audio('/Drum Kit Starting Files/sounds/tom-1.mp3');
//         audio.play();
//     });

// }






// this method is not good

// document.querySelectorAll(".drum")[0].addEventListener("click",function(){
//     var audio= new Audio("/Drum Kit Starting Files/sounds/crash.mp3");
//     audio.play();
// });
// // you can write the button instead of .drum but that is a bit risky this property inherit by other button also

// document.querySelectorAll(".drum")[1].addEventListener("click",function(){
//     var audio= new Audio("/Drum Kit Starting Files/sounds/kick-bass.mp3");
//     audio.play();
// });

// document.querySelectorAll(".drum")[2].addEventListener("click",function(){
//     var audio= new Audio("/Drum Kit Starting Files/sounds/snare.mp3");
//     audio.play();
// });




// best way using the switch case for button press only

var noOfDrumButtons = document.querySelectorAll(".drum").length;
// for (var i = 0; i < noOfDrumButtons; i++) {
//     document.querySelectorAll(".drum")[i].addEventListener("click", function () {
//         var bottoninnerhtml = this.innerHTML;
//         switch (bottoninnerhtml) {
//             case "w":
//                 var audio = new Audio("/Drum Kit Starting Files/sounds/tom-1.mp3");
//                 audio.play();
//                 break;
//             case "a":
//                 var audio = new Audio("/Drum Kit Starting Files/sounds/tom-2.mp3")
//                 audio.play();
//                 break;
//             case "s":
//                 var audio = new Audio("/Drum Kit Starting Files/sounds/tom-3.mp3")
//                 audio.play();
//                 break;
//             case "d":
//                 var audio = new Audio("/Drum Kit Starting Files/sounds/tom-4.mp3")
//                 audio.play();
//                 break;
//             case "j":
//                 var audio = new Audio("/Drum Kit Starting Files/sounds/snare.mp3")
//                 audio.play();
//                 break;
//             case "k":
//                 var audio = new Audio("/Drum Kit Starting Files/sounds/crash.mp3")
//                 audio.play();
//                 break;
//             case "l":
//                 var audio = new Audio("/Drum Kit Starting Files/sounds/kick-bass.mp3")
//                 audio.play();
//                 break;

//                 default:cosole.log(bottoninnerhtml);
//         }
//     })
// }


// document.addEventListener("keypress",function(event){
//     alert("key is pressed!");
// })



for (var i = 0; i < noOfDrumButtons; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", function () {
        var wordInHTML = this.innerHTML;
        makesound(wordInHTML);
    })
}


document.addEventListener("keypress", function (event) {
    makesound(event.key);
    buttonAnimation(event.key);
})

function makesound(key) {
    switch (key) {
        case "w":
            var audio = new Audio("/Drum Kit Starting Files/sounds/tom-1.mp3");
            audio.play();
            break;
        case "a":
            var audio = new Audio("/Drum Kit Starting Files/sounds/tom-2.mp3");
            audio.play();
            break;
        case "s":
            var audio = new Audio("/Drum Kit Starting Files/sounds/tom-3.mp3");
            audio.play();
            break;
        case "d":
            var audio = new Audio("/Drum Kit Starting Files/sounds/tom-4.mp3");
            audio.play();
            break;
        case "j":
            var audio = new Audio("/Drum Kit Starting Files/sounds/snare.mp3");
            audio.play();
            break;
        case "k":
            var audio = new Audio("/Drum Kit Starting Files/sounds/crash.mp3");
            audio.play();
            break;
        case "l":
            var audio = new Audio("/Drum Kit Starting Files/sounds/kick-bass.mp3");
            audio.play();
            break;

        default: cosole.log(bottoninnerhtml);
    }
}




// function anoterAddEventListener(typeOfEvent,callBack){

//     //detect event code
//     var eventThatHappen={
//         eventType:"keypress",
//         key:"p",
//         durationOfKeypress:2
//     }

//     if(eventThatHappen.eventType===typeOfEvent){
//         callBack(eventThatHappen);
//     }

// }


function buttonAnimation(wordInHTML) {

    var activeButton=document.querySelector("."+wordInHTML);
    activeButton.classList.add("pressed");

    // var activeButton = document.querySelector("." + wordInHTML).classList.add("pressed");  

    // this upper one line statement is not working properly


   setTimeout(function(){
    activeButton.classList.remove("pressed");
   },100);
}



