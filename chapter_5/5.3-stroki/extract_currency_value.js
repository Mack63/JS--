console.log( extractCurrencyValue('$120') === 120 ); // true


function extractCurrencyValue(price) {
    if (!isNaN(price.slice(1))){
        return +price.slice(1);
    }
}