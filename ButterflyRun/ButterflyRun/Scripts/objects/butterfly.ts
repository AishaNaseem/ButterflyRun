/// <reference path="../managers/asset.ts" />
module objects {
    // Butterfly Class
    export class Butterfly extends objects.GameObject {
        private game: createjs.Container;
        engineSound: createjs.SoundInstance;
        onStage: boolean = true;
        constructor(game: createjs.Container) {
            super("butterfly");
            this.game = game;
            
            
            this.x = 400;
            game.addChild(this);
            this.engineSound = createjs.Sound.play('butterfly', createjs.Sound.INTERRUPT_NONE, 0, 0, -1, 0.1, 0);
        }

        update() {
            // Change butterfly position with some easing on update
            
            this.y += (stage.mouseY - this.y) * 0.3;
        }

        destroy() {
            this.engineSound.stop();
            game.removeChildAt(constants.PLANE_LEVEL);
        }
    }
} 