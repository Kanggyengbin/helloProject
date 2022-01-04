// operator.js
//var iVal = window.prompt("값을 입력");
var iVal = 0;
console.log(iVal);
var numAry = [3, 9, 20, 14, 8, 22];

var sum = 0;
for (var num of numAry) {
    console.log(num);
    if (num % 2 == 0) {
        sum += num;
    }
    if (num === parseInt(iVal)) { // "===" 타입까지 비교
        break;
    }
}

console.log(`합계는 ${sum}`);

console.log(3 + '5' + (3 + 4));

var sum_2 = 0; //2의 배수만 담을 변수
var sum_3 = 0; //3의 배수만 담을 변수
var sum_23 = 0; //2와 3의 공통된 배수를 담을 변수
for (var i = 1; i <= 20; i++) {
    if (i % 2 == 0 && i % 6 != 0) {
        sum_2 += i;
    }
    if (i % 3 == 0 && i % 6 != 0) {
        sum_3 += i;
    }
    if (i % 6 == 0) {
        sum_23 += i;
    }
}

console.log(`2의 배수 합계: ${sum_2}`);
console.log(`3의 배수 합계: ${sum_3}`);
console.log(`2와3의 배수 합계: ${sum_23}`);