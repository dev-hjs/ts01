class Cat {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    printInfo() {
        console.log("이름 : " + this.name);
        console.log("나이 : " + this.age);
    }
    printName() {
        console.log("이름: " + this.name);
    }
}
class Bird {
    constructor(kind) {
        this.kind = kind;
    }
    printInfo() {
        console.log("이 새의 종류는 " + this.kind);
    }
}
class Chicken extends Bird {
    constructor() {
        super("닭");
    }
    printInfo() {
        super.printInfo();
    }
}
class Egg extends Chicken {
}
let c = new Chicken();
c.printInfo();
c = new Egg();
c.printInfo();
function printSomething(a) {
    a.printInfo();
}
let dd = new Cat("동동이", 4);
dd.printInfo();
dd.printName();
printSomething(dd);
let d2 = new Cat("사랑이", 3);
//# sourceMappingURL=Animal.js.map