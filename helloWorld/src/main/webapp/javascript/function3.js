// function3.js
function sumAry(ary) {
    var sum = 0;
    for (var i = 0; i < ary.length; i++) {
        sum += ary[i];
    }
    return sum;
}

var result = sumAry([1, 2, 3, 4, 5]);
console.log(`결과값: ${result}`);

function getMax(first, last) {
    if (first > last) {
        return first;
    } else {
        return last;
    }
}

console.log(getMax(30, 40));

function getMaxVal(ary) {
    // ary 배열에 값중에서 제일 큰값.
    var maxVal = 0;
    for (i = 0; i < ary.length; i++) {
        var temp = ary[i];
        maxVal = getMax(temp, maxVal);
        // if (maxVal < ary[i]) {
        //     maxVal = ary[i];
        // }
    }
    return maxVal;
}

function getMinVal(ary) {
    var minVal = Number.MAX_SAFE_INTEGER;
    // ary 배열에 값중에서 제일 작은값.
    // var MinVal = ary[0];
    for (i = 0; i < ary.length; i++) {
        var temp = ary[i];
        if (minVal > temp) {
            minVal = temp;
        }
    }
    return minVal;
}

var numAry = [34, 20, 15, 8, 10, 55];
console.log(`최대값: ${getMaxVal(numAry)}`);
console.log(`최소값: ${getMinVal(numAry)}`);