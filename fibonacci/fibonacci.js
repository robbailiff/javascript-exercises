const fibonacci = function(n) {
    if(n <= 0){
        return "OOPS";
    } else if(n <= 1){
        return 1;
    } else {
        let x = 0;
        let y = 1;
        let total;
        for(let i = 2; i <= n; i++){
            total = x + y;
            x = y;
            y = total;
        }
        return total;
    }
}

module.exports = fibonacci
