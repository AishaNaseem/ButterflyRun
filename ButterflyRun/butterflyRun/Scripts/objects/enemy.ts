/// <reference path="../managers/asset.ts" />
module objects {
    export class Enemy extends objects.GameObject {
        game: createjs.Container;
        dx: number;
        engineSound: createjs.SoundInstance;
        private enginePlay: boolean;
        constructor(game: createjs.Container) {
            super("enemy");
            this.game = game;
            this.dx = 7;
            this.enginePlay = false;
            this.engineSound = createjs.Sound.play("enemyEngine");
            this.reset();
            this.game.addChild(this);
        }

        update() {
            this.x += this.dx;
            if (this.x > -stage.canvas.width) {
                this.enginePlay = true;
            }

            if (this.x > stage.canvas.width * 2) {
                this.reset();
            }
            this.checkEngine();
        }

        reset() {
            this.engineSound.stop();
            this.enginePlay = false;
            // Reset the island image location
            this.y = Math.floor(Math.random() * stage.canvas.height);
            this.x = -stage.canvas.width * 5;
        }

        checkEngine() {
            if ((this.enginePlay == true) && (this.engineSound.playState != "playSucceeded")) {
                this.engineSound.play();
            }
            else if (this.enginePlay == false) {
                this.engineSound.stop();
            }

        }

    }
} 