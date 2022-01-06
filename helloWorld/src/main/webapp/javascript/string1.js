// string1.js
const person = {
    fullName: 'Hong',
    age: 10,
    toString: function () {
        return this.fullName + ', ' + this.age;
    }
}

person.fullName = 'Hwang';
person.toString();

const str = 'Hwang';
str.length;
str.substring(1, 5);
let newStr = str.substring(1, 5);
newStr = str.slice(-3, -1); // 음수면 오른쪽부터

newStr = str.replace('a', ',').replace(',', '.');
console.log(newStr);

// 주민번호 : 000101-3123456, 990101-2123456
//           850101-1234567, 870101 2123456, 9201012123456
// 남자/여자 구별하는 function
function getGender(jm) {
    if (jm.length != 13 && jm.length != 14) {
        return; // 함수 종료
    }
    // 7번째 위치 1,3:남자, 2,4:여자
    let qwe = jm.replace('-', '').replace(' ', '').substring(6, 7);
    qwe = jm.slice(-7, -6);
    let gender = '남자';

    if (qwe == '1' || qwe == '3') {
        gender = "남자";
    } else if (qwe == '2' || qwe == '4') {
        gender = "여자";
    } else {
        gender = 'None';
    }
    return gender;
}
console.log(getGender('850101-1234567'));
console.log(getGender('870101 2123456'));
console.log(getGender('9201012123456'));
console.log(getGender('92010121234561234'));


console.log('hello'.toUpperCase().toLowerCase());

let str1 = 'hello',
    str2 = 'world';
console.log(str1.concat(' ', str2, '!!')); //concat : 문장을 연결해줌

let str3 = str1.concat(' ', str2, '!!');
console.log(str3);

let pos = str3.charAt(2); //charAt : 인덱스값을 넣어주면 해당되는 위치 문자를 출력해줌
console.log(pos);
// hello world!!
let ary = str3.split('');
for (let str of ary) {
    console.log(str);
}

let temp = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit quisquam non sint animi temporibus ad corrupti sit mollitia nihil itaque, voluptatem, libero provident id, deleniti corporis cum asperiores cumque maiores?';
let tempAry = temp.split(' ');
console.log(tempAry.length);

let fruits = 'Apple Banana Cherry Melon';
let fruit = prompt('과일입력: ');
// banana, BANANA, BAnana
function getLoc(fruit) {
    // 0, null, '', undefined => false
    if (!fruit) {
        return;
    }
    let temp = fruits.split(' ');
    let cnt = 0;
    for (let i = 0; i < temp.length; i++) {
        if (temp[i].toUpperCase() == fruit.toUpperCase()) {
            cnt = i + 1; //0부터 시작하니깐 1더하고
        }
    }
    if (cnt == 0) {
        return '만족하는 값이 없습니다.';
    }
    return cnt + '번째';
}
console.log(getLoc(fruit));