/*Developed by Aisha Naseem 
by using Mail Pilot Template provided by Professor

*/
/// <reference path="../objects/net.ts" />
/// <reference path="../objects/plant.ts" />

/// <reference path="../objects/butterfly.ts" />
/// <reference path="../objects/scoreboard.ts" />

module managers {
    // Collision Manager Class
    export class Collision {
        // class variables
        private butterfly: objects.Butterfly;
       // private polllen: objects.Pollen;
        private flower: objects.Flower;
        private net = [];
        private enemies = [];
        private pollens = [];
        private scoreboard: objects.Scoreboard;
        private game: createjs.Container;

        constructor(butterfly: objects.Butterfly, flower: objects.Flower, net, scoreboard: objects.Scoreboard, game: createjs.Container, enemies?, pollens?) {
            this.butterfly = butterfly;
            this.flower = flower;
            this.net = net;
            this.enemies = enemies;
            this.pollens = pollens;
            this.scoreboard = scoreboard;

            this.game = game;

        }

        // Utility method - Distance calculation between two points
        private distance(p1: createjs.Point, p2: createjs.Point): number {
            var result: number = 0;
            var xPoints: number = 0;
            var yPoints: number = 0;

            xPoints = p2.x - p1.x;
            xPoints = xPoints * xPoints;

            yPoints = p2.y - p1.y;
            yPoints = yPoints * yPoints;

            result = Math.sqrt(xPoints + yPoints);

            return result;
        }

        // check collision between butterfly and net  object
        private butterflyAndNet(net: objects.Net) {
            var p1: createjs.Point = new createjs.Point();
            var p2: createjs.Point = new createjs.Point();
            p1.x = this.butterfly.x;
            p1.y = this.butterfly.y;
            p2.x = net.x;
            p2.y = net.y;
            //if (this.distance(p1, p2) < ((this.plane.height * 0.5) + (cloud.height * 0.5))) {
            if (this.distance(p1, p2) < ((this.butterfly.width * 0.5) + (net.width * 0.5))) {
                createjs.Sound.play("explosion");
                // show explosion animation
                var explosion = new objects.Explosion(game);
                explosion.x = this.butterfly.x;
                explosion.y = this.butterfly.y;
                explosion.on("animationend", function (e) { explosion.remove(); });
                this.butterfly.gotoAndPlay("flickerbutterfly");
                this.butterfly.onStage = false;
                setTimeout(function (e) {
                    this.butterfly.gotoAndPlay("butterfly");
                    this.butterfly.onStage = true;
                }, 2000);

                this.scoreboard.lives -= 1;
                net.reset();
            }
        }

        // check collision between butterfly and flower
        private butterflyAndCoin() {
            var p1: createjs.Point = new createjs.Point();
            var p2: createjs.Point = new createjs.Point();
            p1.x = this.butterfly.x;
            p1.y = this.butterfly.y;
            p2.x = this.flower.x;
            p2.y = this.flower.y;
            if (this.distance(p1, p2) < ((this.butterfly.height * 0.5) + (this.flower.height * 0.5))) {
                createjs.Sound.play("flowerpicking");
                this.scoreboard.score += 100;
                // increase player's lives every 1500 points
                if (this.scoreboard.score % 1500 == 0) {
                    createjs.Sound.play("lives");
                    this.scoreboard.lives++;
                }
                this.flower.onStage = false;
            }
        }

       //check collision between butterfly and enemy objects
        private butterflyAndEnemy(enemy: objects.Enemy) {
            var p1: createjs.Point = new createjs.Point();
            var p2: createjs.Point = new createjs.Point();
            p1.x = this.butterfly.x;
            p1.y = this.butterfly.y;
            p2.x = enemy.x;
            p2.y = enemy.y;
            if (this.distance(p1, p2) < ((this.butterfly.height * 0.5) + (enemy.height * 0.5))) {
                createjs.Sound.play("explosion");
                // show explosion animation
                var explosion = new objects.Explosion(game);
                explosion.x = this.butterfly.x;
                explosion.y = this.butterfly.y;
                explosion.on("animationend", function (e) { explosion.remove(); });
                this.butterfly.gotoAndPlay("flickerbutterfly");
                this.butterfly.onStage = false;
                setTimeout(function (e) {
                    this.butterfly.gotoAndPlay("plane");
                    this.butterfly.onStage = true;
                }, 2000);

                this.scoreboard.lives -= 1;

                enemy.reset();
            }
        }

     
        // Utility Function to Check Collisions
        update() {
            if (butterfly.onStage == true) {
                for (var count = 0; count < constants.CLOUD_NUM; count++) {
                    this.butterflyAndNet(this.net[count]);
                }
                this.butterflyAndCoin();

                if (typeof this.enemies != "undefined") {
                    this.butterflyAndEnemy(this.enemies[0]);

                    
                }

                if (typeof this.pollens != "undefined") {
                    this.pollenAndEnemy(this.enemies[0], this.pollens[0]);


                }
            }



        }

        //check collision between butterfly and enemy objects
        private pollenAndEnemy(enemy: objects.Enemy, pollen: objects.Pollen) {
            var p1: createjs.Point = new createjs.Point();
            var p2: createjs.Point = new createjs.Point();
            p1.x = pollen.x;
            p1.y = pollen.y;
            p2.x = enemy.x;
            p2.y = enemy.y;
            if (this.distance(p1, p2) < ((pollen.height * 0.5) + (enemy.height * 0.5))) {
                createjs.Sound.play("explosion");
                // show explosion animation
                var explosion = new objects.Explosion(game);
                explosion.x = pollen.x;
                explosion.y = pollen.y;
                explosion.on("animationend", function (e) { explosion.remove(); });
                //this.butterfly.gotoAndPlay("flickerbutterfly");
                //pollen.onStage = false;
                this.game.removeChild(pollen);
                setTimeout(function (e) {
                    this.butterfly.gotoAndPlay("plane");
                    this.butterfly.onStage = true;
                }, 2000);

               // this.scoreboard.lives -= 1;

                //enemy.reset();
            }
        }

        
    }
} 