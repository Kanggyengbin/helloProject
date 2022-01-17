const data = [{
    s1: 'P12301285',
    s2: '이것이 자바다',
    s3: '홍성문',
    s4: '신흥출판사',
    s5: '25,000원',
}, {
    s1: 'P12301285',
    s2: '이것이 자바다',
    s3: '홍성문',
    s4: '신흥출판사',
    s5: '25,000원',
}, {
    s1: 'P12301285',
    s2: '이것이 자바다',
    s3: '홍성문',
    s4: '신흥출판사',
    s5: '25,000원',
}, {
    s1: 'P12301285',
    s2: '이것이 자바다',
    s3: '홍성문',
    s4: '신흥출판사',
    s5: '25,000원',
}, {
    s1: 'P12301285',
    s2: '이것이 자바다',
    s3: '홍성문',
    s4: '신흥출판사',
    s5: '25,000원',
}];

function makeHead() {
    const fields = ['도서코드', '도서명', '저자', '출판사', '가격', '삭제'];
    let thd = document.createElement('thead');
    let tr = document.createElement('tr');
    tr.setAttribute('id', 'title');
    //체크박스
    let th = document.createElement('th');
    let checkbox = document.createElement('input');
    checkbox.setAttribute('type', 'checkbox');
    checkbox.addEventListener('change', allCheckFnc);
    th.appendChild(checkbox);
    tr.appendChild(th);
    //필드영역
    fields.forEach(function (field) {
        let th = document.createElement('th');
        let text = document.createTextNode(field);
        th.appendChild(text);
        tr.appendChild(th);
    });
    thd.appendChild(tr);
    return thd;
}

function allCheckFnc() {
    let cb = document.querySelectorAll('tbody input[type = "checkbox"]');
    for (i = 0; i < cb.length; i++) {
        cb[i].checked = this.checked;
    }
}

// tbody 영역
function makeBody() {
    let tbd = document.createElement("tbody")
    data.forEach(function (obj) {
        tbd.appendChild(makeTr(obj))
    })
    return tbd
}

// tr 생성
function makeTr(obj) {
    let tr = document.createElement("tr")

    // 체크박스
    let td = document.createElement("td")
    td.setAttribute('id', 'title2');
    let checkbox = document.createElement("input")
    checkbox.setAttribute("type", "checkbox")
    td.appendChild(checkbox)
    tr.appendChild(td)

    for (let field in obj) {
        let td = document.createElement("td")
        td.setAttribute('id', 'title2');
        let text = document.createTextNode(obj[field])
        td.appendChild(text)
        tr.appendChild(td)
    }

    // 삭제버튼
    td = document.createElement("td")
    let button = document.createElement("button")
    button.setAttribute("id", "del")
    button.textContent = "삭제"
    button.onclick = function (e) {
        e.target.parentNode.parentNode.remove()
    }
    let text = document.createTextNode("삭제")
    td.appendChild(button)
    tr.appendChild(td)
    return tr
}


// 즉시 실행 함수
(function drawTable() {
    let tbl = document.createElement('table');
    tbl.setAttribute('border', '0');
    tbl.appendChild(makeHead());
    tbl.appendChild(makeBody());
    document.getElementById('list').appendChild(tbl);
}());

// 등록버튼 이벤트
let addBtn = document.querySelector('#btn>button');
addBtn.addEventListener('click', addCallback);

function addCallback() {
    let bc = document.querySelector('input[name="bc"]').value;
    let bn = document.querySelector('input[name="bn"]').value;
    let bw = document.querySelector('input[name="bw"]').value;
    let bh = document.querySelector('input[name="bh"]').value;
    let pr = document.querySelector('input[name="pr"]').value;

    if (bc == "" || bn == "" | bw == "" || bh == "" || pr == "") {
        window.alert('필수값을 입력하세요!!');
        return;
    }

    let obj = {
        bc: bc,
        bn: bn,
        bw: bw,
        bh: bh,
        pr: pr
    };
    let tr = makeTr(obj);
    document.querySelector('#list>table>tbody').appendChild(tr);
    let de = document.querySelectorAll("input");
    for (var i = 0; i < de.length; i++) {
        de[i].value = "";
    }
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