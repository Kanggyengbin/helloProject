const data = [{
    name: '류지희',
    phone: '010-1212-3434',
    addr: '대구 중구 100번지',
    email: 'rjh@email.com'
}, {
    name: '차주연',
    phone: '010-2345-6789',
    addr: '대구 중구 200번지',
    email: 'cjy@email.com'
}, {
    name: '전호민',
    phone: '010-3456-7890',
    addr: '대구 중구 300번지',
    email: 'jhm@email.com'
}];

// thead 영역
function makeHead() {
    const fields = ['Name', 'Phone', 'Addr', 'E-mail'];
    let thd = document.createElement('thead');
    let tr = document.createElement('tr');
    // 체크박스
    let th = document.createElement('th');
    let checkbox = document.createElement('input');
    checkbox.setAttribute('type', 'checkbox');
    checkbox.addEventListener('change', allCheckFnc);
    th.appendChild(checkbox);
    tr.appendChild(th);
    // 필드영역
    fields.forEach(function (field) {
        let th = document.createElement('th');
        let text = document.createTextNode(field);
        th.appendChild(text)
        tr.appendChild(th);
    });
    thd.appendChild(tr);
    return thd;
}

function allCheckFnc() {
    // this => 이벤트를 받는 대상(input)
    // tbody쪽 checkbox 찾아서 for loop 모든 checkbox의 checked = true;
    let cb = document.querySelectorAll('tbody input[type = "checkbox"]');
    for (i = 0; i < cb.length; i++) {
        cb[i].checked = this.checked;
    }

}

// tbody 영역
function makeBody() {
    let tbd = document.createElement('tbody');
    data.forEach(function (obj) {
        let tr = makeTr(obj);
        tbd.appendChild(tr);
    });
    return tbd;
}
// tr 생성
function makeTr(item) {
    let tr = document.createElement('tr');
    // 체크박스
    let td = document.createElement('td');
    let checkbox = document.createElement('input');
    checkbox.setAttribute('type', 'checkbox');
    td.appendChild(checkbox);
    tr.appendChild(td);
    // 데이터영역
    for (let field in item) {
        let td = document.createElement('td');
        let text = document.createTextNode(item[field]);
        td.appendChild(text);
        tr.appendChild(td);
    }
    return tr;
}

// 즉시 실행 함수
(function drawTable() {
    let tbl = document.createElement('table');
    tbl.setAttribute('border', '1');
    tbl.appendChild(makeHead());
    tbl.appendChild(makeBody());
    document.getElementById('list').appendChild(tbl);
}());
//drawTable();

// 등록버튼 이벤트
let addBtn = document.querySelector('#btn>button');
addBtn.addEventListener('click', addCallback);

function addCallback() {
    let name = document.querySelector('input[name="name"]').value;
    let phone = document.querySelector('input[name="phone"]').value;
    let addr = document.querySelector('input[name="addr"]').value;
    let email = document.querySelector('input[name="email"]').value;

    if (name == "" || phone == "" | addr == "" || email == "") {
        window.alert('필수값을 입력하세요!!');
        return;
    }

    let obj = {
        name: name,
        phone: phone,
        addr: addr,
        email: email
    }
    let tr = makeTr(obj);
    document.querySelector('#list>table>tbody').appendChild(tr);
}

// 삭제버튼 이벤트등록
let delBtn = document.querySelector('#btn>button:nth-child(2)');
delBtn.addEventListener('click', delCallback);

function delCallback() {
    let chks = document.querySelectorAll('tbody input[type="checkbox"]');
    for (let i = 0; i < chks.length; i++) {
        if (chks[i].checked == true) {
            chks[i].parentNode.parentNode.remove();
        }
    }
}


// 리스트 -> 입력화면에 보여주기
let names = document.querySelectorAll('table tbody tr td:nth-child(2)');
for (let i = 0; i < names.length; i++) {
    names[i].addEventListener('click', showInfo);
}

function showInfo() {
    let parent = this.parentNode;
    console.log(parent.childNodes[2].innerText);
    
    document.querySelector('input[name="name"]').value //
    = parent.childNodes[1].innerText;    
}

let phone = document.querySelectorAll('table tbody tr td:nth-child(3)');
for (let i = 0; i < phone.length; i++) {
    names[i].addEventListener('click', showInfo2);
}

function showInfo2() {
    let parent = this.parentNode;
    console.log(parent.childNodes[2].innerText);
    
    document.querySelector('input[name="phone"]').value //
    = parent.childNodes[2].innerText;    
}

let addr = document.querySelectorAll('table tbody tr td:nth-child(4)');
for (let i = 0; i < addr.length; i++) {
    names[i].addEventListener('click', showInfo3);
}

function showInfo3() {
    let parent = this.parentNode;
    console.log(parent.childNodes[2].innerText);
    
    document.querySelector('input[name="addr"]').value //
    = parent.childNodes[3].innerText;    
}

let email = document.querySelectorAll('table tbody tr td:nth-child(5)');
for (let i = 0; i < addr.length; i++) {
    names[i].addEventListener('click', showInfo4);
}

function showInfo4() {
    let parent = this.parentNode;
    console.log(parent.childNodes[2].innerText);
    
    document.querySelector('input[name="email"]').value //
    = parent.childNodes[4].innerText;    
}