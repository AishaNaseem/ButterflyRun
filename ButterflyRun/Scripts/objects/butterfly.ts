/*Developed by Aisha Naseem 
by using Mail Pilot Template provided by Professor

*/
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
            
            //this.y = 430;
            this.x = 400;
            game.addChild(this);
            this.engineSound = createjs.Sound.play('butterfly', createjs.Sound.INTERRUPT_NONE, 0, 0, -1, 0.1, 0);
        }

        update() {
            // Change plane position with some easing on update
            //this.x += (stage.mouseX - this.x) * 0.3;
            this.y += (stage.mouseY - this.y) * 0.3;
        }

        destroy() {
            this.engineSound.stop();
            game.removeChildAt(constants.PLANE_LEVEL);
        }
    }
} 