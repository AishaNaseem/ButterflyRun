/*Developed by Aisha Naseem
by using Mail Pilot Template provided by Professor

*/
/// <reference path="../objects/butterfly.ts" />
/// <reference path="../objects/pollen.ts" />
/// <reference path="../objects/scoreboard.ts" />
var managers;
(function (managers) {
    var PollenManager = (function () {
        function PollenManager(butterfly, game) {
            this.pollens = [];
            this.pollensCount = 0;
            this.firing = false;
            this.game = game;
            this.butterfly = butterfly;
        }
        PollenManager.prototype.fire = function () {
            // create two pollens on either side of  butterfly
            var leftPollen = new objects.Pollen(this.game);
            // var rightPollen: objects.Pollen = new objects.Pollen(this.game);
            this.game.addChild(leftPollen);
            leftPollen.y = this.butterfly.y - 10;
            leftPollen.x = 400;
            this.pollens.push(leftPollen);
            /*this.game.addChild(rightPollen);
            rightPollen.y = this.butterfly.y + 10;
            rightPollen.x = 400;
            this.pollens.push(rightPollen);*/
            // Play Pollen Sound
            createjs.Sound.play("pollen");
        }; // end fire
        PollenManager.prototype.update = function () {
            var len = this.pollens.length;
            for (var count = len - 1; count >= 0; count--) {
                this.pollen = this.pollens[count];
                // move current pollen up stage
                this.pollen.x -= 25;
                // check to see if the pollen has left the stage
                if (this.pollen.x < 0) {
                    this.destroyPollen(this.pollen);
                }
            }
            if (scoreboard.pollencount > 0) {
                // fire pollen if mouse button is clicked or game container is tapped
                if ((this.firing == true) && (this.pollensCount % 10 == 0)) {
                    if (this.butterfly.onStage == true) {
                        this.fire();
                        scoreboard.pollencount = scoreboard.pollencount - 1;
                    }
                }
            }
            //increment pollen count to limit number of pollen being fired
            this.pollensCount++;
        }; // end update
        PollenManager.prototype.destroyPollen = function (pollen) {
            var len = this.pollens.length;
            // remove poollen from game and from pollen array
            for (var count = 0; count < len; count++) {
                if (this.pollens[count] == pollen) {
                    this.pollens.splice(count, 1);
                    this.game.removeChild(pollen);
                }
            }
        }; // end destroyPollen
        return PollenManager;
    }());
    managers.PollenManager = PollenManager;
})(managers || (managers = {}));
//# sourceMappingURL=pollenmanager.js.map