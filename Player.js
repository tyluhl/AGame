class Player{
    constructor(color, right, left, up, down, shoot){
        this._jumpCount = 0;
        this.canJump = false;
        this._gravitySpeed = 0;
        this._leftPressed = false;
        this._upPressed = false;
        this._downPressed = false;
        this._rightPressed = false;
        this._shootPressed = false;
        this._x = Math.round(Math.random() * canvas.width);
        this._y = Math.round(Math.random() * canvas.width);
        this._health = 100;
        this._direction = "CENTER";
        this.rightButton = right;
        this.leftButton = left;
        this.upButton = up;
        this.downButton = down;
        this.shootButton = shoot;
        this._color = color;
        this.playerSize = 1;
        this.playerWidth = playerSize * 40;
        this.playerHeight = playerSize * 100;
    }

    /*drawPlayer() {
        ctx.beginPath();
        ctx.lineWidth = 3;
        ctx.moveTo(this._x + this.playerWidth, this._y + this.playerHeight/5);
        ctx.arc(this._x + this.playerWidth/2, this._y + this.playerHeight/5, this.playerWidth/2, 0, 2 * Math.PI);
        if (this._direction === "CENTER") {
            // changes player's sprite based on where they look

            ctx.moveTo(this._x + this.playerWidth * 16 / 40, this._y + this.playerHeight * 6 / 50);
            ctx.arc(this._x + this.playerWidth * 13 / 40, this._y + this.playerHeight * 6 / 50, this.playerWidth * 3 / 40, 0, 2 * Math.PI);
            ctx.moveTo(this._x + this.playerWidth * 3 / 4, this._y + this.playerHeight * 6 / 50);
            ctx.arc(this._x + this.playerWidth * 27 / 40, this._y + this.playerHeight * 6 / 50, this.playerWidth * 3 / 40, 0, 2 * Math.PI);
            ctx.moveTo(this._x + this.playerWidth * 3 / 4, this._y + this.playerHeight * 22 / 100);
            ctx.arc(this._x + this.playerWidth / 2, this._y + this.playerHeight * 22 / 100, this.playerWidth / 4, 0, Math.PI);
        }
        if (this._direction === "LEFT") {
            // changes player's sprite based on where they look

            ctx.moveTo(this._x + this.playerWidth * 16 / 40, this._y + this.playerHeight * 6 / 50);
            ctx.arc(this._x + this.playerWidth * 13 / 40, this._y + this.playerHeight * 6 / 50, this.playerWidth * 3 / 40, 0, 2 * Math.PI);
            ctx.moveTo(this._x + this.playerWidth * 15 / 40, this._y + this.playerHeight * 12 / 50);
            ctx.arc(this._x + this.playerWidth * 5 / 40, this._y + this.playerHeight * 12 / 50, this.playerWidth / 4, 0, 0.5 * Math.PI);
        }
        if (this._direction === "RIGHT") {
            // changes player's sprite based on where they look

            ctx.moveTo(this._x + this.playerWidth * 3 / 4, this._y + this.playerHeight * 6 / 50);
            ctx.arc(this._x + this.playerWidth * 27 / 40, this._y + this.playerHeight * 6 / 50, this.playerWidth * 3 / 40, 0, 2 * Math.PI);
            ctx.moveTo(this._x + this.playerWidth * 25 / 40, this._y + this.playerHeight * 12 / 50);
            ctx.arc(this._x + this.playerWidth * 35 / 40, this._y + this.playerHeight * 12 / 50, this.playerWidth / 4, Math.PI, .5 * Math.PI, true);
        }

        ctx.moveTo(this._x + this.playerWidth / 2, this._y + this.playerHeight * 2 / 5);
        ctx.lineTo(this._x + this.playerWidth / 2, this._y + this.playerHeight * 4 / 5);
        ctx.lineTo(this._x, this._y + this.playerHeight);
        ctx.moveTo(this._x + this.playerWidth / 2, this._y + this.playerHeight * 4 / 5);
        ctx.lineTo(this._x + this.playerWidth, this._y + this.playerHeight);
        ctx.moveTo(this._x + this.playerWidth / 2, this._y + this.playerHeight * 3 / 5);
        ctx.lineTo(this._x, this._y + this.playerHeight * 2 / 5);
        ctx.moveTo(this._x + this.playerWidth / 2, this._y + this.playerHeight * 3 / 5);
        ctx.lineTo(this._x + this.playerWidth, this._y + this.playerHeight * 2 / 5);
        ctx.strokeStyle = this._color;
        ctx.stroke();
        ctx.closePath();
    }*/

    get color() {
        return this._color;
    }

    set color(value) {
        this._color = value;
    }

    get jumpCount() {
        return this._jumpCount;
    }

    set jumpCount(value) {
        this._jumpCount = value;
    }

    get gravitySpeed() {
        return this._gravitySpeed;
    }

    set gravitySpeed(value) {
        this._gravitySpeed = value;
    }

    get leftPressed() {
        return this._leftPressed;
    }

    set leftPressed(value) {
        this._leftPressed = value;
    }

    get upPressed() {
        return this._upPressed;
    }

    set upPressed(value) {
        this._upPressed = value;
    }

    get downPressed() {
        return this._downPressed;
    }

    set downPressed(value) {
        this._downPressed = value;
    }

    get rightPressed() {
        return this._rightPressed;
    }

    set rightPressed(value) {
        this._rightPressed = value;
    }

    get shootPressed() {
        return this._shootPressed;
    }

    set shootPressed(value) {
        this._shootPressed = value;
    }

    get x() {
        return this._x;
    }

    set x(value) {
        this._x = value;
    }

    get y() {
        return this._y;
    }

    set y(value) {
        this._y = value;
    }

    get health() {
        return this._health;
    }

    set health(value) {
        this._health = value;
    }

    get direction() {
        return this._direction;
    }

    set direction(value) {
        this._direction = value;
    }
}