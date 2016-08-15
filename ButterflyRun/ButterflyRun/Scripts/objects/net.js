var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
/// <reference path="../managers/asset.ts" />
var objects;
(function (objects) {
    // net class
    var Net = (function (_super) {
        __extends(Net, _super);
        function Net(game) {
            this.game = game;
            _super.call(this, "netpic");
            // Adjust Image Scale for Screen Width
            if (screenScale < 1) {
                this.scaleX = screenScale;
                this.scaleY = screenScale;
                this.setBounds(this.regX, this.regY, this.scaleX * this.getBounds().width, this.scaleY * this.getBounds().height);
            }
            this.width = this.getBounds().width;
            this.height = this.getBounds().height;
            this.regX = this.width * 0.5;
            this.regY = this.height * 0.5;
            this.reset();
            this.lightning = new objects.Lightning(this);
            game.addChild(this.lightning);
            game.addChild(this);
        }
        Net.prototype.update = function () {
            this.y += this.dy;
            this.x += this.dx;
            this.lightning.update();
            if (this.x > stage.canvas.width + this.width) {
                this.reset();
            }
        };
        Net.prototype.reset = function () {
            this.y = Math.floor(Math.random() * stage.canvas.height);
            this.dx = Math.floor(Math.random() * 5 + 5);
            this.dy = Math.floor(Math.random() * -3) + Math.floor(Math.random() * 3);
            this.x = -this.width;
        };
        Net.prototype.destroy = function () {
            game.removeChild(this);
        };
        return Net;
    })(objects.GameObject);
    objects.Net = Net;
})(objects || (objects = {}));
