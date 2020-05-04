const WORLD_CONTAINER = document.getElementById("gameContainer"); 
const GAME_MODULES = document.getElementsByClassName("gameModule");

function hideContent() {
    WORLD_CONTAINER.style.display = "none";
    document.getElementById("myDiv1").style.display = "block";
}

function displayContent() {
    document.getElementById("myDiv1").style.display = "none";
    WORLD_CONTAINER.style.display = "block";
}

//API.
function switchDivs(div1, div2) {
    document.getElementById(div1).style.display = "none";
    document.getElementById(div2).style.display = "block";
}

function switchTo(divID) {
    WORLD_CONTAINER.style.display = "none";
    document.getElementById(divID).style.display = "block";
}

function switchBack(arg = null) {
    //Hide all other divs either by Id or ClassName.
    if (arg === null) {
        for (let i = 0; i< GAME_MODULES.length; i++) {
            GAME_MODULES[i].style.display = "none";
        }
    } else
        document.getElementById(`${arg}`).style.display = "none";

    WORLD_CONTAINER.style.display = "block";
    currentContentID = null;
    isGamePaused = false;
}

function switchWithCondition(completed, arg = null) {
    globalEnemyContainer[currentContentID].defeated = completed;
    switchBack(arg);

    //Take away "hearts" if failed, otherwise lower contamination level.
    if (!completed)
        heartsCounter--;
    else 
        contaminationLevel--;
}