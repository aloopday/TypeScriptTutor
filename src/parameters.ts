type PointPrinter=(p:{x:number;y:number;})=>void;

const point9: Parameters<PointPrinter>[0]={
    x:9,
    y:8
};
console.log(point9);