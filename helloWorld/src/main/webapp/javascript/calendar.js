// calendar.js
var year = 2022;
var month = 5;

function makeCal(year, month) {
    var today = new Date(2022, 0, 1);
    var lastDay = new Date(2022, 1, 0);
    var calendarF = new Date(2022, month - 1, 1);
    var calendarL = new Date(2022, month, 0);
    var days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thr', 'Fri', 'Sat'];

    document.write(`<h3>${calendarF.getFullYear()}년 ${calendarL.getMonth()+1}월</h3>`);
    // 배열을 활용해서 요일정보 출력.
    for (var day of days) {
        document.write('<span>' + day + '</span>');
    }
    document.write('<br>');
    // 빈 공란 출력
    for (var n = 0; n < calendarF.getDay(); n++) {
        document.write('<span></span>');
    }
    // 날짜 출력
    for (var i = 1; i <= calendarL.getDate(); i++) {
        if ((i + calendarF.getDay()) % 7 == 1) {
            document.write('<span class="sunday">' + i + '</span>');
        } else if ((i + calendarF.getDay()) % 7 == 0) {
            document.write('<span class="saturday">' + i + '</span>');
        } else {
            document.write('<span>' + i + '</span>');
        }
        if ((i + calendarF.getDay()) % 7 == 0) {
            document.write('<br>');
        }
    }
}