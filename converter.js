function converter(currency) {
    if(typeof currency === 'n') 
        return `$${(currency*0.033).toFixed(2)}`
    else  
        return "error"
}
module.exports = converter;