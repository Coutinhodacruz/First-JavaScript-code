class Vec {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    plus(other) {
        return new Vec(this.x + other.x, this.y + other.y);
    }

    minus(other) {
        return new Vec(this.x - other.x, this.y - other.y);
    }

    get length() {
        return Math.sqrt(Math.pow(this.x, 2) + Math.pow(this.y, 2));
    }
}

let v1 = new Vec(1, 2);
let v2 = new Vec(3, 4);

let v3 = v1.plus(v2);
console.log(v3);

let v4 = v1.minus(v2);
console.log(v4);

let v5 = new Vec(3, 4);
console.log(v5.length);

