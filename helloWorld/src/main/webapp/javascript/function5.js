// function5.js
var result = 100;
console.log(result);

function sum(first, last) {
    var result = first + last;
    console.log(result);
}
sum(10, 20);

var result = 200;
console.log(result);

// let result = 300;
let summay = 100;
console.log(summay);

function block1() {
    let summay = 200;
    console.log(summay);

}

console.log(summay);

for (let i = 0; i < 5; i++) {
    console.log(i);
}
console.log('-------')
// console.log(i);

let myName = 'Hong';
myName = 'Hwang';

const pi = 3.14;
// pi = 3.1415;

const obj = {
    fullName: 'KildongHong',
    birth: '2012-05-04',
    score: 80,
    showInfo: function () {
        return this.fullName + ', ' + this.age;
    },
    showAge: function () {
        let today = new Date();
        let birth = new Date(this.birth);
        let age = today - birth;
        age = age / (1000 * 60 * 60 * 24 * 365)
        age = Math.floor(age);
        return age;
    }
}
console.log(obj.fullName);
obj.age = 30;
console.log(obj.age);

console.log(obj.showInfo());
console.log(obj.showAge() + '살');

// document.write('hello');