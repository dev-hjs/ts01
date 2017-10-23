interface Animal{
    name:string;
    age:number;
    height:number;
    printInfo():void;
}

class Cat implements Animal{
    name:string;
    age:number;
    height:number;
    constructor(name:string, age:number){
        this.name = name;
        this.age = age;
    }
    printInfo(){
        console.log("이름 : " + this.name);
        console.log("나이 : " + this.age);
    }
    printName():void{
        console.log("이름: " + this.name);
    }
}

class Bird implements Animal{
    name:string; 
    age:number;
    height:number;
    kind:string;
    constructor(kind:string){
        this.kind = kind;
    }
    printInfo(){
        console.log("이 새의 종류는 " + this.kind);
    }
}
class Chicken extends Bird{
    constructor(){
        super("닭");
    }
    printInfo() :void{
        super.printInfo();
    }
}

class Egg extends Chicken{

}
let c:Animal = new Chicken();
c.printInfo();
c = new Egg();
c.printInfo();



function printSomething( a:Animal){
    a.printInfo();
}
let dd:Cat = new Cat("동동이",4);
dd.printInfo();
dd.printName();
printSomething(dd);
let d2:Animal = new Cat("사랑이",3);
