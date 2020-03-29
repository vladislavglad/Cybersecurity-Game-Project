class GameMap extends Phaser.Scene {
    constructor() {
        super("GameMap");
    }

    create() {
        this.worldMap = this.add.image(config.width/2, config.height/2 + 10, "game-map");
        //this.worldMap.setTintFill(0xff4d4d, 0xff6666, 0xff8080, 0xff9999);

        //Different "contamination" levels (of cyber-security). 
        this.levels = [0xffe6e6, 0xff9999, 0xff8080, 0xff6666, 0xff4d4d, 0xff3333];

        //Begin with "contamination" level 5.
        this.worldMap.setTintFill(this.levels[5]);

        //Event to "change" world states.
        this.time.addEvent({
            startAt: 1,
            delay: 1200,
            callback: this.changeWorldState,
            loop: true,
            callbackScope:this,
        });
    }

    changeWorldState() {
        let rands = [];
        for (let i = 0; i < 4; i++) {
            rands[i] = Phaser.Math.Between(0, this.levels.length-1);
        }
        //console.log(rands);
        this.worldMap.setTintFill(this.levels[rands[0]], this.levels[rands[1]], this.levels[rands[2]], this.levels[rands[3]]);
    }
}