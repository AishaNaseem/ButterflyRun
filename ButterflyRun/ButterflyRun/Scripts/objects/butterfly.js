var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
/// <reference path="../managers/asset.ts" />
var objects;
(function (objects) {
    // Butterfly Class
    var Butterfly = (function (_super) {
        __extends(Butterfly, _super);
        function Butterfly(game) {
            _super.call(this, "butterfly");
            this.onStage = true;
            this.game = game;
            //this.y = 430;
            this.x = 400;
            game.addChild(this);
            this.engineSound = createjs.Sound.play('butterfly', createjs.Sound.INTERRUPT_NONE, 0, 0, -1, 0.1, 0);
        }
        Butterfly.prototype.update = function () {
            // Change plane position with some easing on update
            //this.x += (stage.mouseX - this.x) * 0.3;
            this.y += (stage.mouseY - this.y) * 0.3;
        };
        Butterfly.prototype.destroy = function () {
            this.engineSound.stop();
            game.removeChildAt(constants.PLANE_LEVEL);
        };
        return Butterfly;
    })(objects.GameObject);
    objects.Butterfly = Butterfly;
})(objects || (objects = {}));
