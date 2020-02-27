/**
 * Have to keep this "var" to be able to use it 
 * as a global variable (possible due to Hoisting).
 */
var config = {
    type: Phaser.AUTO,
    width: 320,
    height: 240,
    zoom: 2,
    pixelArt: true,
    physics: {
        default: "arcade",
        arcade: {
            gravity: {y: 0},
            debug: true
        }
    },
    scene: [BootScene, WorldScene, BattleScene, UIScene, DialogScene],
};

let game = new Phaser.Game(config);