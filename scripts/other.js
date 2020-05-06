document.getElementById("instruction0").innerHTML = 
'<div style="font-size: 50px;"><string>Teaching part goes here!</string></div><br>' +
'<h1>Override this! Place your own div with id="instruction0" (or manipulate this one) ' +
'so your own teaching module is invoked.</h1>' +
'<button style="font-size: xx-large;" onclick="switchBack()">OK</button>'

document.getElementById("module0").innerHTML = 
'<div style="font-size: 50px;">Evaluation part goes here!</div><br>' +
'<h1>Override this! Place your own div with id="module0" (or manipulate this one) ' +
'so your own evaluation module is invoked.</h1>' +
'<span>' +
    '<button style="font-size: xx-large;" onclick="switchWithCondition(true)">Correct</button>' +
    '<button style="font-size: xx-large;" onclick="switchWithCondition(false)">Wrong</button>' +
'</span>';

document.getElementById("module1").innerHTML = 
'<div style="font-size: 50px;">Evaluation part goes here!</div><br>' +
'<h1>Override this! Place your own div with id="module1" so your own evaluation module is invoked.</h1>' +
'<span>' +
    '<button style="font-size: xx-large;" onclick="switchWithCondition(true)">Correct</button>' +
    '<button style="font-size: xx-large;" onclick="switchWithCondition(false)">Wrong</button>' +
'</span>';
