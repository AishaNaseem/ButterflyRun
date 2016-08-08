module objects {
    export class Pollen extends objects.GameObject {
        game: createjs.Container;
        constructor(game: createjs.Container) {
            super("bigpollen");
            this.game = game;
            this.game.addChild(this);
        }
    }
} 