/*Developed by Aisha Naseem 
by using Mail Pilot Template provided by Professor

*/
/// <reference path="net.ts" />
/// <reference path="../managers/asset.ts" />
module objects {
    export class Lightning extends createjs.Sprite {
        net: createjs.Sprite;
        width: number;
        height: number;
        constructor(net: createjs.Sprite) {
            super(managers.Assets.lightningAtlas, "lightning");
            this.net = net;

            if (screenScale < 1) {
                // Adjust lightning to Screen Scale
                this.scaleX = screenScale;
                this.scaleY = screenScale;
                this.setBounds(this.regX, this.regY, this.scaleX * this.getBounds().width, this.scaleY * this.getBounds().height);
            }
            else {
                this.scaleX = 2;
                this.scaleY = 2;
            }

            this.width = this.getBounds().width;
            this.height = this.getBounds().height;
            this.regX = this.width * 0.5;
            this.regY = this.height * 0.5;
            this.x = this.net.x;
            this.y = this.net.y;

        }

        update() {
            this.x = this.net.x;
            this.y = this.net.y;
        }

    }
} 