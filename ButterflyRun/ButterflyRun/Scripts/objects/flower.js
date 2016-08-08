var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
/// <reference path="../managers/asset.ts" />
/// <reference path="plant.ts" />
var objects;
(function (objects) {
    var Flower = (function (_super) {
        __extends(Flower, _super);
        function Flower(plant, game) {
            _super.call(this, "flowerpic");
            this.onStage = true;
            this.game = game;
            this.game.addChild(this);
        }
        Flower.prototype.update = function () {
            // move the flower with the plant
            if (this.onStage == true) {
                this.x = plant.image.x;
                this.y = plant.image.y;
            }
            else {
                //position flower off stage
                //this.y = -50;
                this.x = -50;
            }
            // check if plant has been reset
            // if (island.image.y < 0) {
            if (plant.image.x < 0) {
                this.onStage = true;
                this.alpha = 1;
            }
        };
        return Flower;
    })(objects.GameObject);
    objects.Flower = Flower;
})(objects || (objects = {}));
