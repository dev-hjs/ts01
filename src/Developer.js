class Worker2 {
    constructor() {
        this.name = "홍길동";
    }
    // constructor(name:string){
    //     this.name = name;
    // }
    goForWork() {
        console.log(this.name + "출근 중");
    }
    doWorking() {
        console.log("일 중");
    }
    goOut() {
        console.log("퇴근 중");
    }
}
class Developer extends Worker2 {
    doWorking() {
        console.log(this.name + "개발 중");
    }
}
class Corder extends Worker2 {
    doWorking() {
        console.log("코딩 중");
    }
}
function doTest(w) {
    w.goForWork();
    w.doWorking();
    w.goOut();
}
let dev = new Developer();
doTest(dev);
let cod = new Corder();
doTest(cod);
//# sourceMappingURL=Developer.js.map