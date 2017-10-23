enum Computer{Desktop, Laptop,Netbook};

let cp:Computer = Computer.Laptop;

console.log(cp);

function examReturn():string{
    console.log("examReturn함수 호출");
    return "examReturn함수 호출";
}

function examVoid():void{
    console.log("examVoid함수 호출");
}

let a:string;
a = examReturn();
console.log(a);
examVoid();

let testArr : Array<number> = [1,2,3];
console.log(testArr);

class EE{
    name:string = "nam";
    pc:Computer;
    constructor(pc:Computer){
        this.pc = pc;
    }
    printInfo() : void{
        console.log(name + "님이 가지고 계신 pc는 " + this.pc + "입니다.");
    }
}
let ee:EE = new EE(Computer.Laptop);
ee.printInfo();



let str1 : string = "str";
let str2 : string = "str";
let str3 : String = new String("str");
let str4 : String = new String("str1");

String.prototype.equals = function(str){
    if(typeof str=="object"){
        return str.toString()==this.toString();
    }
}
console.log("str1==str2 : " + (str1==str2));
console.log("str1==str3 : " + (str1==str3));
console.log("str3==str41 : " + (str3==str4));
console.log("str1===str2 : " + (str1===str2));
console.log("str1===str3 : " + (str1===str3));
console.log("str3===str41 : " + (str3===str4));
console.log("str3 equals str4 : " + (str3.equals(str4)));
console.log(str4.toString());
console.log(str3.toString());


