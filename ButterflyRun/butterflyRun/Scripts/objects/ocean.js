var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
/// <reference path="../managers/asset.ts" />
var objects;
(function (objects) {
    // Ocean Class
    var Ocean = (function (_super) {
        __extends(Ocean, _super);
        function Ocean(game) {
            this.game = game;
            _super.call(this, managers.Assets.loader.getResult("ocean"));
            this.width = this.getBounds().width;
            this.height = this.getBounds().height;
            this.reset();
            //this.dy = 5;
            this.dx = 0.5;
            game.addChild(this);
        }
        Ocean.prototype.update = function () {
            //  this.y += this.dy;
            //if (this.y >= 0) {
            //  this.reset();
            this.x += this.dx;
            if (this.x >= 0) {
                this.reset();
            }
        };
        Ocean.prototype.reset = function () {
            //this.y = -960;
            this.x = -700;
        };
        Ocean.prototype.destroy = function () {
            game.removeChild(this);
        };
        return Ocean;
    })(createjs.Bitmap);
    objects.Ocean = Ocean;
})(objects || (objects = {}));
//# sourceMappingURL=ocean.js.map