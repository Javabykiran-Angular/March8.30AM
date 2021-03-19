import {Shape} from './demo1';

export class Circle extends Shape {
    radius:number;
    area:number;

    constructor(radius:number){
        super();
      this.radius=radius;
      this.area=0;
    }

    Myarea(){
        this.area=3.14*this.radius*this.radius;
    }
    
    Display(){
        console.log(`
        --------Circle Area-----------
            Radius :: ${this.radius}
            Area   :: ${this.area}
        `);
    }



}
