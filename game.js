/**
 * Have to keep this as a "var" to be able to use it 
 * as a global variable (possible due to Hoisting).
 */
var config = {
    //place the game's canvas in HTML tag such as <div> with id.
    parent: "gameContainer",
    type: Phaser.AUTO,
    width: 320,
    height: 240,
    zoom: 2.5,
    pixelArt: true,
    physics: {
        default: "arcade",
        arcade: {
            gravity: {y: 0},
            debug: true
        }
    },
    dom: {
        createContainer: true
    },
    //Array of all Scenes that Phaser sees and will use.
    scene: [InitialBoot, TitleScreen, PreloadAssets, WorldScene, PlayerUI, PauseScene, GameMap, BattleScene, BattleUI, DialogScene, BookInteraction, TempWorld]
};

/**
 * You can keep all your global "var"iables in this file.
 * For example: var isGameOver = false;
 * The above will be seen across all JS files.
 */
let isFinishedLoading = false;
let isGamePaused = false;
let isMusicPlaying = false;
let isMapOpen = false;

let game = new Phaser.Game(config);