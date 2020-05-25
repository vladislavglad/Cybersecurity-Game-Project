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


 //document.getElementsByClassName('from').addEventListener("click", successF)
function successF() {
    

    //From
   var from = document.getElementsByClassName('successFrom');
   
   
    for (var i=0;i<from.length;i+=1){
        
        from[i].style.display = 'block';
        
        this.audioS.play();
        
    }
    from[i].style.display = 'none';
    
    
}



function successT() {
    
    //To
    
    var too = document.getElementsByClassName('successTo');
   
   
    for (var i=0;i<too.length;i+=1){
        
        too[i].style.display = 'block';
    }
    
    this.audioS.play();
}

function successS() {
    
    //Subject
    
    var subject = document.getElementsByClassName('successSubject');
   
   
    for (var i=0;i<subject.length;i+=1){
        
        subject[i].style.display = 'block';
    }
    
    this.audioS.play();
}

function successD() {
    
    //Dear
    
    var dear = document.getElementsByClassName('successDear');
   
   
    for (var i=0;i<dear.length;i+=1){
        
        dear[i].style.display = 'block';
    }
    
    this.audioS.play();
}

function successB() {
    
    //Body
    
    var body = document.getElementsByClassName('successBody');
   
   
    for (var i=0;i<body.length;i+=1){
        
        body[i].style.display = 'block';
    }
    
    this.audioS.play();
}

function successL() {
    
    //Links
    
    var link = document.getElementsByClassName('successLink');
   
   
    for (var i=0;i<link.length;i+=1){
        
        link[i].style.display = 'block';
    }
    
    this.audioS.play();
}

function successA() {
    
    //Attachments
    
    
    this.atConfirm.style.display = "none";
    var attach = document.getElementsByClassName('successAttach');
   
   
    for (var i=0;i<attach.length;i+=1){
        
        attach[i].style.display = 'block';
    }
    
    this.audioS.play();
    
}




function successN() {
    
    //Button for no part of the email is wrong.
    
    var nothing = document.getElementsByClassName('successNothing');
   
   
    for (var i=0;i<nothing.length;i+=1){
        
        nothing[i].style.display = 'block';
    }
    
    this.audioS.play();
}

function successExBu() {
    
    //Button Prompt for certain email
    
   
    this.buConfirm.style.display = "none";
    var exbu = document.getElementsByClassName('successExtraButton');
   
   
    for (var i=0;i<exbu.length;i+=1){
        
        exbu[i].style.display = 'block';
    }
    
    this.audioS.play();
    
}


function closeSPrompt() {
    
    //Closing any success prompt
    var from = document.getElementsByClassName('successFrom');
    var to = document.getElementsByClassName('successTo');
    var subject = document.getElementsByClassName('successSubject');
    var dear = document.getElementsByClassName('successDear');
    var body = document.getElementsByClassName('successBody');
    var link = document.getElementsByClassName('successLink');
    var nothing = document.getElementsByClassName('successNothing');
    var attach = document.getElementsByClassName('successAttach');
    var exbu = document.getElementsByClassName('successExtraButton');
   
   
    for (var i=0;i<from.length;i+=1){
        
        from[i].style.display = 'none';
    }
    for (var i=0;i<to.length;i+=1){
        
        to[i].style.display = 'none';
    }
    for (var i=0;i<subject.length;i+=1){
        
        subject[i].style.display = 'none';
    }
    for (var i=0;i<dear.length;i+=1){
        
        dear[i].style.display = 'none';
    }
    for (var i=0;i<body.length;i+=1){
        
        body[i].style.display = 'none';
    }
    for (var i=0;i<link.length;i+=1){
        
        link[i].style.display = 'none';
    }
    for (var i=0;i<nothing.length;i+=1){
        
        nothing[i].style.display = 'none';
    }
    for (var i=0;i<attach.length;i+=1){
        
        attach[i].style.display = 'none';
    }
    for (var i=0;i<exbu.length;i+=1){
        
        exbu[i].style.display = 'none';
    }
    
}



function failure() {
    
    //Default Layout
    
    this.failurePrompt.style.display= "block";
    this.audioF.play();
}

function failureF() {
    
    //From
    
var from = document.getElementsByClassName('failureFrom');
   
   
    for (var i=0;i<from.length;i+=1){
        
        from[i].style.display = 'block';
    }
    
    
    this.audioF.play();
}

