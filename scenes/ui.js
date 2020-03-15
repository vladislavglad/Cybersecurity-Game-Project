class UIScene extends Phaser.Scene {
    constructor() {
        super("UIScene");
    }

    create() {
        this.graphics = this.add.graphics();

        this.graphics.lineStyle(1, 0xffffff);
        this.graphics.fillStyle(0x031f4c, 1);

        //Draw rectangles and color them.
        this.graphics.strokeRect(2, 150, 90, 100);
        this.graphics.fillRect(2, 150, 90, 100);

        this.graphics.strokeRect(95, 150, 90, 100);
        this.graphics.fillRect(95, 150, 90, 100);
        
        this.graphics.strokeRect(188, 150, 130, 100);
        this.graphics.fillRect(188, 150, 130, 100);

        //container for all containers -> our custom menus.
        this.menus = this.add.container();

        //instanciate our cutom menus.
        this.heroesMenu = new HeroesMenu(this, 195, 153);
        this.actionsMenu = new ActionsMenu(this, 100, 153);
        this.enemiesMenu = new EnemiesMenu(this, 8, 153);

        this.menus.add(this.heroesMenu);
        this.menus.add(this.actionsMenu);
        this.menus.add(this.enemiesMenu);

        //current menu. 
        this.currentMenu = this.actionsMenu;

        //IMPORTANT: access the specified scene.
        this.battleScene = this.scene.get("BattleScene"); //Essential line to communicate between Scenes.

        //alocate menu items within the containers.
        let heroes = this.battleScene.heroes;
        this.heroesMenu.remap(heroes);

        let enemies = this.battleScene.enemies;
        this.enemiesMenu.remap(enemies);

        //following lines listen to various events (from various Scenes).
        this.input.keyboard.on("keydown", this.onKeyInput, this); //listens from within this scene -> UIscene.

        //listen for BattleScene's custom event emitter from withing "this" scene -> UIScene. 
        this.battleScene.events.on("PlayerSelect", this.onPlayerSelect, this); //possiblity to listen accros different Scenes.

        this.events.on("SelectEnemies", this.onSelectEnemies, this);

        this.events.on("Enemy", this.onEnemy, this);

        //IMPORTANT: this is where turns start -> game loop begins.
        this.battleScene.nextTurn();
    }

    onKeyInput(event) {
        console.log(event.code);
        
        //first, check if some menue is "active"
        if (this.currentMenu) {

            if (event.code === "ArrowUp") {
                this.currentMenu.moveSelectionUP();
            } else if (event.code === "ArrowDown") {
                this.currentMenu.moveSelectionDown();
            } else if (event.code === "ArrowRight" || event.code === "Shift") {

            } else if (event.code === "Space") {
                this.currentMenu.confirm(); //confirm method emmits an event that UIScene listens to.
            } else if (event.code === "Digit1") {

                //works, but when switching to WorldScene character keeps moving.
                this.battleScene.scene.sleep("UIScene");
                this.battleScene.scene.switch("WorldScene");
            }
        }
    }

    onPlayerSelect(id) {
        this.heroesMenu.select(id); //ID is passed from the BattleScene's nextTurn() function.
        this.actionsMenu.select(0);
        this.currentMenu = this.actionsMenu; //currently active menu, waiting for .confirm() function. 
    }

    onSelectEnemies() {
        this.enemiesMenu.select(0); //highlight first available enemy unit.
        this.currentMenu = this.enemiesMenu; //currently active menu, waiting for .confirm() function.
    }

    onEnemy(index) {
        this.heroesMenu.deselect();
        this.actionsMenu.deselect();
        this.enemiesMenu.deselect();
        this.currentMenu = null; //deactivate all the menues and set current to null.
        this.battleScene.receivePlayerSelection("attack", index); //index of an enemy to attack.
    }
}