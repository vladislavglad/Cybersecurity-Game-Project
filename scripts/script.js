/* If you're feeling fancy you can add interactivity 
    to your site with Javascript */

/* var caesarCount = 0;
var rotCount = 0;
var pigCount = 0;
*/
var rightCount = 0;

/* Change text in boxes for information */
var button = document.getElementById("info"),
  count = 0;
var text = document.getElementById("reason");
button.onclick = function() {
  count += 1;
  if (count % 2 === 0) {
    button.innerHTML = "Why do we use encryption?";
    text.value =
      "The way we use encryption is with three key components after receiving the data: the cryptographic algorithm, the      cryptographic key, and the encrypted message.  It protects not only the privacy, but also the integrity of the data being sent over.  There are many different algorithms used to encrypt data, which will affect the resulting key, and resulting message, as well.";
  } else {
    button.innerHTML = "How do we use encryption?";
    text.value =
      "We use encryption to protect sensitive information that is stored on our computers, or passed through the internet. Things like bank account information, online payments, and passwords are encrypted to prevent unwanted sharing of that sensitive information.";
  }
};

/* Caesar1 check */
function c1completed() {
  
  var input = document.getElementById("c1").value;
  var answer = document.getElementById("c1Ans");

  if(rightCount == 0){
    answer.innerHTML = " ";
  }

  if (input == "WHEEL" || input == "wheel") {
    answer.innerHTML = "Correct!";
    //caesarCount += 1;
    rightCount += 1;

    if(rightCount == 9){
      rightCount = 0; //Restart the counter to make sure it isn't at or above 3
      switchWithCondition(true);
    }

  } else {
    answer.innerHTML = " ";
    alert("Wrong; try again");
    switchWithCondition(false);
  }

};

/* Caesar2 check */
function c2completed() {
  var input = document.getElementById("c2").value;
  var answer = document.getElementById("c2Ans");

  if(rightCount == 0){
    answer.innerHTML = " ";
  }

  if (input == "INFORMATION" || input == "information") {
    answer.innerHTML = "Correct!";
    //caesarCount += 1;
    rightCount += 1;

    if(rightCount == 9){
      rightCount = 0; //Restart the counter to make sure it isn't at or above 3
      switchWithCondition(true);
    }

  } else {
    answer.innerHTML = " ";
    alert("Wrong; try again");
    switchWithCondition(false);
  }

};

/* Caesar3 check */
function c3completed() {
  var input = document.getElementById("c3").value;
  var answer = document.getElementById("c3Ans");

  if(rightCount == 0){
    answer.innerHTML = " ";
  }

  if (input == "JULIUS CAESAR" || input == "julius caesar") {
    answer.innerHTML = "Correct!";
    //caesarCount += 1;
    rightCount += 1;

    if(rightCount == 9){
      rightCount = 0; //Restart the counter to make sure it isn't at or above 3
      switchWithCondition(true);
    }

  } else {
    answer.innerHTML = " ";
    alert("Wrong; try again");
    switchWithCondition(false);
  }

};

/* Pigpen1 check */
function p1completed() {
  var input = document.getElementById("p1").value;
  var answer = document.getElementById("p1Ans");

  if(rightCount == 0){
    answer.innerHTML = " ";
  }

  if (input == "TACO" || input == "taco") {
    answer.innerHTML = "Correct!";
    //pigCount += 1;
    rightCount += 1;

    if(rightCount == 9){
      rightCount = 0; //Restart the counter to make sure it isn't at or above 3
      switchWithCondition(true);
    }

  } else {
    answer.innerHTML = " ";
    alert("Wrong; try again");
    switchWithCondition(false);
  }

};


/* Pigpen2 check */
function p2completed() {
  var input = document.getElementById("p2").value;
  var answer = document.getElementById("p2Ans");

  if(rightCount == 0){
    answer.innerHTML = " ";
  }

  if (input == "ORANGE" || input == "orange") {
    answer.innerHTML = "Correct!";
    //pigCount += 1;
    rightCount += 1;

    if(rightCount == 9){
      rightCount = 0; //Restart the counter to make sure it isn't at or above 3
      switchWithCondition(true);
    }

  } else {
    answer.innerHTML = " ";
    alert("Wrong; try again");
    switchWithCondition(false);
  }

};

/* Pigpen3 check */
function p3completed() {
  var input = document.getElementById("p3").value;
  var answer = document.getElementById("p3Ans");

  if(rightCount == 0){
    answer.innerHTML = " ";
  }

  if (input == "AMAZING" || input == "amazing") {
    answer.innerHTML = "Correct!";
    //pigCount += 1;
    rightCount += 1;

    if(rightCount == 9){
      rightCount = 0; //Restart the counter to make sure it isn't at or above 3
      switchWithCondition(true);
    }

  } else {
    answer.innerHTML = " ";
    alert("Wrong; try again");
    switchWithCondition(false);
  }

};

/* Rotation1 check */
function r1completed() {
  var input = document.getElementById("r1").value;
  var answer = document.getElementById("r1Ans");

  if(rightCount == 0){
    answer.innerHTML = " ";
  }

  if (input == "WHEEL" || input == "wheel") {
    answer.innerHTML = "Correct!";
    //rotCount += 1;
    rightCount += 1;

    if(rightCount == 9){
      rightCount = 0; //Restart the counter to make sure it isn't at or above 3
      switchWithCondition(true);
    }

  } else {
    answer.innerHTML = " ";
    alert("Wrong; try again");
    switchWithCondition(false);
  }

};

/* Rotation2 check */
function r2completed() {
  var input = document.getElementById("r2").value;
  var answer = document.getElementById("r2Ans");

  if(rightCount == 0){
    answer.innerHTML = " ";
  }

  if (input == "SCHOOL" || input == "school") {
    answer.innerHTML = "Correct!";
    //rotCount += 1;
    rightCount += 1;

    if(rightCount == 9){
      rightCount = 0; //Restart the counter to make sure it isn't at or above 3
      switchWithCondition(true);
    }

  } else {
    answer.innerHTML = " ";
    alert("Wrong; try again");
    switchWithCondition(false);
  }

};

/* Rotation3 check */
function r3completed() {
  var input = document.getElementById("r3").value;
  var answer = document.getElementById("r3Ans");

  if(rightCount == 0){
    answer.innerHTML = " ";
  }

  if (input == "ENCRYPTION" || input == "encryption") {
    answer.innerHTML = "Correct!";
    //rotCount += 1;
    rightCount += 1;

    if(rightCount == 9){
      rightCount = 0; //Restart the counter to make sure it isn't at or above 3
      switchWithCondition(true);
    }

  } else {
    answer.innerHTML = " ";
    alert("Wrong; try again");
    switchWithCondition(false);
  }

};

var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.maxHeight){
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
    } 
  });
}

/*
var rotation = document.getElementById("rotational_ex"),
    count = 0;
var quiz = document.getElementById("question");
/*
var question = document.getElementById("question");
var answer = document.getElementById("answer");
var key = document.getElementById("key");

rotation.onclick = function() {
  count +=  1;
  if(count === 1){
    alert("It worked!");
    quiz.value = "AHBNWKRDJH \n key = 4 6 1 4 2 5 2 5 5 6";
    /*
    question.value = "AHBNWKRDJH"
    key.value = "4 6 1 4 2 5 2 5 5 6"
    answer.value = "ENCRYPTION"
  }
};

*/
