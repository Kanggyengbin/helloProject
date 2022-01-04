// control.js
var num = prompt('점수를 입력하세요: ');
var grade = 'F'
if (num >= 95) {
    grade = 'A+'; // 90~94:A, 95~A+
}else if (num >= 90) { //80~84:B, 85~89:B+
    grade = 'A';
} else if (num >= 85) {
    grade = 'B+';
} else if (num >= 80) {
    grade = 'B';
}
// num = parseInt(num / 10); // 95/10=9.5
// switch (num) {
//     case 90:
//         grade = 'A';
//     case 80:
//         grade = 'B';
//     case 7:
//         grade = 'C';
//     case 6:
//         grade = 'D';
//     default:
//         grade = 'F';
// }
document.write(`점수는 : ${num} 이고 등급은 ${grade} 입니다.`);