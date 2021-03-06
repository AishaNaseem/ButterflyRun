/*Developed by Aisha Naseem
by using Mail Pilot Template provided by Professor

*/
/// <reference path="../constants.ts" />
var states;
(function (states) {
    var instructionsFont = constants.LABEL_FONT;
    var lineSpace = 45;
    var buttonPosition = 0.8;
    // Back Button Event Handler
    function backButtonClicked(event) {
        stage.removeChild(game);
        game.removeAllChildren();
        game.removeAllEventListeners();
        currentState = constants.MENU_STATE;
        changeState(currentState);
    }
    states.backButtonClicked = backButtonClicked;
    // Instruction State
    function instructionState() {
        garden.update();
    }
    states.instructionState = instructionState;
    // Instructions Scene
    function Instructions() {
        var gameInstructions = [];
        var instructionsArray = [];
        // Declare new Game Container
        game = new createjs.Container();
        // Instantiate Game Objects
        garden = new objects.Garden(game);
        instructionsArray = [
            "Game Instructions",
            "You are a Butterlfy, picking up",
            "flowers from plants",
            "but be careful not",
            "too close to the catching net.",
            "Your butterfly will fall apart",
            "if it is hit by net too many times.",
            "Steer with the mouse",
            "or by touching the screen.",
            "Good Luck!"
        ];
        // Adjust Instructions for smaller screen size
        if (screenScale < 1) {
            instructionsFont = "14px Dock51";
            lineSpace = 30;
            buttonPosition = 0.5;
        }
        // Display each line of instructions
        for (var line = 0; line < instructionsArray.length; line++) {
            gameInstructions[line] = new createjs.Text(instructionsArray[line], instructionsFont, constants.LABEL_COLOUR);
            gameInstructions[line].x = stage.canvas.width * 0.05;
            gameInstructions[line].y = 20 + (lineSpace * line);
            // gameInstructions[line].y = stage.canvas.height * 0.05;
            //gameInstructions[line].x = 20 + (lineSpace * line);
            game.addChild(gameInstructions[line]);
        }
        // Display Back Button
        states.backButton = new objects.Button(stage.canvas.width * buttonPosition, 430, "backbutton");
        game.addChild(states.backButton);
        states.backButton.addEventListener("click", backButtonClicked);
        // Show Cursor
        stage.cursor = "default";
        // Add Scene to Game Container
        stage.addChild(game);
    }
    states.Instructions = Instructions;
})(states || (states = {}));
//# sourceMappingURL=instructions.js.map