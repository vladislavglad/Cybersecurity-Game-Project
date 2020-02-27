class BattleScene extends Phaser.Scene {
    constructor() {
        super("BattleScene");
        this.heroes = [];
        this.enemies = [];
        this.units = []; //both heroes and enemies.
    }

    create() {
        //set a background color.
        this.add.image(0,0, "space").setOrigin(0,0);

        //instanciate player chars; hardcoded.
        let char1 = new Player(this, 250, 50, "player", 0, "Char1", 100, 20);
        this.add.existing(char1);
        this.heroes.push(char1);

        let char2 = new Player(this, 250, 100, "npc", 7, "Char2", 80, 8);
        this.add.existing(char2);
        this.heroes.push(char2);

        let baddie1 = new Enemy(this, 50, 50, "baddie", 3, "Baddie1", 50, 3);
        this.add.existing(baddie1);
        this.enemies.push(baddie1);

        let baddie2 = new Enemy(this, 50, 100, "baddie", 3, "Baddie2", 50, 3);
        this.add.existing(baddie2);
        this.enemies.push(baddie2);

        //run BattleScene and UIScene in parallel/concurrently.
        this.scene.run("UIScene");     //lunch or run?
        
        //group all units in one collection.
        this.units = this.heroes.concat(this.enemies); //first turn: two heroes, next two enemies.

        this.index = -1; //who's turn is this? (start from -1 since we first increment the index)

        let timeEvent = this.time.addEvent({delay: 2000, callback: this.exitScene, callbackScope: this});
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

    exitScene() {
        this.scene.sleep("UIScene");
        this.scene.switch("WorldScene");
    }
}