var audio= new Audio('Cisc4900/bensound-straight.mp3');
audio.play();
//document.body.style.backgroundColor = "red";
 
function myFunction(){
 newvalues1();
  move_hero();
   show_image();
}
var questions = document.querySelectorAll(".questions");
var numQuestions = 7;
var passWords1 =  [];
var pickedPasswords;
var arg=false;
var messageDisplay = document.querySelector("#message");
var message1Display = document.querySelector("#message1");
var message4Display = document.querySelector("#message4");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var modeButtons = document.querySelectorAll(".mode");
var breaker=document.getElementById("password-time");
var colorDisplay=document.getElementById("colorDisplay");
var colorDisplay = document.querySelector("#colorDisplay");
 (function (doc) {
                var passwordInput = doc.getElementById("password-box"),
                    timeDiv = doc.getElementById("password-time"),
                    checksList = doc.getElementById("password-checks");

                // Code to render the time returned by HSIMP
                var renderTime = function (time, input) {
                    timeDiv.innerHTML = time || "";
                };

                // Code to output the checks returned by HSIMP
                var renderChecks = function (checks, input) {
                    checksList.innerHTML = "";

                    for (var i = 0, l = checks.length; i < l; i++) {
                        var li = doc.createElement("li"),
                            title = doc.createElement("h2"),
                            message = doc.createElement("p");

                        title.innerHTML = checks[i].name;
                        li.appendChild(title);

                        message.innerHTML = checks[i].message;
                        li.appendChild(message);

                        checksList.appendChild(li);
                    }
                };

                // Setup the HSIMP object
                var attachTo = hsimp({
                    options: {
                        calculationsPerSecond: 10e9, // 10 billion calculations per second
                        good: 31557600e9, // 1 billion years
                        ok: 31557600e3 // 1 thousand years
                    },
                    outputTime: renderTime,
                    outputChecks: renderChecks
                });
                
                // setup custom values for "instantly"/"forever"
                hsimp.setDictionary({
                    "instantly": "Immediately",
                    "forever": "Aaaaaaaaaaaaaaaages",
                });

                // Run the HSIMP
                attachTo(passwordInput);
            }(this.document));





colorDisplay.textContent=pickedPasswords;

//alert(colorDisplay);

 //colorDisplay = document.querySelector("#colorDisplay");
 
 
 function selectText() {
  const input = document.getElementById('password-box');
  var y=input.focus();
  var x = document.getElementById("questions");
 
 
  for(var i=0;i<passWords1.length;i++){
    questions[i].style.display = "block";
    questions[i].style.background = passWords1[i];  
    questions[i].textContent;

 
     
    }
 
 for(var i = 0; i < passWords1.length; i++){
    const input = document.getElementById('password-box');
        //add click listeners to passwords
        questions[i].textContent=passWords1[i];

        pickedPasswords= passWords1[i];
        questions[i].addEventListener("click", function(){
            //grab color of clicked password
            var clickedpassWord = this.style.background;
          //  var keycode=13;
            var text=$(this).text();
              colorDisplay.textContent=text;
             $(input).val(text);
         
       
           y= questions[i];
            // x.innerHTML=y;
            //compare color to pickedpasswords
            if(clickedpassWord  === pickedPasswords){
                messageDisplay.textContent = "Correct!";
              //  changeColors(clickedpassWord);
                h1.style.background =background;
                resetButton.textContent = "Play Again?";
            } else {
               this.style.background ="";
                messageDisplay.textContent = "Score "+count;

           }

        }); 
      }
    }

