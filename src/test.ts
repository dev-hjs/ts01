
let userList:Array<number> = new Array<number>();

for(let i:number = 0;i<5;i++){
    addUserList(userList,i);
}

function addUserList(userList:Array<number>,
    num:number){
    userList.push(num);
}

console.log(userList);

let add
=function(n1:number|string, 
n2:number|string):number|string{
    if(typeof n1 != "number") {
        return "1숫자가 아닙니다.";
    }
    if(typeof n2 != "number") {
        return "3숫자가 아닙니다.";
    }
    return n1+n2;
}
console.log(add(1,"2"));

class Exam{
    public name:string;
}

let examList:Array<Exam> = new Array<Exam>();

let e:Exam = new Exam();
e.name = "e1";
examList.push(e);

e = new Exam();
e.name = "e2";
examList.push(e);
console.log(examList);

interface MakeNumbers{

}
class Lotto implements MakeNumbers{
    private numbers:Array<number>;
    constructor(){
        this.numbers = new Array<number>();
        this.makeNumbers();
    }
    private makeNumbers():void{
        while(this.numbers.length<6){
            let num:number = Math.floor(Math.random()*20)+1;
            if(this.valiNumbers(num)){
                continue;
            }
            this.numbers.push(num);
        }
    }
    private valiNumbers(num:number):boolean{
        return this.numbers.indexOf(num)!=-1;
    }
    public getNumbers():Array<number>{
        return this.numbers;
    }
}

let lot:Lotto = new Lotto();
console.log(lot.getNumbers());

let arrs:MakeNumbers[] = [new Lotto(),new Lotto(),new Lotto(),new Lotto(),new Lotto()];

let arrs2:Array<MakeNumbers>
=Array<MakeNumbers>();
arrs2.push(new Lotto());



for(let i in arrs){
    console.log(arrs[i]);
}
for(let i:number=0, max:number=arrs.length;i<max;i++){
    console.log(arrs[i]);
}

let mn:MakeNumbers = new Lotto();

let lot1:Lotto = new Lotto();
mn = lot1;

console.log("test");
let test:Set<string> = new Set<string>();
test.add("1");
test.add("2");
test.add("3");

for(let i in test){
    console.log(i);
}

for(let ttt of test){
    console.log(ttt);
}
