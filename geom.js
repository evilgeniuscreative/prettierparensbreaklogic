class Shape {
    constructor(numSides, color) {
        this.numSides = numSides;
        this.color = color;
    }
}

class Rectangle {
    constructor(length, width) {
        this.length = length;
        this.width = width;
    }

    isSquare() {
        let test = this.length === this.width;
        return test;
    }

    area() {
        let test = this.length * this.width;
        return test;
    }

    perimiter() {
        let test = this.length * 2 + this.width * 2;
        return test;
    }
}

class Triangle {
    constructor(sideA, sideB, sideC) {
        this.sideA = sideA;
        this.sideB = sideB;
        this.sideC = sideC;
    }
    isEquilateral() {
        let test = this.sideA === this.sideB && this.sideB === this.sideC;
        return test;
    }
    isIcoseles() {
        if (
            (!(this.sideA === this.sideB && this.sideB === this.sideC) && this.sideA === this.sideB && this.sideA === this.sideC) ||
            (this.sideB === this.sideC && this.sideA === this.sideB) ||
            (this.sideC === this.sideA && this.sideA === this.sideB)
        ) {
            return true;
        } else {
            return false;
        }
    }
    area() {
        let b = Math.min(this.sideA, this.sideB, this.sideC);
        let h = Math.max(this.sideA, this.sideB, this.sideC);
        let a = 0.5 * (b * h);
        return a;
    }
    isObtuse() {
        // get the longest, shortest, and other side
        let b = Math.min(this.sideA, this.sideB, this.sideC);
        let h = Math.max(this.sideA, this.sideB, this.sideC);
        let o = [this.sideA, this.sideB, this.sideC].filter((s) => {
            if (s !== b && s !== h) {
                return s;
            }
            console.log('obtuse s', s);
        });
        // PRETTIER REMOVES THESE PARENTHESES AND BREAKS THE LOGIC. THIS IS JUST ONE EXAMPLE. 
        if (Math.pow(h, 2) > ( Math.pow(b, 2) + Math.pow(o, 2) ) ) {
            return true;
        } else {
            return false;
        }
    }
}

class LineSegment {
    constructor(x1, y1, x2, y2) {
        this.x1 = x1;
        this.y1 = y1;
        this.x2 = x2;
        this.y2 = y2;
    }
    length() {}
}

console.log('\r\n//--------------  RECTANGLES  ----------------//\r\n');

const rectA = new Rectangle(5, 5);
console.log(`rectA has sides of ${rectA.width} and ${rectA.length}`);
console.log('rectA is square? ', rectA.isSquare());
console.log('rectA has total area of? ', rectA.area());
console.log('rectA has total perimeter of? ', rectA.perimiter());

const rectB = new Rectangle(6, 7);
console.log(`rectB has sides of ${rectB.width} and ${rectB.length}`);
console.log('rectB is square? ', rectB.isSquare());
console.log('rectB has total area of? ', rectB.area());
console.log('rectB has total perimeter of? ', rectB.perimiter());

const rectC = new Rectangle(11, 11);
console.log(`rectC has sides of ${rectC.width} and ${rectC.length}`);
console.log('rectC is square? ', rectC.isSquare());
console.log('rectC has total area of? ', rectC.area());
console.log('rectC has total perimeter of? ', rectC.perimiter());

console.log('\r\n//--------------  TRIANGLES  ----------------//\r\n');
const triA = new Triangle(5, 5, 5);
console.log(`triA has sides of ${triA.sideA}, ${triA.sideB}, and ${triA.sideC}`);
console.log('triA is equilateral? ', triA.isEquilateral());
console.log('triA is Isosceles? ', triA.isIcoseles());
console.log('triA is Obtuse? ', triA.isObtuse());
console.log('triA area is? ', triA.area());

const triB = new Triangle(5, 6, 8);
console.log(`triB has sides of ${triB.sideA}, ${triB.sideB}, and ${triB.sideC}`);
console.log('triB is equilateral? ', triB.isEquilateral());
console.log('triB is Isosceles? ', triB.isIcoseles());
console.log('triB is Obtuse? ', triB.isObtuse());
console.log('triB area is? ', triB.area());

const triC = new Triangle(12, 5, 5);
console.log(`triC has sides of ${triC.sideA}, ${triC.sideB}, and ${triC.sideC}`);
console.log('triC is equilateral? ', triC.isEquilateral());
console.log('triC is Isosceles? ', triC.isIcoseles());
console.log('triC is Obtuse? ', triC.isObtuse());
console.log('triC area is? ', triC.area());

console.log('\r\n//--------------  LINE SEGMENTS  ----------------//\r\n');

console.log('\r\n//--------------  SHAPE  ----------------//\r\n');

// NOTE: DO NOT REMOVE OR ALTER
module.exports = {
    Rectangle: Rectangle,
    Triangle: Triangle,
    LineSegment: LineSegment
};