;

    function newvalues(){
     //refreshPage();

      passWords1[1]=("Ch46olate is great");
      passWords1[2]=("1@342");
      passWords1[3]=("Joey1");
      passWords1[4]=("Ph4sic3 M4thn");
      passWords1[5]=("Y4NK33S");
      passWords1[6]=("I like ice cream");
      passWords1[7]=("Toocansam");
      
       
      // for (var i=1;i<=4,i++){
     // var i=prompt("which one these passwords do you think  is the easiest to break "+ passWords1[i]+" or "+ passWords1[i+1]+" ?");
        
      var count=0;
      for(var i = 0; i < passWords1.length; i++){

    const input = document.getElementById('password-box');
        //add click listeners to paswords
        questions[i].textContent=passWords1[i];

        pickedPasswords= passWords1[i];
        questions[i].addEventListener("click", function(){
            //grab color of clicked password
            var clickedpassWord = this.style.background;
          //  var keycode=13;
               var text=$(this).text();
              colorDisplay.textContent=text;
             $(input).val(text)
             
             var myButton=document.getElementById("click");
             var completed=true;
           $("input").on(selectText());
           

            if(count==150){message4Display.textContent="Level Complete";
              switchWithCondition(completed);
                   }
             if(colorDisplay.textContent =="H4ppy B1rthday"){count+=10;
               message1Display.textContent="Good Password!!!";
               message4Display.textContent="It will take 2 billion years to break. Perfect length 14 characters long";
              } 
                if(colorDisplay.textContent =="Br00kl$4n Co113g3"){count+=10;
                  message1Display.textContent="Great Password!!";
                  message4Display.textContent="16 quadrillion yearsLength: Long Your password is over sixteen characters long.";
              } 
              if(colorDisplay.textContent =="Br00kly4"){count+=10;
                  message1Display.textContent="Great Password!!";
              } 
               if(colorDisplay.textContent =="1@342"){count-=10;
                  message1Display.textContent="Bad Password!!";
                  message4Display.textContent="5minutes: shortd Your password should be over 5 characters long.Include symbols and  more numbers";
              } 
                if(colorDisplay.textContent =="I like ice cream"){count+=10;
                  message1Display.textContent="Great Password!!";
                  message4Display.textContent="It will take 1 trillion years to break.The length is good it is 16 characters long."

              } 
              if(colorDisplay.textContent =="C0mp4ter Cla33!"){count+=10;
                   message1Display.textContent="Good Password!!";
                message4Display.textContent=" The password will take 2 trillion years to break.The length is good it has 14 chatracters"
                }
                if(colorDisplay.textContent =="My pet dog spot"){count+=10;
                    message1Display.textContent="Great Password!!";
                    message4Display.textContent=" It will take 19 billion years to break. The length is good it is 15 characters long.";
              } 
              if(colorDisplay.textContent =="Ch46olate is great"){count+=10;
                   message1Display.textContent="Goodd Password!! ";
                   message4Display.textContent=" 2 million years Length: It has a good length of 18 characters.";
                 }   
              if(colorDisplay.textContent =="Joey1"){count-=10;
                   message1Display.textContent="Bad Password!!";
                   message4Display.textContent="92 milliseconds Length: Very short Your password is very short. The longer a password is the more secure it will be. Possibly a Word and a Number Your password looks like it might just be a word and a few digits. This is a very common pattern and would be cracked very quickly. Character Variety: No Symbols Your password only contains numbers and letters. Adding a symbol can make your password more secure. Don't forget you can often use spaces in passwords.";
              }   
               if(colorDisplay.textContent =="Ph4sic3 M4thn"){count+=10;
                   message1Display.textContent="Good Password!!";
                   message4Display.textContent=" It will take 253 thousand years break.  Length is good it has 12 characters ";
                 }
               if(colorDisplay.textContent =="Y4NK33S"){count-=10;
                   message1Display.textContent="Bad Password!!";
                   message4Display.textContent="8 secondsLength: Short Your password is quite short. The longer a password is the more secure it will be.Character Variety: No SymbolsYour password only contains numbers and letters. Adding a symbol can make your password more secure. Don't forget you can often use spaces in passwords.";
              }  
                if(colorDisplay.textContent =="I like ice cream"){count+=10;
                   message1Display.textContent="Good Password!!";
                   message4Display.textContent=" It will take 1 trillion years to break. The length is good.It has 16 letters.";
              } 
                if(colorDisplay.textContent =="Toocansam"){count-=10;
                   message1Display.textContent="Bad Password!!";
                   message4Display.textContent="3 days Possibly a word Your password looks like it could be a dictionary word or a name. If it's a name with personal significance it might be easy to guess. If it's a dictionary word it could be cracked very quickly.Length: Short Your password is quite short. The longer a password is the more secure it will be. Character Variety: Just Letters Your password only contains letters. Adding numbers and symbols can make your password more secure.";

                 }
            
       
           y= questions[i];
            // x.innerHTML=y;
            //compare password to pickedPassword
            if(clickedpassWord === pickedPasswords){
                messageDisplay.textContent = "Correct!";
                changeColors(clickedpassWord);
                h1.style.background = background;
                resetButton.textContent = "Play Again?";
            } else {
                this.style.background = "";
                messageDisplay.textContent ="Score "+count;

            }
             // messageDisplay.textContent= "Your score "+count;
        }); 
      }
        
       }
       
        function newvalues1(){
     //refreshPage();
      passWords1[0]=("Camp fire");
      passWords1[1]=("H4ppy B1rthday");
      passWords1[2]=("Br00kl$4n Co113g3");
      passWords1[3]=("Br00kly4");
      passWords1[4]=("My pet dog spot");
      passWords1[5]=("2@ckly!");
      passWords1[6]=("Mike and Ike");
      passWords1[7]=("Taffey");
        var count=0;
      for(var i = 0; i < passWords1.length; i++){
    const input = document.getElementById('password-box');
        //add click listeners to passwords

  
  
        questions[i].textContent=passWords1[i];
       
        pickedPasswords= passWords1[i];
        questions[i].addEventListener("click", function(){
            //grab password that is clicked 
            var clickedpassWord = this.style.background;
          //  var keycode=13;
            var text=$(this).text();
                        colorDisplay.textContent=text;
             $(input).val(text);
             
             var myButton=document.getElementById("click");
             var completed=true;
           $("input").on(selectText());
                
              if(count==150){ message4Display.textContent="Level Complete";
                switchWithCondition(completed);
                  }
                  if(colorDisplay.textContent =="Camp fire"){count-=10;
                   message1Display.textContent="Bad Password!!";
                   message4Display.textContent="1 minuteLength: Short Your password is quite short. The longer a password is the more secure it will be.";
                    }
                 if(colorDisplay.textContent =="2@ckly!"){count-=10;
                   message1Display.textContent="Bad Password!!";
                   message4Display.textContent="1 minuteLength: Short Your password is quite short. The longer a password is the more secure it will be.";
              }   
                if(colorDisplay.textContent =="H4ppy B1rthday"){count+=10;
                   message1Display.textContent="Great Password!!";

              } 
                if(colorDisplay.textContent =="Br00kl$4n Co113g3"){count+=10;
                   message1Display.textContent="Great Password!!";
                   message4Display.textContent="16 quadrillion yearsLength: Long Your password is over sixteen characters long.";
              } 
                if(colorDisplay.textContent =="I like ice cream"){count+=10;
                  message1Display.textContent="Great Password!!";
              } 
                if(colorDisplay.textContent =="My pet dog spot"){count+=10;
                   message1Display.textContent="Great Password!!";
                   message4Display.textContent=" It will take 19 billion years to break";
              } 
              if(colorDisplay.textContent =="Ch46olate is yummy!"){count+=10;
                   message1Display.textContent="Great Password!! ";
                   message4Display.textContent=" 146 quintillion years Length: Long Your password is over sixteen characters long.";
              } 
               
                
               if(colorDisplay.textContent =="Br00kly4"){count-=10;
                   message1Display.textContent="Bad Password!!";
                   message4Display.textContent="6 hours Length: Short Your password is quite short. The longer a password is the more secure it will be.Character Variety: No Symbols Your password only contains numbers and letters. Adding a symbol can make your password more secure. Don't forget you can often use spaces in passwords.";
              } 
               if(colorDisplay.textContent =="Mike and Ike"){count+=10;
                   message1Display.textContent="Good Password!!";
                   message4Display.textContent="It will take 52 thousand years to break.It has a good length of 12 charachters "
               }
               if(colorDisplay.textContent =="Taffey"){count-=10;
                   message1Display.textContent="Bad Password!!";
                   message4Display.textContent=" 2 secondsLength: Very short Your password is very short. The longer a password is the more secure it will be.Possibly a word";
              } 
                 
             



               
           y= questions[i];
            // x.innerHTML=y;
            //compare password to pickedpassword
            if(clickedpassWord === pickedPasswords){
                messageDisplay.textContent = "Correct!";
                changeColors(clickedpassWord);
                h1.style.background = pickedPasswords;
                resetButton.textContent = "Play Again?";
            } else {
                this.style.background = "";
                messageDisplay.textContent = "Score "+count;


            }

        }); 
      }
   
     
       }
