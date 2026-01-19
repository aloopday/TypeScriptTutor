
interface Point{
    x: number;
    y: number;
}

let pointPart: Partial<Point> ={};
// 'partial' allows x and y to be optional 
pointPart.x=10;
console.log(pointPart);

