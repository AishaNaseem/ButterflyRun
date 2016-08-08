/// <reference path="../objects/net.ts" />
/// <reference path="../objects/plant.ts" />
/// <reference path="../objects/butterfly.ts" />
/// <reference path="../objects/scoreboard.ts" />
var managers;
(function (managers) {
    // Collision Manager Class
    var Collision = (function () {
        function Collision(butterfly, flower, net, scoreboard, game, enemies, pollens) {
            this.net = [];
            this.enemies = [];
            this.pollens = [];
            this.butterfly = butterfly;
            this.flower = flower;
            this.net = net;
            this.enemies = enemies;
            this.pollens = pollens;
            this.scoreboard = scoreboard;
            this.game = game;
        }
        // Utility method - Distance calculation between two points
        Collision.prototype.distance = function (p1, p2) {
            var result = 0;
            var xPoints = 0;
            var yPoints = 0;
            xPoints = p2.x - p1.x;
            xPoints = xPoints * xPoints;
            yPoints = p2.y - p1.y;
            yPoints = yPoints * yPoints;
            result = Math.sqrt(xPoints + yPoints);
            return result;
        };
        // check collision between butterfly and any  object
        Collision.prototype.planeAndCloud = function (net) {
            var p1 = new createjs.Point();
            var p2 = new createjs.Point();
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
        };
        // check collision between butterfly and flower
        Collision.prototype.planeAndCoin = function () {
            var p1 = new createjs.Point();
            var p2 = new createjs.Point();
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
        };
        //check collision between butterfly and enemy objects
        Collision.prototype.planeAndEnemy = function (enemy) {
            var p1 = new createjs.Point();
            var p2 = new createjs.Point();
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
        };
        // Utility Function to Check Collisions
        Collision.prototype.update = function () {
            if (butterfly.onStage == true) {
                for (var count = 0; count < constants.CLOUD_NUM; count++) {
                    this.planeAndCloud(this.net[count]);
                }
                this.planeAndCoin();
                if (typeof this.enemies != "undefined") {
                    this.planeAndEnemy(this.enemies[0]);
                }
            }
        };
        return Collision;
    })();
    managers.Collision = Collision;
})(managers || (managers = {}));
