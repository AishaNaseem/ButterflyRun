/// <reference path="../managers/asset.ts" />
var objects;
(function (objects) {
    // Plant Class
    var Plant = (function () {
        function Plant(game) {
            this.game = game;
            this.reset();
            this.dx = 5;
            game.addChild(this.image);
        }
        Plant.prototype.update = function () {
            this.image.x += this.dx;
            if (this.image.x > stage.canvas.width + this.width) {
                game.removeChildAt(1);
                this.reset();
            }
        };
        Plant.prototype.pickImage = function () {
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
        };
        Plant.prototype.reset = function () {
            // Swap the image
            this.pickImage();
            this.image.y = Math.floor(Math.random() * stage.canvas.height);
            this.image.x = -this.width;
        };
        Plant.prototype.destroy = function () {
            game.removeChildAt(1);
        };
        return Plant;
    }());
    objects.Plant = Plant;
})(objects || (objects = {}));
//# sourceMappingURL=plant.js.map