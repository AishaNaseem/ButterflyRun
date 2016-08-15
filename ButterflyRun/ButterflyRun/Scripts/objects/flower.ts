/// <reference path="../managers/asset.ts" />
/// <reference path="plant.ts" />
module objects {
    export class Flower extends objects.GameObject {
        private game: createjs.Container;
        private plant: objects.Plant;
        onStage: boolean = true;
        constructor(plant: objects.Plant, game: createjs.Container) {
            super("flowerpic");
            this.game = game;
            this.game.addChild(this);
        }

        update() {
            // move the flower with the plant
            if (this.onStage == true) {
                this.x = plant.image.x;
                this.y = plant.image.y;
            }
            else {
                //position flower off stage
               
                this.x = -50;
            }

            // check if plant has been reset
            
            if (plant.image.x < 0) {
                this.onStage = true;
                this.alpha = 1;
            }
        }
    }
} 