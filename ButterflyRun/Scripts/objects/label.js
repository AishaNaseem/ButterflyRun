var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
/*Developed by Aisha Naseem
by using Mail Pilot Template provided by Professor

*/
/// <reference path="../constants.ts" />
/// <reference path="../managers/asset.ts" />
var objects;
(function (objects) {
    var Label = (function (_super) {
        __extends(Label, _super);
        function Label(x, y, labelText) {
            _super.call(this, labelText, managers.Assets.bitMapFont);
            this.regX = this.getBounds().width / 2;
            this.regY = this.getBounds().height / 2;
            this.x = x;
            this.y = y;
        }
        // Utility Method to change the default font size
        Label.prototype.fontSize = function (size) {
            var scale = size / this.getBounds().height;
            this.scaleX = scale;
            this.scaleY = scale;
        };
        return Label;
    }(createjs.BitmapText));
    objects.Label = Label;
})(objects || (objects = {}));
//# sourceMappingURL=label.js.map