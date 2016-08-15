
/*Developed by Aisha Naseem 
by using Mail Pilot Template provided by Professor

*/
module objects {
    export class Pollen extends objects.GameObject {
        game: createjs.Container;
        
        constructor(game: createjs.Container) {
            super("bigpollen");
            this.game = game;
            this.reset();
            this.game.addChild(this);
            
        }
        reset() {
           
            
            this.y = 0;
            this.x = 0;
        }
    }
} 