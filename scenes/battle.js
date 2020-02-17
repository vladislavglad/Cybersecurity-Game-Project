class BattleScene extends Phaser.Scene {
    constructor() {
        super("BattleScene");
        this.heroes = [];
        this.enemies = [];
        this.units = []; //both heroes and enemies.
    }

    create() {
        //set a background color.
        this.cameras.main.setBackgroundColor('rgba(0, 200, 0, 0.5)');

        //instanciate player chars; hardcoded.
        let warrior = new Player(this, 250, 50, "player", 1, "Warrior", 100, 20);
        this.add.existing(warrior);
        this.heroes.push(warrior);

        let mage = new Player(this, 250, 100, "player", 4, "Mage", 80, 8);
        this.add.existing(mage);
        this.heroes.push(mage);

        let dragonblue = new Enemy(this, 50, 50, "dragonblue", null, "Dragon", 50, 3);
        this.add.existing(dragonblue);
        this.enemies.push(dragonblue);

        let dragonorange = new Enemy(this, 50, 100, "dragonorrange", null, "Dragon2", 50, 3);
        this.add.existing(dragonorange);
        this.enemies.push(dragonorange);

        //run BattleScene and UIScene in parallel.
        this.scene.launch("UIScene");     
        
        //group all units in one collection.
        this.units = this.heroes.concat(this.enemies); //first turn: two heroes, next two enemies.

        this.index = -1; //who's turn is this?
    }

    nextTurn() {

        //initially starts at zero.
        this.index++;

        //if out of bounds -> start again.
        if (this.index >= this.units.length) {
            this.index = 0;
        }

        //check if unit at current index "exists."
        if (this.units[this.index]) {

            //is it player character?
            if (this.units[this.index] instanceof Player) {
                //send a custom event. We listen for it in the UI scene.
                this.events.emit("PlayerSelect", this.index); 

            } else { //logic for enemy
                let rand = Math.floor(Math.random() * this.heroes.length);

                this.units[this.index].attack(this.heroes[rand]);

                this.time.addEvent({
                    delay: 3000,
                    callback: this.nextTurn,
                    callbackScope: this
                });

            }
        }
    }

    receivePlayerSelection(action, target) {
        if (action === "attack") {
            this.units[this.index].attack(this.enemies[target]);
        }
        this.time.addEvent({
            delay: 3000,
            callback: this.nextTurn,
            callbackScope: this
        });
    }
}