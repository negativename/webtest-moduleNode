module.exports.convert = (array) => {
    return new Promise((resolve, reject) => {
        let firstDigit = array[0];
        let currDigit;
        let resStr = '';

        if (array && array.length){
            for (let i = 0; i < array.length; i++){
                if (array[i+1] - array[i] !== 1) {
                    currDigit = array[i];

                    if(currDigit - firstDigit > 1){
                        resStr += `${firstDigit}-${currDigit},`;
                    } else if (currDigit - firstDigit === 1){
                        resStr += `${firstDigit},${currDigit},`;
                    } else {
                        resStr += `${firstDigit},`;
                    }
                    firstDigit = array[i+1];
                }
            }
        }
        resolve(resStr.slice(0, -1));
    });
};
