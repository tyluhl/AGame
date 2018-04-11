class Zombie{
    constructor(health, damage, x, y, size, speed){
        this.moveRight = false;
        this.moveLeft = false;
        this._health = health;
        this._damage = damage;
        this._x = x;
        this._y = y;
        this._size = size;
        this._speed = speed;
    }


    get health() {
        return this._health;
    }

    set health(value) {
        this._health = value;
    }

    get damage() {
        return this._damage;
    }

    set damage(value) {
        this._damage = value;
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

    get size() {
        return this._size;
    }

    set size(value) {
        this._size = value;
    }

    get speed() {
        return this._speed;
    }

    set speed(value) {
        this._speed = value;
    }
}