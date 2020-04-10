// document.querySelector("button").addEventListener("click", handleClick);  //We dont use the parenthesis after function here as it will call the function while we add click event but by only specifiying the function name the function is carried out only when the click event has occured.
//
// function handleClick() {
//   alert("I got clicked!");
// }


// Above code can also be written as anonymous function which is more generallty used and it is done as shown below:-

// document.querySelector("button").addEventListener("click", function() {
//     alert("I got clicked!");
//    });

//To add click on multiple buttons:-

// var buttons = document.querySelectorAll(".drum");
// for (var i=0;i<buttons.length;i++)
// {
//   buttons[i].addEventListener("click", function() {
//        alert("I got clicked!");
//      });
// }





// From here our real code begins for the website:-


//For mouse click :-


var buttons = document.querySelectorAll(".drum"); //puts all the buttons with class 'drum' in an Array/List.
for (var i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", function() {
    // this.style.color = "white"; // 'this' is used to identify and select the current button that we clicked on as dictated by the addEventListener which will in turn trigger the function attached to it. Style lets us make in-line changes in css properties like in this case color.

    var buttonInnerHTML = this.innerHTML; //We do this to save the name od the button clicked in our variable.

    makeSound(buttonInnerHTML); //This triggers the function that makes the sound

    buttonAnimation(buttonInnerHTML); //This triggers the function that triggers the animation for the keys.

  });
}


//For button pressed:-

document.addEventListener("keydown", function(event) { // unlike "click" event which has to be targetted, "keydown" event is used throughout the document to detect if the key is pressed. To determine which key was pressed we pass 'event' or any name of our desire in the anonymous function which stores the pressed key.
  // console.log(event)  //If we console log the event and see it in chrome console(ctrl+shift+j), we can see which key event was pressed or which event triggered the anonymous function.
  // console.log(event.key); //This returns the exact key pressed in chrome console.

  makeSound(event.key); //key is a property of keydown which returns exact key pressed for the passed event.

  buttonAnimation(event.key);

});


//Defining both functions of sound and animation which is called above:-

function makeSound(key) {

  switch (key) { // We specify what we have to switch, in this case our variable.

    case "w": // We specify with case what it should be equal to for this case to be carried out.
      var tom1 = new Audio('sounds/tom-1.mp3'); //This is how we create an object, 'audio' is the object of 'Audio' constructor function which has a method play() which is called below by our object. For insigths in declaring a constructor function and objects and methods check out google chrome sources by pressing ctrl+shift+j
      tom1.play();
      break; // We specify the break to exit the switch statement once the case is matched and executed.

    case "a":
      var tom2 = new Audio('sounds/tom-2.mp3');
      tom2.play();
      break;

    case "s":
      var tom3 = new Audio('sounds/tom-3.mp3');
      tom3.play();
      break;

    case "d":
      var tom4 = new Audio('sounds/tom-4.mp3');
      tom4.play();
      break;

    case "j":
      var snare = new Audio('sounds/snare.mp3');
      snare.play();
      break;

    case "k":
      var crash = new Audio('sounds/crash.mp3');
      crash.play();
      break;

    case "l":
      var kick = new Audio('sounds/kick-bass.mp3');
      kick.play();
      break;

    default:
      console.log(key); //This works as an else statement and only gets carried out if none of the cases match the specified parameters.

  }

}


function buttonAnimation(currentKey) {

  var activeButton = document.querySelector("." + currentKey); //To select the class we defined in the HTML as buttons. 

  activeButton.classList.add("pressed"); // classList displays all the classes of the query we selected and and we use add to add the class we want to our selected query.

  setTimeout(function() { // Settimeout is used to give a time delay of some millisecond(100) to our passed function which is anonymous in our case.
    activeButton.classList.remove("pressed"); // we remove the class for that pressed animation effect.
  }, 100);

}
