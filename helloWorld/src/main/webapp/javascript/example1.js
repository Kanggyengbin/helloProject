// example1.js

const students = [{
    fullName: '류지희',
    studNo: '1001',
    score: 80
}, {
    fullName: '차주연',
    studNo: '1002',
    score: 85
}, {
    fullName: '전호민',
    studNo: '1003',
    score: 83
}];

// document.write('<ul>');
// for (i = 0; i < students.length; i++) {
//     document.write(`<li>${students[i].fullName} - ${students[i].studNo} - ${students[i].score}</li>`);
// }
// document.write('</ul>');

students.push({
    fullName: '홍정우',
    studNo: '1004',
    score: 88
});

students.unshift({
    fullName: '고스트',
    studNo: '1005',
    score: 90
});

students.pop(); //끝배열값 제거
// students.shift(); //앞배열값 제거


document.write('<ul>');
students.forEach(liFnc); // callback function
document.write('</ul>');

function liFnc(item) {
    document.write(`<li>${item.studNo} - ${item.fullName} - ${item.score}</li>`);
}

// 배열에 값을 추가
const numAry = [1, 2, 3];
numAry.push(4); // push : 맨마지막에 추가
numAry.push(10);
numAry.unshift(40); // unshift : 맨앞에 추가

console.log(numAry)