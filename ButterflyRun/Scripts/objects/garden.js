var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
/*Developed by Aisha Naseem
by using Mail Pilot Template provided by Professor

*/
/// <reference path="../managers/asset.ts" />
var objects;
(function (objects) {
    // Ocean Class
    var Garden = (function (_super) {
        __extends(Garden, _super);
        function Garden(game) {
            _super.call(this, managers.Assets.loader.getResult("garden"));
            this.game = game;
            this.width = this.getBounds().width;
            this.height = this.getBounds().height;
            this.reset();
            //this.dy = 5;
            this.dx = 0.5;
            game.addChild(this);
        }
        Garden.prototype.update = function () {
            //  this.y += this.dy;
            //if (this.y >= 0) {
            //  this.reset();
            this.x += this.dx;
            if (this.x >= 0) {
                this.reset();
            }
        };
        Garden.prototype.reset = function () {
            //this.y = -960;
            this.x = -700;
        };
        Garden.prototype.destroy = function () {
            game.removeChild(this);
        };
        return Garden;
    }(createjs.Bitmap));
    objects.Garden = Garden;
})(objects || (objects = {}));
//# sourceMappingURL=garden.js.map