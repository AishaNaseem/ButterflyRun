
/*Developed by Aisha Naseem 
by using Mail Pilot Template provided by Professor

*/
/// <reference path="../managers/asset.ts" />
module objects {
    // Plant Class
    export class Plant {
        image: createjs.Sprite;
        game: createjs.Container;
        height: number;
        width: number;
        // dy: number;
        dx: number;
        constructor(game: createjs.Container) {
            this.game = game;

            this.reset();

            //this.dy = 5;
            this.dx = 5;
            game.addChild(this.image);
        }

        update() {
            //this.image.y += this.dy;
            this.image.x += this.dx;
            //if (this.image.y > stage.canvas.height + this.height) {
            if (this.image.x > stage.canvas.width + this.width) {
                game.removeChildAt(1);
                this.reset();
            }
        }

        private pickImage() {
            switch (Math.floor(Math.random() * 2 + 1)) {
                case 1:
                    this.image = new createjs.Sprite(managers.Assets.atlas, "plant1");
                    break;
                case 2:
                    this.image = new createjs.Sprite(managers.Assets.atlas, "plant2");
                    break;
            }
            this.width = this.image.getBounds().width;
            this.height = this.image.getBounds().height;
            this.image.regX = this.width * 0.5;
            this.image.regY = this.height * 0.5;
            game.addChildAt(this.image, 1);
        }

        reset() {
            // Swap the image
            this.pickImage();
            
            //this.image.x = Math.floor(Math.random() * stage.canvas.width);
            //this.image.y = -this.height;
            this.image.y = Math.floor(Math.random() * stage.canvas.height);
            this.image.x = -this.width;
        }

        destroy() {
            game.removeChildAt(1);
        }
    }

}