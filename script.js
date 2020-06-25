(function () {

var names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];

    var helloSpeaker= "Hello";
    
    function speak(name) {  
      console.log(helloSpeaker + " " + name);
    }
    
    
    var byeSpeaker = "Good Bye";
   
    function speech(name) {
        console.log(byeSpeaker + " " + name);
    }
    
    
for (var i = 0; i < names.length; i++) {
debugger;
  var firstLetter = names[i].charAt(0).toLowerCase();

  if (firstLetter == 'j') {
     speech(names[i]);
  } else {
    speak(names[i]);
  }
}

})();
