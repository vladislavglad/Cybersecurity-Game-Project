class Unit extends Phaser.GameObjects.Sprite {
    constructor(scene, x, y, texture, frame, type, hp, damage) {
        //initialize super class with given args.
        super(scene, x, y, texture, frame);

        //additional filds that we will use.
        this.type = type;
        this.maxHp = hp; 
        this.hp = hp; //current hp.
        this.damage = damage;
    }

    attack(target) {
        target.takeDamage(this.damage);
    }

    takeDamage(damage) {
        this.hp -= damage;
    }
}

class Player extends Unit {
    constructor(scene, x, y, texture, frame, type, hp, damage) {
        super(scene, x, y, texture, frame, type, hp, damage);

        //flip sprite and scale it x2.
        this.flipX = true;
        this.setScale(2);
    }
}

class Enemy extends Unit {
    constructor(scene, x, y, texture, frame, type, hp, damage) {
        super(scene, x, y, texture, frame, type, hp, damage);
    }
}