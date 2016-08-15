/// <reference path="../constants.ts" />
/// <reference path="../objects/button.ts" />
/// <reference path="../objects/net.ts" />
/// <reference path="../objects/flower.ts" />
/// <reference path="../objects/explosion.ts" />
/// <reference path="../objects/plant.ts" />
/// <reference path="../objects/label.ts" />
/// <reference path="../objects/level.ts" />
/// <reference path="../objects/garden.ts" />
/// <reference path="../objects/butterfly.ts" />
/// <reference path="../objects/scoreboard.ts" />
/// <reference path="../objects/stats.ts" />
/// <reference path="../managers/collision.ts" />
/// <reference path="../managers/pollenmanager.ts" />
var states;
(function (states) {
    function Level2State() {
        garden.update();
        plant.update();
        flower.update();
        butterfly.update();
        // One Enemy for now
        enemies[0].update();
        for (var count = 0; count < constants.CLOUD_NUM; count++) {
            nets[count].update();
        }
        pollenManager.update();
        collision.update();
        scoreboard.update();
        levelLabel.update();
        // Change to Game Over State if the player has no lives left
        if (scoreboard.lives <= 0) {
            stage.removeChild(game);
            butterfly.destroy();
            game.removeAllChildren();
            game.removeAllEventListeners();
            currentState = constants.GAME_OVER_STATE;
            changeState(currentState);
        }
        // Level 3 scenario
        if ((scoreboard.score == 400) && (scoreboard.currentLevel == 2)) {
            scoreboard.currentLevel = 3;
            scoreboard.lives += 3;
            scoreboard.pollencount += 50;
            // Display the Level Label
            levelLabel = new objects.LevelLabel("level " + scoreboard.currentLevel);
            createjs.Sound.play("levelstart");
        }
    }
    states.Level2State = Level2State;
    // Fire the bullet when the mouse is clicked
    function mouseDown() {
        pollenManager.firing = true;
    }
    function mouseUp() {
        pollenManager.firing = false;
    }
    function Level2() {
        // Declare new Game Container
        game = new createjs.Container();
        // Instantiate Game Objects
        garden = new objects.Garden(game);
        plant = new objects.Plant(game);
        flower = new objects.Flower(plant, game);
        butterfly = new objects.Butterfly(game);
        enemies[0] = new objects.Enemy(game);
        // Display the Level Label
        levelLabel = new objects.LevelLabel("level 2");
        createjs.Sound.play("level2");
        // Show Cursor
        stage.cursor = "none";
        // Create multiple clouds
        for (var count = 0; count < constants.CLOUD_NUM; count++) {
            nets[count] = new objects.Net(game);
        }
        // Show the Scoreboard
        scoreboard.showScoreBoard();
        // Instantiate Bullet Manager
        pollenManager = new managers.PollenManager(butterfly, game);
        // Instantiate Collision Manager
        collision = new managers.Collision(butterfly, flower, nets, scoreboard, game, enemies, pollenManager.pollens);
        game.addEventListener("mousedown", mouseDown);
        game.addEventListener("pressup", mouseUp);
        stage.addChild(game);
    }
    states.Level2 = Level2;
})(states || (states = {}));
