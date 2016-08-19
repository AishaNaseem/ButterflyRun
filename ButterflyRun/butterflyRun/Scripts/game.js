/// <reference path="constants.ts" />
/// <reference path="managers/asset.ts" />
/// <reference path="objects/gameobject.ts" />
/// <reference path="objects/net.ts" />
/// <reference path="objects/plant.ts" />
/// <reference path="objects/garden.ts" />
/// <reference path="objects/butterfly.ts" />
/// <reference path="objects/scoreboard.ts" />
/// <reference path="objects/label.ts" />
/// <reference path="objects/button.ts" />
/// <reference path="objects/flower.ts" />
/// <reference path="objects/explosion.ts" />
/// <reference path="objects/level.ts" />
/// <reference path="objects/lightning.ts" />
/// <reference path="objects/stats.ts" />
/// <reference path="managers/collision.ts" />
/// <reference path="states/play.ts" />
/// <reference path="states/menu.ts" />
/// <reference path="states/gameover.ts" />
/// <reference path="states/instructions.ts" />
/// <reference path="states/level2.ts" />
/// <reference path="managers/pollenmanager.ts" />
// Butterfly Run 2016 
// game containers
var canvas;
var stage;
var game;
// game objects
var garden;
var butterfly;
var plant;
var flower;
var nets = []; // net array;
var enemies = []; // Enemy array;
var scoreboard;
var levelLabel;
// object managers
var collision;
var pollenManager;
var tryAgain;
// global game variables
var screenScale;
var currentState;
var currentStateFunction;
var gamePlaying = false;
var startButton;
var startScreen;
var butterflyRunLabel;
// Preload function - Loads Assets and initializes game;
function preload() {
    managers.Assets.init();
    managers.Assets.loader.addEventListener("complete", init);
    canvas = document.getElementById('canvas');
    stage = new createjs.Stage(canvas);
    stage.enableMouseOver(30);
    createjs.Ticker.setFPS(60);
    createjs.Ticker.addEventListener("tick", gameLoop);
    showStartScreen();
}
// Start Screen 
function showStartScreen() {
    game = new createjs.Container();
    var screenFont = "40px Arial";
    var introButterflyWidth = 447;
    var introButterflyHeight = 195;
    // Add Static Garden Image
    var introGarden = new createjs.Bitmap("assets/images/gardennew.png");
    game.addChild(introGarden);
    // Add Large Butterfly Image
    if (stage.canvas.width == constants.GAME_WIDTH) {
        var introButterfly = new createjs.Bitmap("assets/images/ButterflyBig.png");
    }
    else {
        var introPlane = new createjs.Bitmap("assets/images/ButterflyBig.png");
        screenFont = "30px Arial";
        introButterflyWidth = 224;
        introButterflyHeight = 98;
    }
    introButterfly.regX = introButterflyWidth * 0.5;
    introButterfly.regY = introButterflyHeight * 0.5;
    introButterfly.x = stage.canvas.width * 0.5;
    introButterfly.y = stage.canvas.height * 0.5;
    game.addChild(introButterfly);
    // Add Butterfly Label
    var butterflyRunLabel = new createjs.Text("BUTTERFLY RUN", screenFont, constants.LABEL_COLOUR);
    butterflyRunLabel.regX = butterflyRunLabel.getBounds().width * 0.1;
    butterflyRunLabel.regY = butterflyRunLabel.getBounds().height * 0.1;
    butterflyRunLabel.x = stage.canvas.width * 0.1;
    butterflyRunLabel.y = 80;
    game.addChild(butterflyRunLabel);
    stage.addChild(game);
}
// init called after Assets have been loaded.
function init() {
    // Add Start Button after Loader is complete
    startButton = new objects.Button(stage.canvas.width * 0.5, 360, "startButton");
    game.addChild(startButton);
    currentState = constants.MENU_STATE;
    // Don't Start the game until startButton is pressed
    startButton.on("click", function (e) {
        gamePlaying = true;
        changeState(currentState);
    });
}
// Game Loop
function gameLoop(event) {
    if (gamePlaying == true) {
        currentStateFunction();
    }
    else {
        ; //swirl.rotation += 0.5;
    }
    stage.update();
}
function changeState(state) {
    // Launch Various "screens"
    switch (state) {
        case constants.MENU_STATE:
            // instantiate menu screen
            currentStateFunction = states.menuState;
            states.menu();
            break;
        case constants.PLAY_STATE:
            // instantiate play screen
            currentStateFunction = states.playState;
            states.play();
            break;
        case constants.LEVEL2_STATE:
            // instantiate play screen
            currentStateFunction = states.Level2State;
            states.Level2();
            break;
        case constants.GAME_OVER_STATE:
            currentStateFunction = states.gameOverState;
            // instantiate game over screen
            states.gameOver();
            break;
        case constants.INSTRUCTIONS_STATE:
            currentStateFunction = states.instructionState;
            // instantiate game over screen
            states.Instructions();
            break;
    }
}
//# sourceMappingURL=game.js.map