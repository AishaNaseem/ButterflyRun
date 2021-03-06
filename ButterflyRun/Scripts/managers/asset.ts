﻿/*Developed by Aisha Naseem 
by using Mail Pilot Template provided by Professor

*/
module managers {
    // Image and Sound Manifest;
    var assetManifest = [
        { id: "garden", src: "assets/images/gardennew.png" },
        { id: "garden2", src: "assets/images/garden2.jpg" },
        { id: "butterfly", src: "assets/sounds/butterfly.mp3" },
        { id: "gamestart", src: "assets/sounds/gamestart1.mp3" },
        { id: "explosion", src: "assets/sounds/explosion.mp3" },
        { id: "flowerpicking", src: "assets/sounds/flowerpicking.mp3" },
           { id: "levelstart", src: "assets/sounds/LevelStart.mp3" },
           { id: "pollen", src: "assets/sounds/explosion.mp3" },
    ];

    // SpriteSheet Data Object
    var spriteSheetData = {
        "images": ["assets/images/atlas2.png"],
        "frames": [
            [346, 434, 211, 69],
            [690, 132, 32, 32],
            [2, 180, 128, 128],
            [2, 310, 128, 128],
            [132, 180, 128, 128],
            [132, 310, 128, 128],
            [230, 2, 128, 128],
            [262, 174, 128, 128],
            [360, 2, 128, 128],
            [262, 304, 128, 128],
            [392, 174, 128, 128],
            [392, 304, 128, 128],
            [490, 2, 128, 128],
            [522, 174, 128, 128],
            [522, 304, 128, 128],
            [620, 2, 128, 128],
            [652, 174, 128, 128],
            [652, 304, 128, 128],
            [750, 2, 128, 128],
            [782, 275, 128, 128],
            [912, 221, 128, 128],
            [1042, 215, 128, 128],
            [2, 2, 210, 176],
            [230, 132, 44, 40],
            [276, 132, 44, 40],
            [322, 132, 44, 40],
            [368, 132, 44, 40],
            [414, 132, 44, 40],
            [460, 132, 44, 40],
            [506, 132, 44, 40],
            [552, 132, 44, 40],
            [598, 132, 44, 40],
            [644, 132, 44, 40],
            [880, 2, 93, 74],
            [880, 78, 93, 74],
            [782, 132, 93, 74],
            [2, 440, 65, 65],
            [69, 440, 65, 65],
            [136, 440, 65, 65],
            [203, 440, 65, 65],
            [877, 154, 65, 65],
            [782, 208, 65, 65],
            [912, 180, 65, 85],
            [559, 434, 211, 69],
            [1113, 345, 64, 60],
            [270, 380, 80, 200],
            [979, 351, 65, 65],
            [985, 418, 65, 65],
            [1046, 345, 65, 65],
            [1052, 412, 65, 65],
            [772, 434, 211, 69],
            [985, 2, 211, 69],
            [985, 73, 211, 69],
            [985, 144, 211, 69]
        ],
        "animations": {
            "backbutton": [0],
            "bigpollen": [1],
            "bigexplosion": {
                frames: [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21],
                next: false,
                speed: 0.5
            },
            "netpic": [22],
            "flowerpic": {
                frames: [23, 24, 25, 26, 27, 28, 29, 30, 31, 32],
                speed: 0.02
            },
            "enemy": {
                frames: [33, 34, 35],
                speed: 1
            },
            "explosion": {
                frames: [36, 37, 38, 39, 40, 41, 42],
                next: false,
                speed: 0.5
            },
            "instructionsButton": [43],
            "plant1": [44],
            "plant2": [45],
            "butterfly": {
                frames: [46, 47, 48],
                speed: 1
            },
            "flickerbutterfly": {
                frames: [48, 49],
                speed: 0.01
            },
            "playButton": [50],
            "startButton": {
                frames: [51, 52],
                speed: 0.05
            },
            "tryAgainButton": [53]
        }
    }

