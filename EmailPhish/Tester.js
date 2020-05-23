
var tester = '<!DOCTYPE html>'+
''+
'<html>'+
'    '+
'    <head>'+
'        <meta charset="utf-8">'+
'        '+
'        <title>Phishing Exploration Mode</title>'+
'        <meta name="description" content="Gameplay">'+
'        <link rel="stylesheet" href="EmailStyle.css">'+
'          '+
'    </head>'+
'    <body>'+
''+
'    <div id="Success Part">    '+
'        <!--Success Prompt-->'+
'        <div id="successPrompt" class="successPrompt">'+
'            <div class="successContent">'+
'            '+
'                <p>Success!</p>'+
'            '+
'        '+
'                '+
'                '+
'        <!--Success Close-->'+
'                <button onclick="closeSPrompt()">Continue</button>'+
'         '+
'            </div>'+
'        </div>'+
'        '+
'         <div id="successFrom" class="successFrom">'+
'            <div class="successContent">'+
'                '+
'                <p>When suspecting an email to be a phishing attempt, the From section should be one of the first places to look. Check for any misspelling or changes to the address that may be off from where the original sender is, such as the difference between .com and .net. '+
'                <br><br>'+
'                In a <b>spear phishing</b> attempt, the sender may pose as someone of a higher authority in your organization, such as a boss or manager. This is known as <b>spoofing</b>. In these cases, it may be more difficult to determine whether or not the message was from them unless you ask in person.'+
'                <br><br>'+
'                As the From section can be spoofed, it should not be the only place to look to see if it is a phishing attempt. Therefore, other parts of the email should be checked before reaching a conclusion. </p>'+
''+
'        <!--Success Close-->'+
'                <button onclick="closeSPrompt()">Continue</button>'+
'         '+
'            </div>'+
'        </div>'+
'        '+
'        <div id="successTo" class="successTo">'+
'            <div class="successContent">'+
'            '+
'                <p>At the moment, there is no way to be sure whether the "To" section of an email can be used for phishing, as it is directed towards a specific email. When attempting to check whether an email is a phishing attempt, do not look at the To section for suspicious items. </p>'+
'            '+
'        '+
'                '+
'                '+
'        <!--Success Close-->'+
'                <button onclick="closeSPrompt()">Continue</button>'+
'         '+
'            </div>'+
'        </div>'+
'        '+
'        <div id="successSubject" class="successSubject">'+
'            <div class="successContent">'+
'            '+
'        '+
'                <p>There are many telltale signs that can show that an email may be a phishing attempt based on the subject. For instance, a very threating or urgent sounding subject would be a big indicator that the email is a phishing email. This is meant to prey on a reader\'s fear and compel them to impulsively fix whatever situation the subject may think they are in. '+
'                '+
'                    <br><br>'+
'                A subject that seems promising or too good to be true may also be a sign that the email may be a phishing attempt. Things such as an inheritance or a very tempting may be signs of phishing. This, however, would have to be checked with other parts of the email before concluding that it is a phishing attempt.'+
'                </p>'+
'            '+
'        '+
'                '+
'                '+
'        <!--Success Close-->'+
'                <button onclick="closeSPrompt()">Continue</button>'+
'         '+
'            </div>'+
'        </div>'+
'        '+
'        <div id="successDear" class="successDear">'+
'            <div class="successContent">'+
'            '+
'           '+
'                <p>The Dear section can lead to knowing whether or not an email is a phishing attempt, but it is best to use other parts of the email on top of this to ensure it is a phishing attempt. A vague greeting such as "Dear Customer" may be a big indicator of phishing, especially if it came from a big company such as a bank. Most of these big companies would address the reader by their first and last name or by their username.'+
'                '+
'                <br><br>'+
'                There are other times where a company may not even give a "dear" and just give the main point of the email immediately. As usual, check other parts of the email in these cases to make sure it is not a phishing attempt.</p>'+
'            '+
'        '+
'                '+
'                '+
'        <!--Success Close-->'+
'                <button onclick="closeSPrompt()">Continue</button>'+
'         '+
'            </div>'+
'        </div>'+
'        '+
'        <div id="successBody" class="successBody">'+
'            <div class="successContent">'+
' '+
'                <p>The Body of the email can be one of the biggest indicators of whether or not an email is a phishing attempt. Some of the biggest indicators are misspelling in the paragraphs of the email or offers that may be too good to be true. Compare with previous emails from that company in order to ensure that it is up to their standards. '+
'                '+
'                <br><br>'+
'                '+
'                When used in a spear phishing attempt, make sure that the same sender sends the same style of email as the current email. If for any reason there seems to be some difference in the way the sender speaks or formats this email, try to directly contact them through other means to ensure that they did send the email</p>'+
'            '+
'        '+
'                '+
'                '+
'        <!--Success Close-->'+
'                <button onclick="closeSPrompt()">Continue</button>'+
'         '+
'            </div>'+
'        </div>'+
'        '+
'        <div id="successLink" class="successLink">'+
'            <div class="successContent">'+
'                <p>When determining whether or not an email is a phishing attempt, be very, very careful of links. There are a few ways this can be used as a phishing attack. One way is to make the hyperlink text appear as a trusted source, like www.amazon.com. In reality, where it leads to may be a completely different site made for stealing information. Another way it can be used is by having personal information, such social security or debit/credit card information, on a form in their site. Companies have made a big point that they will not ask for personal information through the mail. '+
'                '+
'                <br><br>'+
'                One way to ensure that it is not a phishing attempt is to hover over the link and wait until the true address appears over the hyperlink. If it is not the same as the address of a trusted site, do not click on the link. In case the link was already clicked on, check the URL and the type of information requested from the user. If it is too personal, such as address or social security, it may be a phishing attempt. Even asking for a password reset that you did not request yourself may be a sign of a phishing attempt. </p>'+
'            '+
'                '+
'            '+
'        '+
'                '+
'                '+
'        <!--Success Close-->'+
'                <button onclick="closeSPrompt()">Continue</button>'+
'         '+
'            </div>'+
'        </div>'+
'        '+
'                <div id="successAttach" class="successAttach">'+
'            <div class="successContent">'+
'            '+
'                <p>Always, always, always ensure that you are recieving an attachment from a trusted source BEFORE opening it. Major companies will rarely, if ever, send an attachment through email. A vast majority will send  physical documents through the mail, especially if it is something to fill out. '+
'                '+
'                <br><br>'+
'                '+
'                Attachments are very easy ways for phishers or hackers to get information from various sources. When checking attachments, look very closely at the extension of the attachments as opposed to the name. If it has a .exe, do not open it as it may execute a program that will lead to malware on the computer. If it is a .zip or .doc or any other extension, please ensure that it is from a source you trust and the email has no signs of phishing. </p>'+
'            '+
'        '+
'                '+
'                '+
'        <!--Success Close-->'+
'                <button onclick="closeSPrompt()">Continue</button>'+
'         '+
'            </div>'+
'        </div>'+
'        '+
'                <div id="successNothing" class="successNothing">'+
'            <div class="successContent">'+
'            '+
'                '+
'                <p>Not every email is a phishing email. Sometimes, there may be some false flags about the email that would be misinterpreted by the reader. </p>'+
'            '+
'        '+
'                '+
'                '+
'        <!--Success Close-->'+
'                <button onclick="closeSPrompt()">Continue</button>'+
'         '+
'            </div>'+
'        </div>'+
'        '+
''+
'        '+
'</div>'+
'     '+
'        '+
'        '+
'        '+
'        <!--Main-->'+
'            <div class="main">'+
'                '+
'                <h2>Click on any part of the email to see how those parts may be used for phishing.</h2>'+
'            '+
'                <div class="emailtop">'+
'                    <div id="from"  onclick="successF()" >'+
'                    <pre>From: tutorial.net</pre>'+
'                    </div>'+
'                    '+
'                    <div id="to" onclick="successT()">'+
'                    <pre>To: Protag47@email.com</pre>'+
'                    </div>'+
'                    '+
'                    <div id="subject" onclick = "successS()">'+
'                    <pre>Subject: Tutorial for Phishing!</pre>'+
'                    </div>'+
'                </div>'+
'                '+
'                <div class="emailAttach">'+
'                <button id="emailAt" class="emailAt" onclick="successA()"> Tutorial.docs</button>'+
'                </div>'+
'                <div class="emailbody" id="emailbody">'+
'                    <pre class="dear" id="dear" onclick = "successD()">Dear Protagonist,</pre>'+
'                    '+
'<pre class="topbody" id="topbody" onclick = "successB()">Please click on any part of this sample email to see how each part can be used in a phishing attack.</pre>'+
' <div class="links" id="links" onclick = "successL()">'+
'                    '+
'<p class="linksH">Such as this hyperlink</p>'+
'                    '+
' <span class="hoverLink" id="hoverLink">Hovering over a link can reveal where it is going</span> '+
'                    </div>                       '+
'                  '+
'                    '+
'<pre class="midbody" id="midbody" onclick = "successB()">Some tips will also be given to help differentiate between phishing emails and regular emails. </pre>'+
'                      '+
'<pre class="bottombody" id="bottombody" onclick = "successB()">The Anti-Phish Department'+
'Copyright 2020</pre>'+
''+
'            '+
'       '+
'        '+
'                </div>'+
'                <br>'+
'                <br>'+
''+
'                '+
'                '+
'            </div>'+
'        <div id="NothingButton" class="NothingButton" >'+
'            <button onclick="successN()">Click here whenever there is nothing suspicious about an email</button>'+
'            <br>'+
'            '+
'            <button id="NothingButton" class="NothingButton" onclick="randPage()">'+
'                <p>Click here to test your knowledge</p></button>'+
'        </div>'+
'    '+
'    <div id="audiofiles">'+
'    <audio id ="audioSuccess" src="Success.wav"></audio>'+
'    <audio id ="audioFailure" src="Fail.wav"></audio>'+
'    </div>'+
'        '+
'        '+
'<script src="Emailscripts.js"></script>'+
'<script src="game.js"></script>'+
'    </body>'+
''+
'</html>';
	
