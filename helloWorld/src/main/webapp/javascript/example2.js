// example2.js
let datas = `[{"id":1,"first_name":"Mareah","last_name":"Demange","email":"mdemange0@gizmodo.com","gender":"Male"},
{"id":2,"first_name":"Alaster","last_name":"Farans","email":"afarans1@miitbeian.gov.cn","gender":"Female"},
{"id":3,"first_name":"Marquita","last_name":"Leaming","email":"mleaming2@photobucket.com","gender":"Female"},
{"id":4,"first_name":"Caren","last_name":"Kernley","email":"ckernley3@cmu.edu","gender":"Female"},
{"id":5,"first_name":"Viviana","last_name":"Blazevic","email":"vblazevic4@liveinternet.ru","gender":"Female"},
{"id":6,"first_name":"Boone","last_name":"Tritten","email":"btritten5@ed.gov","gender":"Male"},
{"id":7,"first_name":"Cherlyn","last_name":"Blissett","email":"cblissett6@blog.com","gender":"Female"},
{"id":8,"first_name":"Lin","last_name":"Bountiff","email":"lbountiff7@thetimes.co.uk","gender":"Female"},
{"id":9,"first_name":"Ambrosio","last_name":"Athey","email":"aathey8@ft.com","gender":"Female"},
{"id":10,"first_name":"Willie","last_name":"Sanders","email":"wsanders9@scientificamerican.com","gender":"Male"},
{"id":11,"first_name":"Kirsti","last_name":"Claypole","email":"kclaypolea@cnn.com","gender":"Female"},
{"id":12,"first_name":"Joly","last_name":"Stirgess","email":"jstirgessb@deliciousdays.com","gender":"Male"},
{"id":13,"first_name":"Hedi","last_name":"Snary","email":"hsnaryc@imdb.com","gender":"Male"},
{"id":14,"first_name":"Basilio","last_name":"Weller","email":"bwellerd@sourceforge.net","gender":"Male"},
{"id":15,"first_name":"Carlotta","last_name":"Eckford","email":"ceckforde@163.com","gender":"Male"}]`;

let employees = JSON.parse(datas);
// console.log(employees);

document.write(`<table border="1">`);
document.write(`<thead><th>ID</th><th>Name</th><th>Email</th><th>Gender</th></thead>`);
document.write(`<tbody>`);
employees.forEach((item, ind) => {
    console.log(item.id, item.first_name, item['last_name'], item['gender']);
    document.write(`<tr><td>${item.id}</td><td>${item.first_name} ${item.last_name}</td><td>${item.email}</td><td>${item.gender}</td></tr>`)
});
document.write(`</tbody>`);
document.write(`</table border="1">`);

let firstNames = [];

// employees => 배열값 중 first_name => 
employees.forEach(function(item, ind){
    // 배열.push(값);
    firstNames.push(item.first_name);
});

console.log(firstNames);