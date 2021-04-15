
export class CustomService{

    private course=['Angular 8','React Js','Vue js','JSP'];

    private prod=[
        {
            name:'LG',
            price:10000
        },
        {
            name:'Motorola',
            price:15000
        },
        {
            name:'Realme',
            price:20000
        }
    ];

    constructor(){}

    getCourse(){
        return (this.course);
    }

    getArrObj(){
        return (this.prod);
    }

}