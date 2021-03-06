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
    var Pollen = (function (_super) {
        __extends(Pollen, _super);
        function Pollen(game) {
            _super.call(this, "bigpollen");
            this.game = game;
            this.reset();
            this.game.addChild(this);
        }
        Pollen.prototype.reset = function () {
            this.y = 0;
            this.x = 0;
        };
        return Pollen;
    }(objects.GameObject));
    objects.Pollen = Pollen;
})(objects || (objects = {}));
//# sourceMappingURL=pollen.js.map