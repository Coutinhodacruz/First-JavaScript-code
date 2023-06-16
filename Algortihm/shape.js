class Shape{
    constructor(name){
        let _name = name;

        this.getName =() =>{
            return _name;
        }
    }
}

class Rectangle extends Shape{
    constructor(name, side1, side2){
        super(name);
        this.side1 = side1;
        this.side2 = side2;
    }
    getArea = ()=>{
        return this.side1 * this.side2

    }
    isSquare = () =>{
        return this.side1 === this.side2
    }
}

let newShape = new Rectangle("Rectangle ", 5, 5);
console.log(newShape.getArea())
console.log(newShape.isSquare())
