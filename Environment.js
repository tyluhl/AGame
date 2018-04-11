
class Environment{

    constructor(startx, starty, width, height){
        this._startx = startx;
        this._starty = starty;
        this._width = width;
        this._height = height;

    }

    get startx() {
        return this._startx;
    }

    get starty() {
        return this._starty;
    }

    get width() {
        return this._width;
    }

    get height() {
        return this._height;
    }
}

