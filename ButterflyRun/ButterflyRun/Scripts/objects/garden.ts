/// <reference path="../managers/asset.ts" />
module objects {
    // Ocean Class
    export class Garden extends createjs.Bitmap {
        game: createjs.Container;
        width: number;
        height: number;
        //dy: number;
        dx: number;
        constructor(game: createjs.Container) {
            this.game = game;
            super(managers.Assets.loader.getResult("garden"));
            this.width = this.getBounds().width;
            this.height = this.getBounds().height;
            this.reset();

            
            this.dx = 0.5;

            game.addChild(this);
        }

        update() {
            
            this.x += this.dx;
            if (this.x >= 0) {
                this.reset();
            }
        }

        reset() {
            
            this.x = -700;
        }

        destroy() {
            game.removeChild(this);
        }
    }

}