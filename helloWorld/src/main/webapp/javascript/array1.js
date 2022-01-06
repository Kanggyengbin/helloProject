// array1.js

let delBtn = document.getElementById('delBtn');
delBtn.onclick = function () {
    let sname = document.getElementById('sname').value;
    if(!sname) {
        alert('값을 입력하세요!!');
        return;
    }

    let list = document.querySelectorAll('ul>li');
    console.log(list);
    for (let i = 0; i < list.length; i++) {
        if (list[i].innerText == sname) {
            list[i].style.display = 'none';
        }
    }
}


const numAry = [23, 17, 33, 72, 88];

let sum = 0;
numAry.forEach(function (item, idx, ary) {
    if (idx % 2 == 0)
        sum += item;
}); // forEach : 배열의 각각 요소들에 대해서
console.log(`합계: ${sum}`);

const names = ['김은서', '황보경', '고권영', '류기태', '구자현'];
// const named = window.prompt('삭제할 이름 입력>> ');
// for (i = 0; i < names.length; i++) {
//     if (names[i] == named) {
//         names.splice(i, 1);
//     }
// }
// console.log(names);

// names.splice(1, 2, '누군가'); // splice : (어디서부터, 어디까지, 바꾸는값(여러개 가능)
// names.splice(1, 2); // 대체할값을 안넣으면 삭제
//names.splice(1, 0, '누군가'); // 값을 추가

// let list = document.querySelectorAll('ul:nth-of-type(1)>li');
// console.log(list);
// list.forEach(function (item, idx, ary) {
//     console.log(item, idx, ary);
//     // console.log(item, item.innerHTML);
//     if (idx % 2 == 0)
//         item.innerHTML = '<h3>hello</h3>';
// });