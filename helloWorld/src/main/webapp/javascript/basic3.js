// basic3.js

var member1 = {
    memberId: 1001,
    memberName: '홍길동',
    memberPhone: '010-1111-1111',
    memberAddr: 'Daegu 100'
}
var member2 = {
    memberId: 1002,
    memberName: '강경빈',
    memberPhone: '010-2222-2222',
    memberAddr: 'Daegu 200'
}
var member3 = {
    memberId: 1003,
    memberName: '예담',
    memberPhone: '010-3333-3333',
    memberAddr: 'Daegu 300'
}
var member4 = {
    memberId: 1004,
    memberName: '동성로',
    memberPhone: '010-4444-4444',
    memberAddr: 'Daegu 400'
}

var members = [member1, member2, member3, member4];

var str = '';
str += '<table id="tbl" border="1">';
str += '<thead><tr>';
for(var field in member1){
    str += `<th>${field}</th>`;
}
str += '</tr></thead>';
str += '<tbody>';
//for(String str : strings) {}
for (var member of members) { //배열의 갯수만큼 반복
    str += '<tr>';
    for(var field in member){ //필드의 갯수만큼 반복
        str += `<td>${member[field]}</td>`;
    }
    str += '</tr>';
}
str += '</tbody></table>';
document.write(str);

// string, number, boolean, array, object
// null, undefined