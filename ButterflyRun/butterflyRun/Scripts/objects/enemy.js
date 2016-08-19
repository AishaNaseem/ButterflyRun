var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
/// <reference path="../managers/asset.ts" />
var objects;
(function (objects) {
    var Enemy = (function (_super) {
        __extends(Enemy, _super);
        function Enemy(game) {
            _super.call(this, "enemy");
            this.game = game;
            this.dx = 7;
            this.enginePlay = false;
            this.engineSound = createjs.Sound.play("enemyEngine");
            this.reset();
            this.game.addChild(this);
        }
        Enemy.prototype.update = function () {
            this.x += this.dx;
            if (this.x > -stage.canvas.width) {
                this.enginePlay = true;
            }
            if (this.x > stage.canvas.width * 2) {
                this.reset();
            }
            this.checkEngine();
        };
        Enemy.prototype.reset = function () {
            this.engineSound.stop();
            this.enginePlay = false;
            // Reset the island image location
            this.y = Math.floor(Math.random() * stage.canvas.height);
            this.x = -stage.canvas.width * 5;
        };
        Enemy.prototype.checkEngine = function () {
            if ((this.enginePlay == true) && (this.engineSound.playState != "playSucceeded")) {
                this.engineSound.play();
            }
            else if (this.enginePlay == false) {
                this.engineSound.stop();
            }
        };
        return Enemy;
    }(objects.GameObject));
    objects.Enemy = Enemy;
})(objects || (objects = {}));
//# sourceMappingURL=enemy.js.map