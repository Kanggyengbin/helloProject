// string1.js
var val = 'hello';
val = new String('hello,world');
console.log(val.substring(2, 3));


var h3Tag = document.querySelector('h3');
var text = h3Tag.innerHTML;
var str = text.substr(2, 10);
str = text.slice(1, 5);
var elem = document.getElementById('show');
// elem.innerHTML = '<h3>Hello</h3>';
elem.innerText = str;
console.log(elem);