    // Lightning Animation
    var lightningData = {
        "images": ["assets/images/lightningAtlas1.png"],
        "frames": [

            [2, 2, 96, 96],
            [2, 100, 96, 96],
            [2, 198, 96, 96],
            [2, 296, 96, 96],
            [2, 394, 96, 96],
            [100, 2, 96, 96],
            [198, 2, 96, 96],
            [296, 2, 96, 96],
            [394, 2, 96, 96],
            [100, 100, 96, 96],
            [100, 198, 96, 96],
            [100, 296, 96, 96],
            [100, 394, 96, 96],
            [198, 100, 96, 96],
            [296, 100, 96, 96],
            [394, 100, 96, 96],
            [198, 198, 96, 96],
            [198, 296, 96, 96],
            [198, 394, 96, 96],
            [296, 198, 96, 96],
            [394, 198, 96, 96],
            [296, 296, 96, 96],
            [296, 394, 96, 96],
            [394, 296, 96, 96],
            [394, 394, 96, 96]
        ],
        "animations": {

            "lightning": {
                frames: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 17, 18, 19, 20, 21, 22, 23, 24],
                speed: 0.15
            }
        }
    };

    // BitMap Font SpriteSheet Data object
    var bitMapFontData = {
        "images": ["assets/fonts/fontAtlas.png"],
        "frames": [

            [2, 169, 83, 82],
            [768, 166, 32, 81],
            [218, 168, 60, 83],
            [585, 87, 61, 82],
            [307, 85, 68, 81],
            [651, 166, 57, 82],
            [154, 169, 62, 82],
            [525, 170, 58, 81],
            [87, 169, 65, 82],
            [337, 170, 62, 81],
            [275, 2, 82, 81],
            [518, 87, 65, 81],
            [523, 2, 75, 83],
            [600, 2, 75, 80],
            [401, 170, 61, 81],
            [464, 170, 59, 81],
            [2, 84, 83, 83],
            [234, 86, 71, 80],
            [802, 166, 26, 80],
            [713, 84, 61, 80],
            [87, 86, 71, 81],
            [776, 84, 52, 80],
            [442, 2, 79, 80],
            [377, 84, 70, 80],
            [191, 2, 82, 82],
            [648, 84, 63, 80],
            [106, 2, 83, 82],
            [585, 171, 64, 80],
            [280, 168, 55, 83],
            [710, 166, 56, 80],
            [449, 84, 67, 80],
            [359, 2, 81, 80],
            [2, 2, 102, 80],
            [677, 2, 75, 80],
            [754, 2, 73, 80],
            [160, 86, 72, 80]
        ],
        "animations": {

            "0": [0],
            "1": [1],
            "2": [2],
            "3": [3],
            "4": [4],
            "5": [5],
            "6": [6],
            "7": [7],
            "8": [8],
            "9": [9],
            "a": [10],
            "b": [11],
            "c": [12],
            "d": [13],
            "e": [14],
            "f": [15],
            "g": [16],
            "h": [17],
            "i": [18],
            "j": [19],
            "k": [20],
            "l": [21],
            "m": [22],
            "n": [23],
            "o": [24],
            "p": [25],
            "q": [26],
            "r": [27],
            "s": [28],
            "t": [29],
            "u": [30],
            "v": [31],
            "w": [32],
            "x": [33],
            "y": [34],
            "z": [35]
        }
    };

    // Asset Manager Class
    export class Assets {
        public static manifest;
        public static data;

        public static loader;
        public static atlas: createjs.SpriteSheet;
        public static lightningAtlas: createjs.SpriteSheet;
        public static bitMapFont: createjs.SpriteSheet;

        public static init() {
            createjs.Sound.initializeDefaultPlugins();
            createjs.Sound.alternateExtensions = ["mp3"];
            this.loader = new createjs.LoadQueue();
            this.loader.installPlugin(createjs.Sound);
            this.loader.loadManifest(assetManifest);

            this.atlas = new createjs.SpriteSheet(spriteSheetData);
            this.lightningAtlas = new createjs.SpriteSheet(lightningData);
            this.bitMapFont = new createjs.SpriteSheet(bitMapFontData);
        }

    }
} 