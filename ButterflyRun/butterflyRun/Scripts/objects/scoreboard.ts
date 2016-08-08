/// <reference path="label.ts" />
module objects {
    // Scoreboard Class
    export class Scoreboard {
        game: createjs.Container;
        lives: number;
        score: number;
        pollencount: number;
        pollencountValueLabel: objects.Label;
        pollencountLabel: objects.Label;
        pollencountValueLabelString: string = "";
        highScore: number;
        currentLevel: number;
        livesValueLabel: objects.Label;
        livesLabel: objects.Label;
        scoreValueLabel: objects.Label;
        livesValueLabelString: string = "";
        scoreLabel: objects.Label;
        scoreValueLabelString: string = "";

        constructor(game: createjs.Container) {
            this.game = game;
            this.lives = constants.PLANE_LIVES;
            this.score = 0;
            this.pollencount = 0;

            this.livesLabel = new objects.Label(stage.canvas.width * 0.10, 0, "lives");
            this.livesLabel.regX = 0;
            this.livesLabel.regY = 0;
            this.livesLabel.fontSize(20);

            this.livesValueLabel = new objects.Label(stage.canvas.width * 0.10, 40, this.lives.toString());
            this.livesValueLabel.regX = 0;
            this.livesValueLabel.regY = 0;
            this.livesValueLabel.fontSize(20);

            this.pollencountLabel = new objects.Label(stage.canvas.width * 0.30, 0, "pollen");
            this.pollencountLabel.regX = 0;
            this.pollencountLabel.regY = 0;
            this.pollencountLabel.fontSize(20);

            this.pollencountValueLabel = new objects.Label(stage.canvas.width * 0.30, 40, this.pollencount.toString());
            this.pollencountValueLabel.regX = 0;
            this.pollencountValueLabel.regY = 0;
            this.pollencountValueLabel.fontSize(20);


            this.scoreLabel = new objects.Label(stage.canvas.width * 0.60, 0, "score");
            this.scoreLabel.regX = 0;
            this.scoreLabel.regY = 0;
            this.scoreLabel.fontSize(20);

            this.scoreValueLabel = new objects.Label(stage.canvas.width * 0.60, 40, this.score.toString());
            this.scoreValueLabel.regX = 0;
            this.scoreValueLabel.regY = 0;
            this.scoreValueLabel.fontSize(20);

            // Adjust Scoreboard for Screen Size
            if (screenScale < 1) {
                this.livesLabel.fontSize(25);
                this.livesValueLabel.fontSize(25);
                this.scoreLabel.fontSize(25);
                this.scoreValueLabel.fontSize(25);
            }
            this.currentLevel = 1;

            this.update();

            this.showScoreBoard();
        }

        showScoreBoard() {
            game.addChild(this.livesLabel);
            game.addChild(this.livesValueLabel);
            game.addChild(this.scoreLabel);
            game.addChild(this.scoreValueLabel);
            game.addChild(this.pollencountLabel);
            game.addChild(this.pollencountValueLabel);

        }


        update() {
            this.livesValueLabelString = this.lives.toString();
            this.livesValueLabel.text = this.livesValueLabelString;

            this.scoreValueLabelString = this.score.toString();
            this.scoreValueLabel.text = this.scoreValueLabelString;
            this.pollencountValueLabelString = this.pollencount.toString();
            this.pollencountValueLabel.text = this.pollencountValueLabelString;

        }


        destroy() {
            game.removeChild(this.livesLabel);
            game.removeChild(this.livesValueLabel);
            game.removeChild(this.scoreLabel);
            game.removeChild(this.scoreValueLabel);
            game.removeChild(this.pollencountLabel);
            game.removeChild(this.pollencountValueLabel);

        }

        
    }
} 