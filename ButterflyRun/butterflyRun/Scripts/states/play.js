/// <reference path="../objects/button.ts" />
/// <reference path="../objects/net.ts" />
/// <reference path="../objects/plant.ts" />
/// <reference path="../objects/label.ts" />
/// <reference path="../objects/garden.ts" />
/// <reference path="../objects/butterfly.ts" />
/// <reference path="../objects/scoreboard.ts" />
/// <reference path="../objects/stats.ts" />
/// <reference path="../objects/garden.ts" />
/// <reference path="../managers/collision.ts" />
var states;
(function (states) {
    var levelScore = 200;
    function playState() {
        garden.update();
        plant.update();
        flower.update();
        butterfly.update();
        for (var count = 0; count < constants.CLOUD_NUM; count++) {
            nets[count].update();
        }
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
        // Level 2 scenario
        if ((scoreboard.score == 200) && (scoreboard.currentLevel == 1)) {
            scoreboard.currentLevel = 2;
            scoreboard.lives += 3;
            scoreboard.pollencount = 10;
            // Display the Level Label
            //levelLabel = new objects.LevelLabel("level " + scoreboard.currentLevel);
            currentState = constants.LEVEL2_STATE;
            changeState(currentState);
        }
    }
    states.playState = playState;
    // play state Function
    function play() {
        // Declare new Game Container
        game = new createjs.Container();
        // Instantiate Game Objects
        garden = new objects.Garden(game);
        plant = new objects.Plant(game);
        flower = new objects.Flower(plant, game);
        butterfly = new objects.Butterfly(game);
        // Display the Level Label
        levelLabel = new objects.LevelLabel("level 1");
        createjs.Sound.play("levelstart");
        // Show Cursor
        stage.cursor = "none";
        // Create multiple nets
        for (var count = 0; count < constants.CLOUD_NUM; count++) {
            nets[count] = new objects.Net(game);
        }
        // Display Scoreboard
        scoreboard = new objects.Scoreboard(game);
        // Instantiate Collision Manager
        collision = new managers.Collision(butterfly, flower, nets, scoreboard, game);
        stage.addChild(game);
    }
    states.play = play;
})(states || (states = {}));
//# sourceMappingURL=play.js.map