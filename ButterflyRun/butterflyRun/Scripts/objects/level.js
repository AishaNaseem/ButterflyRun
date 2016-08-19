var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var objects;
(function (objects) {
    var LevelLabel = (function (_super) {
        __extends(LevelLabel, _super);
        function LevelLabel(levelText) {
            _super.call(this, 0, 0, levelText);
            this.x = stage.canvas.width * 0.5;
            this.y = stage.canvas.height * 0.5;
            this.dx = 2;
            this.width = this.getBounds().width;
            this.fontSize(50);
            game.addChild(this);
        }
        LevelLabel.prototype.update = function () {
            this.x += this.dx;
            if (this.x > (stage.canvas.width + this.width)) {
                this.dx = 0;
            }
        };
        return LevelLabel;
    }(objects.Label));
    objects.LevelLabel = LevelLabel;
})(objects || (objects = {}));
//# sourceMappingURL=level.js.map