/// <reference path="../objects/butterfly.ts" />
/// <reference path="../objects/pollen.ts" />
var managers;
(function (managers) {
    var PollenManager = (function () {
        function PollenManager(butterfly, game) {
            this.pollens = [];
            this.pollenCount = 0;
            this.firing = false;
            this.game = game;
            this.butterfly = butterfly;
        }
        PollenManager.prototype.fire = function () {
            // create two bullets on either side of  butterfly
            var leftPollen = new objects.Pollen(this.game);
            var rightPollen = new objects.Pollen(this.game);
            this.game.addChild(leftPollen);
            //leftPollen.x = this.butterfly.x - 10;
            leftPollen.y = this.butterfly.y - 10;
            //leftPollen.y = 400;
            leftPollen.x = 400;
            this.pollens.push(leftPollen);
            this.game.addChild(rightPollen);
            // rightPollen.x = this.butterfly.x + 10;
            rightPollen.y = this.butterfly.y + 10;
            //rightPollen.y = 400;
            rightPollen.x = 400;
            this.pollens.push(rightPollen);
            // Play Pollen Sound
            createjs.Sound.play("pollen");
        }; // end fire
        PollenManager.prototype.update = function () {
            var len = this.pollens.length;
            var pollen;
            for (var count = len - 1; count >= 0; count--) {
                pollen = this.pollens[count];
                // move current pollen up stage
                pollen.x -= 25;
                //pollen.y -= 25;
                // check to see if the pollen has left the stage
                //if (pollen.y < 0) {
                if (pollen.x < 0) {
                    this.destroyPollen(pollen);
                }
            }
            // fire pollen if mouse button is clicked or game container is tapped
            if ((this.firing == true) && (this.pollenCount % 10 == 0)) {
                if (this.butterfly.onStage == true) {
                    this.fire();
                }
            }
            //increment bullet count to limit number of bullets being fired
            this.pollenCount++;
        }; // end update
        PollenManager.prototype.destroyPollen = function (pollen) {
            var len = this.pollens.length;
            // remove pollen from game and from pollen array
            for (var count = 0; count < len; count++) {
                if (this.pollens[count] == pollen) {
                    this.pollens.splice(count, 1);
                    this.game.removeChild(pollen);
                }
            }
        }; // end destroyPollen
        return PollenManager;
    })();
    managers.PollenManager = PollenManager;
})(managers || (managers = {}));
