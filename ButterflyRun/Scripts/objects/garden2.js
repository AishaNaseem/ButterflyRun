var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
/*Developed by Anuja Salo Joseph
by using Mail Pilot Template provided by Professor

*/
/// <reference path="../managers/asset.ts" />
var objects;
(function (objects) {
    // Ocean Class
    var Garden2 = (function (_super) {
        __extends(Garden2, _super);
        function Garden2(game) {
            _super.call(this, managers.Assets.loader.getResult("garden2"));
            this.game = game;
            this.width = this.getBounds().width;
            this.height = this.getBounds().height;
            this.reset();
            //this.dy = 5;
            this.dx = 0.5;
            game.addChild(this);
        }
        Garden2.prototype.update = function () {
            //  this.y += this.dy;
            //if (this.y >= 0) {
            //  this.reset();
            this.x += this.dx;
            if (this.x >= 0) {
                this.reset();
            }
        };
        Garden2.prototype.reset = function () {
            //this.y = -960;
            this.x = -700;
        };
        Garden2.prototype.destroy = function () {
            game.removeChild(this);
        };
        return Garden2;
    }(createjs.Bitmap));
    objects.Garden2 = Garden2;
})(objects || (objects = {}));
//# sourceMappingURL=garden2.js.map