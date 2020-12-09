const repeatString = function(word, num) {
    if (num < 0) {
        return "ERROR"
    }
    let string = "";
    for (i = 1; i <= num; i++) {
        string += word;
    }
    return string;
}

module.exports = repeatString
