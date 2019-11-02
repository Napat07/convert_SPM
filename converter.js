//1 bath thai = 0.033 us dolla

function converter(currency) {
    if(typeof currency === 'number') 
        return `$${(currency*0.033).toFixed(2)}`
    else  
        return "errorrrrrrrrr"
}
module.exports = converter;