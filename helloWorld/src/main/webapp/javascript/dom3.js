//dom3.js
// dom 생성

let div = document.createElement("div");
div.setAttribute("id", "show");

let input = document.createElement("input");
input.setAttribute("type", "text");
input.setAttribute("value", "test");

let delBtn = document.createElement("button");
let deltext = document.createTextNode("조회삭제");
delBtn.appendChild(deltext);
let addBtn = document.createElement("button");
let addtext = document.createTextNode("추가");
addBtn.appendChild(addtext);

let names = ["김은서", "황보경", "고권영", "류기태", "구자현"];

let ul = document.createElement("ul");
names.forEach(nameAdd);

function nameAdd(item) {
    let li = document.createElement("li")
    let text = document.createTextNode(item)
    li.appendChild(text)
    ul.appendChild(li)
};

document.getElementById("bdy").appendChild(div);
document.getElementById("bdy").appendChild(input);
document.getElementById("bdy").appendChild(delBtn);
document.getElementById("bdy").appendChild(addBtn);
document.getElementById("bdy").appendChild(ul);

console.log(document.getElementById("bdy"));