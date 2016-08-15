/*Developed by Aisha Naseem
by using Mail Pilot Template provided by Professor

*/
var constants;
(function (constants) {
    // Stage Size Constants
    constants.GAME_WIDTH = 480;
    constants.GAME_HEIGHT = 640;
    // State Machine Constants
    constants.MENU_STATE = 0;
    constants.PLAY_STATE = 1;
    constants.GAME_OVER_STATE = 2;
    constants.INSTRUCTIONS_STATE = 3;
    constants.LEVEL2_STATE = 4;
    // Game Constants
    constants.CLOUD_NUM = 2;
    constants.LABEL_FONT = "28px Arial";
    constants.LABEL_COLOUR = "#660033";
    constants.PLANE_LIVES = 3;
    constants.ENEMY_NUM = 1;
    // Layer Constants
    constants.OCEAN_LEVEL = 0;
    constants.ISLAND_LEVEL = 1;
    constants.COIN_LEVEL = 2;
    constants.PLANE_LEVEL = 3;
    constants.CLOUD_LEVEL = [4, 5, 6];
    constants.SCOREBOARD_LEVEL = 7;
    constants.LEVEL_LABEL_LEVEL = 8;
})(constants || (constants = {}));
