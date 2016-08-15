var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
/*Developed by Aisha Naseem
by using Mail Pilot Template provided by Professor

*/
/// <reference path="net.ts" />
/// <reference path="../managers/asset.ts" />
var objects;
(function (objects) {
    var Lightning = (function (_super) {
        __extends(Lightning, _super);
        function Lightning(net) {
            _super.call(this, managers.Assets.lightningAtlas, "lightning");
            this.net = net;
            if (screenScale < 1) {
                // Adjust lightning to Screen Scale
                this.scaleX = screenScale;
                this.scaleY = screenScale;
                this.setBounds(this.regX, this.regY, this.scaleX * this.getBounds().width, this.scaleY * this.getBounds().height);
            }
            else {
                this.scaleX = 2;
                this.scaleY = 2;
            }
            this.width = this.getBounds().width;
            this.height = this.getBounds().height;
            this.regX = this.width * 0.5;
            this.regY = this.height * 0.5;
            this.x = this.net.x;
            this.y = this.net.y;
        }
        Lightning.prototype.update = function () {
            this.x = this.net.x;
            this.y = this.net.y;
        };
        return Lightning;
    })(createjs.Sprite);
    objects.Lightning = Lightning;
})(objects || (objects = {}));
