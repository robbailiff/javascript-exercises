const caesar = function(str, shift) {
    if(shift > 0){
        const result = positiveShift(str, shift);
        return result
    } else if(shift < 0){
        const result = negativeShift(str, shift);
        return result
    }
}

function positiveShift(str,shift){
    let encodedStr = "";
    const regex = /^[0-9a-zA-Z]+$/;
    for(let i = 0; i < str.length; i++) {
        if(regex.test(str[i])){
            let charCode = str.charCodeAt(i);
            for(let j = 0; j < shift; j++){
                if((charCode >= 65 && charCode < 90) || (charCode >= 97 && charCode < 122)){
                    charCode++;
                } else if(charCode >= 122){
                    charCode = 97;
                } else if(charCode >= 90){
                    charCode = 65;
                }
            }
            encodedStr += String.fromCharCode(charCode);
        } else {
            encodedStr += str[i]
        }
    }
    return encodedStr;
}

function negativeShift(str, shift){
    let encodedStr = "";
    const regex = /^[0-9a-zA-Z]+$/;
    for(let i = 0; i < str.length; i++) {
        if(regex.test(str[i])){
            let charCode = str.charCodeAt(i);
            for(let j = 0; j > shift; j--){
                if((charCode > 65 && charCode <= 90) || (charCode > 97 && charCode <= 122)){
                    charCode--;
                } else if(charCode <= 65){
                    charCode = 90;
                } else if(charCode <= 97){
                    charCode = 122;
                }
            }
            encodedStr += String.fromCharCode(charCode);
        } else {
            encodedStr += str[i]
        }
    }
    return encodedStr;
}

module.exports = caesar
