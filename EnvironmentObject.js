class environment{

    constructor(startPoint, endPoint, width, height){
        this.startPoint = startPoint;
        this.endPoint = endPoint;
        this.width = width;
        this.height = height;
        ctx.beginPath();
        ctx.rect(startPoint, endPoint, width, height);
        ctx.fillStyle = "#000000";
        ctx.fill();
        ctx.closePath();
    }


}