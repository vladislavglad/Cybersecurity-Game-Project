//Scripts for emails. 
//By Jerfyn Rosario

/*eslint-env browser*/

//var inspectMode = false;


var i;
var ty = 0;
var txtW = 'HACK DETECTED! HACK DETECTED!';
var speed = 50;

var prompt = document.getElementById("successPrompt");
var spanClose = document.getElementsByClassName("close")[0];
var audioS = document.getElementById("audioSuccess");
var audioF = document.getElementById("audioFailure");



function typeAnim() {

    //Animation for typing
    
    if (ty < txtW.length) {
        document.getElementById("hack").innerHTML += txtW.charAt(ty);
        ty++;
        setTimeout(typeAnim, speed);
    }
}


//Display Prompts for Success

var emailDiv = [];
        emailDiv[0] = document.getElementById("Email0");
        emailDiv[1] = document.getElementById("Email1");
        emailDiv[2] = document.getElementById("Email2");

        /*emailDiv[3] = "Email4.html";
        emailDiv[4] = "Email5.html";
        emailDiv[5] = "Email6.html";
        emailDiv[6] = "Email7.html";
        emailDiv[7] = "Email8.html";
        emailDiv[8] = "Email9.html";
        emailDiv[9] = "Email10.html";
        emailDiv[10] = "Email11.html";
        emailDiv[11] = "Email12.html";
        emailDiv[12] = "Email13.html";
        emailDiv[13] = "Email14.html";
        emailDiv[14] = "Email15.html";
        emailDiv[15] = "Email16.html";
        emailDiv[16] = "Email17.html";
        emailDiv[17] = "Email18.html";
        emailDiv[18] = "Email19.html";
        emailDiv[19] = "Email20.html";
        emailDiv[20] = "Email21.html";
        emailDiv[21] = "Email22.html";
        emailDiv[22] = "Email23.html";
        emailDiv[23] = "Email24.html";
        emailDiv[24] = "Email25.html";
        emailDiv[25] = "Email26.html";
        emailDiv[26] = "Email27.html";
        emailDiv[27] = "Email28.html";
        emailDiv[28] = "Email29.html";
        emailDiv[29] = "Email30.html";*/

function success() {
    
    //Default Layout
    
   
    
    this.successPrompt.style.display = "block";
    this.audioS.play();
}



function successF() {
    
 
   
    
    this.successFrom.style.display = "none";
    this.audioS.play();

}



function successT() {
    
    //To
    
    this.successTo.style.display = "block";
    
    this.audioS.play();
}

function successS() {
    
    //Subject
    
    this.successSubject.style.display = "block";
    this.successSubject.style.display = "block";
    this.audioS.play();
}

function successD() {
    
    //Dear
    
    this.successDear.style.display = "block";
    this.audioS.play();
}

function successB() {
    
    //Body
    
    this.successBody.style.display = "block";
    this.audioS.play();
}

function successL() {
    
    //Links
    
    this.successLink.style.display = "block";
    this.audioS.play();
}

function successA() {
    
    //Attachments
    
    this.successAttach.style.display = "block";
    this.atConfirm.style.display = "none";
    this.audioS.play();
}




function successN() {
    
    //Button for no part of the email is wrong.
    
    this.successNothing.style.display = "block";
    this.audioS.play();
}

function successExBu() {
    
    //Button Prompt for certain email
    
    this.successExtraButton.style.display = "block";
    this.buConfirm.style.display = "none";
    this.audioS.play();
}


function closeSPrompt() {
    
    //Closing any prompt
   
    this.successFrom.style.display = "none";
    this.successTo.style.display = "none";
    this.successSubject.style.display = "none";
    this.successDear.style.display = "none";
    this.successBody.style.display = "none";
    this.successLink.style.display = "none";
    this.successAttach.style.display = "none";
    this.successNothing.style.display = "none";
    this.successExtraButton.style.display = "none";
}



function failure() {
    
    //Default Layout
    
    this.failurePrompt.style.display= "block";
    this.audioF.play();
}

function failureF() {
    
    //From
    
    this.failureFrom.style.display= "block";
    this.audioF.play();
}

function failureT() {
    
    //To
    
    this.failureTo.style.display= "block";
    this.audioF.play();
    
}


function failureS() {
    
    //Subject
    
    this.failureSubject.style.display= "block";
    this.audioF.play();
}

function failureD() {
    
    //Dear
    
    this.failureDear.style.display= "block";
    this.audioF.play();
}

function failureB() {
    
    //Body
    
    this.failureBody.style.display= "block";
    this.audioF.play();
}

function failureL() {
    
    //Link
    
    this.failureLink.style.display= "block";
    this.audioF.play();
}

function failureA() {
    
    //Attachment
    
    this.failureAttach.style.display= "block";
    this.atConfirm.style.display = "none";
    this.audioF.play();
}

function failureN() {
    
    //Button for no part of the email is wrong.
    
    this.failureNothing.style.display= "block";
    this.audioF.play();
}

function failureExBu() {
    
    //Button Prompt for certain email
    
    this.failureExtraButton.style.display = "block";
    this.buConfirm.style.display = "none";
    this.audioF.play();
}


function closeFPrompt() {
    
    this.failureFrom.style.display = "none";
    this.failureTo.style.display = "none";
    this.failureSubject.style.display = "none";
    this.failureDear.style.display = "none";
    this.failureBody.style.display = "none";
    this.failureLink.style.display = "none";
    this.failureAttach.style.display = "none";
    this.failureNothing.style.display = "none";
    this.failureExtraButton.style.display = "none";
    
}

function attachConfirm() {
    
    //Open attachment prompt
    
    this.atConfirm.style.display = "block";

    
}

function buttonConfirm() {
    
    //Open attachment prompt
    
    this.buConfirm.style.display = "block";

    
}

function closePrompt() {
    this.atConfirm.style.display = "none";
    this.buConfirm.style.display = "none";
}




function audioSuccess() {
    this.audioS.play();
}

function randPage() {
    var mailTotal = 30;
    var mailName = 'Email'
    var ran = Math.ceil(Math.random()*mailTotal);
    
    if(mailTotal>1){
    
    var randomize = Math.round(Math.random()*29);
    var epages= new Array();
        epages[0] = "Email1.html";
        epages[1] = "Email2.html";
        epages[2] = "Email3.html";
        epages[3] = "Email4.html";
        epages[4] = "Email5.html";
        epages[5] = "Email6.html";
        epages[6] = "Email7.html";
        epages[7] = "Email8.html";
        epages[8] = "Email9.html";
        epages[9] = "Email10.html";
        epages[10] = "Email11.html";
        epages[11] = "Email12.html";
        epages[12] = "Email13.html";
        epages[13] = "Email14.html";
        epages[14] = "Email15.html";
        epages[15] = "Email16.html";
        epages[16] = "Email17.html";
        epages[17] = "Email18.html";
        epages[18] = "Email19.html";
        epages[19] = "Email20.html";
        epages[20] = "Email21.html";
        epages[21] = "Email22.html";
        epages[22] = "Email23.html";
        epages[23] = "Email24.html";
        epages[24] = "Email25.html";
        epages[25] = "Email26.html";
        epages[26] = "Email27.html";
        epages[27] = "Email28.html";
        epages[28] = "Email29.html";
        epages[29] = "Email30.html";

    window.location = epages[randomize];
    
}
}
