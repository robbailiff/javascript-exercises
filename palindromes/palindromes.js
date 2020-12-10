const palindromes = function(str) {
    const regex = /^[0-9a-z]+$/;
    const filteredStr = str.toLowerCase().split("").filter(char => char.match(regex));
    if (filteredStr.join("") === filteredStr.reverse().join("")) {
        return true;
    } else {
        return false;
    }
}

module.exports = palindromes
