// basic2.js

var fruits = ['Apple', 'Banana', 'Cherry'];
var str = '';
//document.write('<ul>');
str += '<ul>';
for (var i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
    //str += '<li>' + fruits[i] + '</li>';
    str += `<li>${fruits[i]}</li>`;
    //document.write('<li>' + fruits[i] + '</li>');
}
str += '</ul>';
//document.write('</ul>');
document.write(str);
// 10 + '20' => 1020
var numbers = [10, '20', 30, 40];
console.log(numbers.length);
var sum = 0;
for (var i = 0; i < numbers.length; i++) {
    // Integer.parseInt('30')
    sum += parseInt(numbers[i]);
}
console.log(`합계 : ${sum}`);

var student1 = {
    name: 'Hong',
    age: 20,
    score: 80
};

// for .. in => object의 필드속성을 반복.
for(var field in student1) {
    console.log(field, student1[field]);
}

var student2 = {
    name: 'Hwang',
    age: 22,
    score: 83
}
var student3 = {
    name: 'Park',
    age: 25,
    score: 85
}

var students = [student1, student2, student3];

str = '';
str += '<table border="1">';
str += '<thead><tr>';
for(var field in student1){
    str += `<th>${field}</th>`;
}
str += '</tr></thead>';
str += '<tbody>';
for (var i = 0; i < students.length; i++) {
    var field = 'score';
    console.log(`${i+1}번째 name=> ${students[i].name}`);
    console.log(`${i+1}번째 age=> ${students[i]['age']}`);
    console.log(`${i+1}번째 score=> ${students[i][field]}`);
    str += '<tr>';
    for(var field in student1){
        str += `<td>${students[i][field]}</td>`;
    }
    str += '</tr>';
}
str += '</tbody></table>';
document.write(str);
