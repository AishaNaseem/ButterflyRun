var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
/*Developed by Aisha Naseem
by using Mail Pilot Template provided by Professor

*/
var objects;
(function (objects) {
    var LevelLabel = (function (_super) {
        __extends(LevelLabel, _super);
        function LevelLabel(levelText) {
            this.x = stage.canvas.width * 0.5;
            this.y = stage.canvas.height * 0.5;
            _super.call(this, this.x, this.y, levelText);
            //this.dy = 2;
            this.dx = 2;
            //this.height = this.getBounds().height;
            this.width = this.getBounds().width;
            this.fontSize(50);
            game.addChild(this);
        }
        LevelLabel.prototype.update = function () {
            // this.y += this.dy
            this.x += this.dx;
            //if (this.y > (stage.canvas.height + this.height)) {
            //  this.dy = 0;
            if (this.x > (stage.canvas.width + this.width)) {
                this.dx = 0;
            }
        };
        return LevelLabel;
    })(objects.Label);
    objects.LevelLabel = LevelLabel;
})(objects || (objects = {}));
