const sumAll = function(start, end) {
    let sum = 0;
    if (!Number.isInteger(start) || !Number.isInteger(end) || start < 0 || end < 0) {
        return "ERROR"
    } else if (start > end) {
        for (let i = start; i >= end; i--) {
            sum += i
        }
    } else {
        for (let i = start; i <= end; i++) {
            sum += i
        }
    }
    return sum
}

module.exports = sumAll
