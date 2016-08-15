module objects {
    export class LevelLabel extends objects.Label {
        
        private dx: number;
        
        private width: number;
        constructor(levelText: string) {
            this.x = stage.canvas.width * 0.5;
            this.y = stage.canvas.height * 0.5;
            super(this.x, this.y, levelText);
            
            this.dx = 2;
            
            this.width = this.getBounds().width;
            this.fontSize(50);
            game.addChild(this);
        }

        update() {
            
            this.x += this.dx
            
            if (this.x > (stage.canvas.width + this.width)) {
                this.dx = 0;
            }
        }
    }
} 