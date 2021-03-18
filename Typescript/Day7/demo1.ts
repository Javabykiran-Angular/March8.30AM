 
 export class Myclass{
    //property
    
   public fname:string;
   private  lname:string;
   protected id:number;

    constructor(fname:string,lname:string,id:number){
            this.fname=fname;
            this.lname=lname;
            this.id=id;
    }

    dispaly(){
        console.log(`
            First Name :: ${this.fname}
            Last name :: ${this.lname}
            Id        :: ${this.id}
        `);
    }

 }

//  var obj=new Myclass('Sumit','Raokhande',9);
//  obj.dispaly();

export function add(a:number,b:number){
        return (a+b);
}

export const pi=3.14;




 