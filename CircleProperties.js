class circle{
    constructor(radius){
        this.radius=radius;
    }
    getArea=()=>{
        return (3.14*radius*radius);
    }
    getPerimeter=()=>{
        return (2*3.14*radius);
    }
}
let radius=1;
c=new circle(radius);
console.log(c.getArea());
console.log(c.getPerimeter());