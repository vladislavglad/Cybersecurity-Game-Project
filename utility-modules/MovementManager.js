const AGGRO_RADIUS = 120;
const REACTIVATION_RADIUS = 50;
const ENEMY_SPEED = 40;

class MovementManager {
    constructor(scene) {
        this.scene = scene;
        this.keyboard = this.scene.input.keyboard;

        this.localPlayerReferenceCreated = false;
        this.localEnemyReferenceCreated = false;
        this.createLocalPlayerReference();
        this.createLocalEnemyReference();
    }

    createLocalPlayerReference() {
        if (this.scene.player != null) {
            this.player = this.scene.player;
            this.cursors = this.createInputKeys(useDefaultKeys);
            this.localPlayerReferenceCreated = true; 
        }
    }

    //Also creates a global reference.
    createLocalEnemyReference() {
        if (this.scene.enemies != null) {
            this.enemies = this.scene.enemies;
            this.localEnemyReferenceCreated = true;
            globalEnemyContainer = this.enemies;
        }
    }

    createInputKeys(useDefaultKeys) {
        if (useDefaultKeys === true) 
            return this.keyboard.createCursorKeys();
        else {
            return this.keyboard.addKeys({
                up: Phaser.Input.Keyboard.KeyCodes.W,
                down: Phaser.Input.Keyboard.KeyCodes.S,
                left: Phaser.Input.Keyboard.KeyCodes.A,
                right: Phaser.Input.Keyboard.KeyCodes.D,
                space: Phaser.Input.Keyboard.KeyCodes.SPACE
            });
        }
    }

    resetCursors() {
        this.cursors.left.reset();
        this.cursors.right.reset();
        this.cursors.up.reset();
        this.cursors.down.reset();
    }

    setCursors(cursors) {
        this.resetCursors();
        this.cursors = cursors;
    }

    switchCursors() {
        this.setCursors(this.createInputKeys(useDefaultKeys));
    }
    
    playerMovementManager() {
        if (this.localPlayerReferenceCreated) {
            this.player.body.setVelocity(0);

            //First, check if game is paused.
            if (!isGamePaused) {
                //horizonatal movements.
                if (this.cursors.left.isDown) {
                    this.player.body.setVelocityX(-80);
                    this.facingDirection = 2;
                } else if (this.cursors.right.isDown) {
                    this.player.body.setVelocityX(80);
                    this.facingDirection = 3;
                }

                //vertical movements.
                if (this.cursors.up.isDown) {
                    this.player.body.setVelocityY(-80);
                    this.facingDirection = 1;
                } else if (this.cursors.down.isDown) {
                    this.player.body.setVelocityY(80);
                    this.facingDirection = 0;
                }

                //animations for movements.
                if (this.cursors.left.isDown) {
                    this.player.flipX = false;
                    this.player.anims.play('left', true);
                } else if (this.cursors.right.isDown) {
                    this.player.flipX = true;
                    this.player.anims.play('left', true);
                } else if (this.cursors.up.isDown) {
                    this.player.anims.play('up', true);
                } else if (this.cursors.down.isDown) {
                    this.player.anims.play('down', true);
                } else {
                    //stops any animation from playing.
                    this.player.anims.stop();
                }
            }

        } else 
            this.createLocalPlayerReference();
    }

}