function refreshPage(){
     
   
      //for(var int i=0,i<color.length)
    
         location.reload();
  }

function reset(){
   
    //pick a new passwords from array
    pickedPasswords = pickedColor();
    //change color display to match picked password
    colorDisplay.textContent = pickedPasswords.textContent;
    resetButton.textContent = "Restart";
    messageDisplay.textContent = "";
    //Change passwords on the page//
    for(var i = 0; i < questions.length; i++){
        if(passWords1[i]){
            questions[i].style.display = "block";
            questions[i].textContent = passWords1[i];
        } else {
            questions[i].textContent = "none";
        }   
    }
    h1.style.backgroundColor = "steelblue";
}

resetButton.addEventListener("click",function(){
    reset();
})

 (function (doc) {
                var passwordInput = doc.getElementById("password-box"),
                    timeDiv = doc.getElementById("password-time"),
                    checksList = doc.getElementById("password-checks");

                // Code to render the time returned by HSIMP
                var renderTime = function (time, input) {
                    timeDiv.innerHTML = time || "";
                };

                // Code to output the checks returned by HSIMP
                var renderChecks = function (checks, input) {
                    checksList.innerHTML = "";

                    for (var i = 0, l = checks.length; i < l; i++) {
                        var li = doc.createElement("li"),
                            title = doc.createElement("h2"),
                            message = doc.createElement("p");

                        title.innerHTML = checks[i].name;
                        li.appendChild(title);

                        message.innerHTML = checks[i].message;
                        li.appendChild(message);

                        checksList.appendChild(li);
                    }
                };

                // Setup the HSIMP object
                var attachTo = hsimp({
                    options: {
                        calculationsPerSecond: 10e9, // 10 billion calculations per second
                        good: 31557600e9, // 1 billion years
                        ok: 31557600e3 // 1 thousand years
                    },
                    outputTime: renderTime,
                    outputChecks: renderChecks
                });
                
                // setup custom values for "instantly"/"forever"
                hsimp.setDictionary({
                    "instantly": "Immediately",
                    "forever": "Aaaaaaaaaaaaaaaages",
                });

                // Run the HSIMP
                attachTo(passwordInput);
            }(this.document));
       