function failureT() {
    
    //To
    
    var to = document.getElementsByClassName('failureTo');
   
   
    for (var i=0;i<to.length;i+=1){
        
        to[i].style.display = 'block';
    }
    
    
    this.audioF.play();
    
}


function failureS() {
    
    //Subject
    
    var subject = document.getElementsByClassName('failureSubject');
   
   
    for (var i=0;i<subject.length;i+=1){
        
        subject[i].style.display = 'block';
    }
    
    
    this.audioF.play();
}

function failureD() {
    
    //Dear
    
    var dear = document.getElementsByClassName('failureDear');
   
   
    for (var i=0;i<dear.length;i+=1){
        
        dear[i].style.display = 'block';
    }
    
    
    this.audioF.play();
}

function failureB() {
    
    //Body
    
    var body = document.getElementsByClassName('failureNody');
   
   
    for (var i=0;i<body.length;i+=1){
        
        body[i].style.display = 'block';
    }
    
    
    this.audioF.play();
}

function failureL() {
    
    //Link
    
    var link = document.getElementsByClassName('failureLink');
   
   
    for (var i=0;i<link.length;i+=1){
        
        link[i].style.display = 'block';
    }
    
    
    this.audioF.play();
}

function failureA() {
    
    //Attachment
    
    
    this.atConfirm.style.display = "none";
    var attach = document.getElementsByClassName('failureAttach');
   
   
    for (var i=0;i< attach.length;i+=1){
        
        attach[i].style.display = 'block';
    }
    
    
    this.audioF.play();
}

function failureN() {
    
    //Button for no part of the email is wrong.
    
    var nothing = document.getElementsByClassName('failureNothing');
   
   
    for (var i=0;i<nothing.length;i+=1){
        
        nothing[i].style.display = 'block';
    }
    
    
    this.audioF.play();
}

function failureExBu() {
    
    //Button Prompt for certain email
    
    
    this.buConfirm.style.display = "none";
    var exbu = document.getElementsByClassName('failureExtraButton');
   
   
    for (var i=0;i<exbu.length;i+=1){
        
        exbu[i].style.display = 'block';
    }
    
    
    this.audioF.play();
    
}


function closeFPrompt() {
    
var from = document.getElementsByClassName('failureFrom');
    var to = document.getElementsByClassName('failureTo');
    var subject = document.getElementsByClassName('failureSubject');
    var dear = document.getElementsByClassName('failureDear');
    var body = document.getElementsByClassName('failureBody');
    var link = document.getElementsByClassName('failureLink');
    var nothing = document.getElementsByClassName('failureNothing');
    var attach = document.getElementsByClassName('failureAttach');
    var exbu = document.getElementsByClassName('failureExtraButton');
   
   
    for (var i=0;i<from.length;i+=1){
        
        from[i].style.display = 'none';
        
    }
    for (var i=0;i<to.length;i+=1){
        
        to[i].style.display = 'none';
    }
    for (var i=0;i<subject.length;i+=1){
        
        subject[i].style.display = 'none';
    }
    for (var i=0;i<dear.length;i+=1){
        
        dear[i].style.display = 'none';
    }
    for (var i=0;i<body.length;i+=1){
        
        body[i].style.display = 'none';
    }
    for (var i=0;i<link.length;i+=1){
        
        link[i].style.display = 'none';
    }
    for (var i=0;i<nothing.length;i+=1){
        
        nothing[i].style.display = 'none';
    }
    for (var i=0;i<attach.length;i+=1){
        
        attach[i].style.display = 'none';
    }
    for (var i=0;i<exbu.length;i+=1){
        
        exbu[i].style.display = 'none';
    }
    
}

function attachConfirm() {
    
    //Open attachment prompt
    
    var atConf = document.getElementsByClassName('atConfirm');
   
   
    for (var i=0;i<atConf.length;i+=1){
        
        atConf[i].style.display = 'block';
    }
    
    
   

    
}

function buttonConfirm() {
    
    //Open attachment prompt
    
    var buConf = document.getElementsByClassName('buConfirm');
   
   
    for (var i=0;i<buConf.length;i+=1){
        
        buConf[i].style.display = 'block';
    }
    
    

    
}

function closePrompt() {
    var attach = document.getElementsByClassName('failureAttach');
    var exbu = document.getElementsByClassName('failureExtraButton');
        for (var i=0;i<attach.length;i+=1){
        
        attach[i].style.display = 'none';
    }
    for (var i=0;i<exbu.length;i+=1){
        
        exbu[i].style.display = 'none';
    }
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
