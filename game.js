var config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    scene: [BootScene, WorldScene]
};

var game = new Phaser.Game(config);
