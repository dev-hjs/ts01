interface Action{
    speed:number;
    run():string;
    setSpeed(speed:number) : void;
    printAddress():string;
}

class Robot implements Action{
    speed:number = 30;
    run(){
        return "로봇이 " ;
    }
    setSpeed(speed:number):void{
        this.speed = speed;
    }
    printAddress():string{
        return "서울 강서구 등촌1동";
    }
}
class Person implements Action{
    speed:number = 30;
    run(){
        return this.speed + "정도로 뜁니다.";
    }
    setSpeed(speed:number):void{
        this.speed = speed;
    }
    printAddress():string{
        return "서울 강남구 역삼1동";
    }
}


function call(vari:Action){
    console.log(vari.run());
    console.log(vari.printAddress());
}


let p:Action = new Person();
p.setSpeed(50);
call(p);
let r:Action = new Robot();
r.setSpeed(1000);
call(r);

