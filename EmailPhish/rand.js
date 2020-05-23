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
    /*var epages = new Array ("Email1.html", "Email2.html", "Email3.html", "Email4.html", "Email5.html", "Email6.html", "Email7.html", "Email8.html", "Email9.html", "Email10.html");*/
    
    window.location = epages[randomize];
    
}