/// <reference path="../objects/butterfly.ts" />
/// <reference path="../objects/pollen.ts" />
/// <reference path="../objects/scoreboard.ts" />

module managers {
    export class PollenManager {
        game: createjs.Container;
        butterfly: objects.Butterfly;
        pcount: objects.Scoreboard;
        pollens = [];
        pollensCount: number = 0;
        firing: boolean = false;
        constructor(butterfly: objects.Butterfly, game: createjs.Container) {
            this.game = game;
            this.butterfly = butterfly;
        }

        fire() {
            // create two pollens on either side of  butterfly
            var leftPollen: objects.Pollen = new objects.Pollen(this.game);
            var rightPollen: objects.Pollen = new objects.Pollen(this.game);

            this.game.addChild(leftPollen);
            leftPollen.y = this.butterfly.y - 10;
            leftPollen.x = 400;
            this.pollens.push(leftPollen);

            this.game.addChild(rightPollen);
            rightPollen.y = this.butterfly.y + 10;
            rightPollen.x = 400;
            this.pollens.push(rightPollen);

            // Play Pollen Sound
            createjs.Sound.play("pollen");
        } // end fire

        update() {
            var len: number = this.pollens.length;
            var pollen  : objects.Pollen;

            for (var count = len - 1; count >= 0; count--) {
                pollen = this.pollens[count];
                // move current pollen up stage
                pollen.x -= 25;
                // check to see if the pollen has left the stage
                if (pollen.x < 0) {
                    this.destroyPollen(pollen);
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
            
            //increment bullet count to limit number of bullets being fired
            this.pollensCount++;
        } // end update

        destroyPollen(pollen: objects.Pollen) {
            var len: number = this.pollens.length;

            // remove poollen from game and from pollen array
            for (var count = 0; count < len; count++) {
                if (this.pollens[count] == pollen) {
                    this.pollens.splice(count, 1);
                    this.game.removeChild(pollen);
                }
            }
        } // end destroyBullet
    }
} 