class Robot {
    constructor() {
        this.speed = 30;
    }
    run() {
        return "로봇이 ";
    }
    setSpeed(speed) {
        this.speed = speed;
    }
    printAddress() {
        return "서울 강서구 등촌1동";
    }
}
class Person {
    constructor() {
        this.speed = 30;
    }
    run() {
        return this.speed + "정도로 뜁니다.";
    }
    setSpeed(speed) {
        this.speed = speed;
    }
    printAddress() {
        return "서울 강남구 역삼1동";
    }
}
function call(vari) {
    console.log(vari.run());
    console.log(vari.printAddress());
}
let p = new Person();
p.setSpeed(50);
call(p);
let r = new Robot();
r.setSpeed(1000);
call(r);
//# sourceMappingURL=interface.js.map