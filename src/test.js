let userList = new Array();
for (let i = 0; i < 5; i++) {
    addUserList(userList, i);
}
function addUserList(userList, num) {
    userList.push(num);
}
console.log(userList);
let add = function (n1, n2) {
    if (typeof n1 != "number") {
        return "1숫자가 아닙니다.";
    }
    if (typeof n2 != "number") {
        return "3숫자가 아닙니다.";
    }
    return n1 + n2;
};
console.log(add(1, "2"));
class Exam {
}
let examList = new Array();
let e = new Exam();
e.name = "e1";
examList.push(e);
e = new Exam();
e.name = "e2";
examList.push(e);
console.log(examList);
class Lotto {
    constructor() {
        this.numbers = new Array();
        this.makeNumbers();
    }
    makeNumbers() {
        while (this.numbers.length < 6) {
            let num = Math.floor(Math.random() * 20) + 1;
            if (this.valiNumbers(num)) {
                continue;
            }
            this.numbers.push(num);
        }
    }
    valiNumbers(num) {
        return this.numbers.indexOf(num) != -1;
    }
    getNumbers() {
        return this.numbers;
    }
}
let lot = new Lotto();
console.log(lot.getNumbers());
let arrs = [new Lotto(), new Lotto(), new Lotto(), new Lotto(), new Lotto()];
let arrs2 = Array();
arrs2.push(new Lotto());
for (let i in arrs) {
    console.log(arrs[i]);
}
for (let i = 0, max = arrs.length; i < max; i++) {
    console.log(arrs[i]);
}
let mn = new Lotto();
let lot1 = new Lotto();
mn = lot1;
console.log("test");
let test = new Set();
test.add("1");
test.add("2");
test.add("3");
for (let i in test) {
    console.log(i);
}
for (let ttt of test) {
    console.log(ttt);
}
//# sourceMappingURL=test.js.map