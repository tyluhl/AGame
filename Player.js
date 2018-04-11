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
    }


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