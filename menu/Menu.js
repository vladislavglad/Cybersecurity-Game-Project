class MenuItem extends Phaser.GameObjects.Text {
    constructor(scene, x, y, text) {
        super(scene, x, y, text, {
            color: "#ffffff",
            align: "left",
            fontSize: 15
        });
    }

    select() {
        this.setColor("#f8ff38");
    }

    deselect() {
        this.setColor("#ffffff");
    }
}

class Menu extends Phaser.GameObjects.Container {
    constructor(scene, x, y, heroes) {
        super(scene, x, y);

        //additional field (class) vars.
        this.menuItems = [];
        this.menuItemIndex = 0;
        //this.heroes = heroes;
        this.x = x;
        this.y = y;
    }

    addMenuItem(text) {
        //the scene parameter we got from the constructor when initializing an instance of Menu.
        //smart Y placement within our container based on array length.
        let menuItem = new MenuItem(this.scene, 0, this.menuItems.length * 20, text);
        this.menuItems.push(menuItem);

        this.add(menuItem); //add to the container that has been created in the Scene at certain X & Y.
    }

    moveSelectionUP() {
        //deselect a currently highlighted menu item
        this.menuItems[this.menuItemIndex].deselect();
        
        //move index/pointer.
        this.menuItemIndex--;

        //check bounds.
        if (this.menuItemIndex < 0) {
            this.menuItemIndex = this.menuItems.length - 1;
        }

        //"select"/highlight new menu item. 
        this.menuItems[this.menuItemIndex].select();
    }

    moveSelectionDown() {
        this.menuItems[this.menuItemIndex].deselect();
        this.menuItemIndex++;
        if (this.menuItemIndex >= this.menuItems.length) {
            this.menuItemIndex = 0;
        }
        this.menuItems[this.menuItemIndex].select();
    }

    select(index) {
        //if no index was provided: set it to 0.
        if (!index) {
            index = 0;
        }
        this.menuItems[this.menuItemIndex].deselect();
        this.menuItemIndex = index;
        this.menuItems[this.menuItemIndex].select();
    }

    deselect() {
        this.menuItems[this.menuItemIndex].deselect();
        this.menuItemIndex = 0;
    }

    clear() {
        for (let i = 0; i < this.menuItems.length; i++) {
            this.menuItems[i].destroy();
        }
        this.menuItems = [];
        this.menuItemIndex = 0;
    }

    remap(arr) {
        this.clear();
        
        //repopulate this/current container
        for (let i = 0; i < arr.length; i++) {
            let elm = arr[i];
            this.addMenuItem(elm.type);
        }
    }

    //TO BE overriden in inheriting classes.
    confirm() {
        //logic when item is selected.
    }
}

class HeroesMenu extends Menu {
    constructor(scene, x, y) {
        super(scene, x, y);
    }
}

class ActionsMenu extends Menu {
    constructor(scene, x, y) {
        super(scene, x, y);
        this.addMenuItem("Attack");

        //test action: does nothing.
        this.addMenuItem("Pass");

        //more actions to come in the future.
    }

    confirm() {
        this.scene.events.emit("SelectEnemies"); //UIScene is listening
    }
}

class EnemiesMenu extends Menu {
    constructor(scene, x, y) {
        super(scene, x, y);
    }

    confirm() {
        //select an enemy to attack.
        this.scene.events.emit("Enemy", this.menuItemIndex); //UIScene is listening.
    }
}

class DialogMenu extends Menu {
    constructor(scene, x, y) {
        super(scene, x, y);
        // this.addMenuItem("Bla-Blaa-Blad!");
        // this.addMenuItem("Something else!");
    }

    remap(arr) {
        this.clear();
        
        //repopulate this/current container
        for (let i = 0; i < arr.length; i++) {
            let elm = arr[i];
            this.addMenuItem(elm);
        }
    }
}