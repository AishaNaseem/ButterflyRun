﻿/*Developed by Aisha Naseem 
by using Mail Pilot Template provided by Professor

*/
module objects {
    export class LevelLabel extends objects.Label {
        //private dy: number;
        private dx: number;
        //private height: number;
        private width: number;
        constructor(levelText: string) {
            super(0, 0, levelText);

            this.x = stage.canvas.width * 0.5;
            this.y = stage.canvas.height * 0.5;
            //this.dy = 2;
            this.dx = 2;
            //this.height = this.getBounds().height;
            this.width = this.getBounds().width;
            this.fontSize(50);
            game.addChild(this);
        }

        update() {
            // this.y += this.dy
            this.x += this.dx
            //if (this.y > (stage.canvas.height + this.height)) {
            //  this.dy = 0;
            if (this.x > (stage.canvas.width + this.width)) {
                this.dx = 0;
            }
        }
    }
} 