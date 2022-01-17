//dom_z.js
// ID값이 없을때
let btns = document.getElementsByTagName('button');
btns[0].addEventListener('click', delFnc);

function delFnc() {
    let inputs = document.getElementsByTagName('input');
    let sname = inputs[0].value;

    let list = document.getElementsByTagName('li');
    // console.log(list);
    for (let i = 0; i < list.length; i++) {
        console.log(list[i].innerText)
        if (list[i].innerText == sname) {
            list[i].remove();
        }
    }
}

btns[0].addEventListener('click', addFnc);

function addFnc() {
    let inputs = document.getElementsByTagName('input');
    let sname = inputs[0].value;

    let li = document.createElement('li');
    let text = document.createTextNode(sname);
    li.appendChild(text);

    document.getElementsByTagName('ul')[0].appendChild(li);
    
}