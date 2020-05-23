//Scripts for emails. 
//By Jerfyn Rosario



//var inspectMode = false;

var ty=0;
var txtW = 'HACK DETECTED! HACK DETECTED!';
var speed = 50;

var prompt = document.getElementById("successPrompt");
var spanClose = document.getElementsByClassName("close")[0];
var audioS = document.getElementById("audioSuccess");
var audioF = document.getElementById("audioFailure");

var points = 0;
/*
function pointAdjust() {
    if (points = 0) {
        points++;
    }
    else if  (points = 1){
        points --;
    }
}
*/

/*
function hilite() {
        var a = document.getElementById("from");
        a.classList.toggle("highlight");
        
        var b = document.getElementById("to");
        b.classList.toggle("highlight");
        
        var c = document.getElementById("subject");
        c.classList.toggle("highlight");
        
        var d = document.getElementById("dear");
        d.classList.toggle("highlight");
        
        var e = document.getElementById("topbody");
        e.classList.toggle("highlight");
        
        var f = document.getElementById("midbody");
        f.classList.toggle("highlight");
        
        var g = document.getElementById("bottombody");
        g.classList.toggle("highlight");
        
        var h = document.getElementById("link");
        g.classList.toggle("highlight");
    
}
*/
function hiliteF() {
        var a = document.getElementById("from");
        a.classList.toggle("highlight");
        }

function hiliteTo() {

        var b = document.getElementById("to");
        b.classList.toggle("highlight");

}
function hiliteS() {

        var c = document.getElementById("subject");
        c.classList.toggle("highlight");

}
function hiliteD() {

        var d = document.getElementById("dear");
        d.classList.toggle("highlight");

}

function hiliteT() {

        var e = document.getElementById("topbody");
        e.classList.toggle("highlight");

}

function hiliteM() {

        var f = document.getElementById("midbody");
        f.classList.toggle("highlight");

}

function hiliteB() {

        var g = document.getElementById("bottombody");
        g.classList.toggle("highlight");

}

function hiliteLink() {

        var h = document.getElementById("link");
        h.classList.toggle("highlight");

}

function hiliteExt(){
    var j = document.getElementById("extra");
    j.classList.toggle("highlight");
}



function typeAnim() {

    //Animation for typing
    
    if (ty < txtW.length) {
        document.getElementById("hack").innerHTML += txtW.charAt(ty);
        ty++;
        setTimeout(typeAnim,speed);
    }
}

//Display Prompts for Success

function success() {
    
    //Default Layout
    
    successPrompt.style.display = "block";
    audioS.play();
}

function successF() {
    
    //From
    
    successFrom.style.display = "block";
    audioS.play();
}

function successT() {
    
    //To
    
    successTo.style.display = "block";
    audioS.play();
}

function successS() {
    
    //Subject
    
    successSubject.style.display = "block";
    audioS.play();
}

function successD() {
    
    //Dear
    
    successDear.style.display = "block";
    audioS.play();
}

function successB() {
    
    //Body
    
    successBody.style.display = "block";
    audioS.play();
}

function successL() {
    
    //Links
    
    successLink.style.display = "block";
    audioS.play();
}

function successA() {
    
    //Attachments
    
    successAttach.style.display = "block";
    atConfirm.style.display = "none";
    audioS.play();
}




function successN() {
    
    //Button for no part of the email is wrong.
    
    successNothing.style.display = "block";
    audioS.play();
}

function successExBu() {
    
    //Button Prompt for certain email
    
    successExtraButton.style.display = "block";
    buConfirm.style.display = "none";
    audioS.play();
}


function closeSPrompt() {
    
    //Closing any prompt
    
    successFrom.style.display = "none";
    successTo.style.display = "none";
    successSubject.style.display = "none";
    successDear.style.display = "none";
    successBody.style.display = "none";
    successLink.style.display = "none";
    successAttach.style.display = "none";
    successNothing.style.display = "none";
    successExtraButton.style.display = "none";
}

function failure() {
    
    //Default Layout
    
    failurePrompt.style.display= "block";
    audioF.play();
}

function failureF() {
    
    //From
    
    failureFrom.style.display= "block";
    audioF.play();
}

function failureT() {
    
    //To
    
    failureTo.style.display= "block";
    audioF.play();
}


function failureS() {
    
    //Subject
    
    failureSubject.style.display= "block";
    audioF.play();
}

function failureD() {
    
    //Dear
    
    failureDear.style.display= "block";
    audioF.play();
}

function failureB() {
    
    //Body
    
    failureBody.style.display= "block";
    audioF.play();
}

function failureL() {
    
    //Link
    
    failureLink.style.display= "block";
    audioF.play();
}

function failureA() {
    
    //Attachment
    
    failureAttach.style.display= "block";
    atConfirm.style.display = "none";
    audioF.play();
}

function failureN() {
    
    //Button for no part of the email is wrong.
    
    failureNothing.style.display= "block";
    audioF.play();
}

function failureExBu() {
    
    //Button Prompt for certain email
    
    failureExtraButton.style.display = "block";
    buConfirm.style.display = "none";
    audioF.play();
}


function closeFPrompt() {
    
    failureFrom.style.display = "none";
    failureTo.style.display = "none";
    failureSubject.style.display = "none";
    failureDear.style.display = "none";
    failureBody.style.display = "none";
    failureLink.style.display = "none";
    failureAttach.style.display = "none";
    failureNothing.style.display = "none";
    failureExtraButton.style.display = "none";
    
}

function attachConfirm() {
    
    //Open attachment prompt
    
    atConfirm.style.display = "block";

    
}

function buttonConfirm() {
    
    //Open attachment prompt
    
    buConfirm.style.display = "block";

    
}

function closePrompt() {
    atConfirm.style.display = "none";
}

function audioSuccess() {
    audioS.play();
}
/*
function randPage() {
    var randomize = Math.round(Math.random()*9);
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
    /*var epages = new Array ("Email1.html", "Email2.html", "Email3.html", "Email4.html", "Email5.html", "Email6.html", "Email7.html", "Email8.html", "Email9.html", "Email10.html");
    
    window.location = epages[randomize];
    
}*/
