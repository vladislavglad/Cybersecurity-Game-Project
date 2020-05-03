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

    //Also creates a global reference to enemy container.
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

    initiateEnemy() {
        this.enemyMovementManager();
    }

    enemyMovementManager() {
        this.scene.time.addEvent({
            delay: 500,
            callback: this.moveEnemies,
            callbackScope: this,
            repeat: Infinity,
            startAt: 2000,
        });
    }

    moveEnemies() {
        if (this.localEnemyReferenceCreated && this.localEnemyReferenceCreated) {

            this.enemies.forEach(enemy => {
                if (enemy.active) {
                    if (this.shouldChase(enemy) && !isGamePaused)
                        this.moveEnemy(enemy); 
                    else 
                        enemy.setVelocity(0,0);
                } else
                    this.reactivateEntity(enemy);
            });

        } else {
            this.createLocalPlayerReference();
            this.createLocalEnemyReference();
        }
    }

    moveEnemy(enemy) { 
        let diffX = enemy.x - this.player.x;
        let diffY = enemy.y - this.player.y;

        //Move X
        if (diffX < 0) {
            enemy.scaleX = 1;
            enemy.setVelocityX(ENEMY_SPEED);
            enemy.flipX = false;
        } else {
            enemy.scaleX = 1;
            enemy.setVelocityX(-ENEMY_SPEED);
            enemy.flipX = true;
        }
        //Move Y
        if (diffY < 0) {
            enemy.scaleY = 1;
            enemy.setVelocityY(ENEMY_SPEED);
        } else {
            enemy.scaleY = 1;
            enemy.setVelocityY(-ENEMY_SPEED);
        }
    }

    stopAllMovement() {
        this.stopPlayerAnims();
        this.stopEnemies();
    }

    stopPlayerAnims() {
        this.player.anims.stop();
    }

    stopEnemies() {
        if (this.localEnemyReferenceCreated) {

            this.enemies.forEach(enemy => {
                if (enemy.active)
                    enemy.setVelocity(0,0);
            });

        } else
            return;
    }

    shouldChase(enemy) {
        let currentDistance = this.getDistanceToPlayer(enemy);
        //console.log(currentDistance);

        if (currentDistance < AGGRO_RADIUS) {
            //console.log("Should Chase");
            return true;
        } else 
            return false;
    }

    getDistanceToPlayer(entity) {
        //Current central coordinates: x and y.
        let playerPosition = this.player.getCenter();
        let entityPosition = entity.getCenter();

        //Get distance between the two entities.
        return entityPosition.distance(playerPosition);
    }

    reactivateEntity(entity) {
        if (this.shouldReactivate(entity)) {
            entity.active = true;
            entity.setVisible(true);
            entity.enableBody();
        } else return;
    }

    shouldReactivate(entity) {
        if (entity.defeated) return false;

        let currentDistance = this.getDistanceToPlayer(entity);

        if (currentDistance > REACTIVATION_RADIUS) {
            return true;
        } else return false;
    }

}