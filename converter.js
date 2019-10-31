function converter(currency) {
    if(typeof currency === 'number') return `$${(currency/.3025).toFixed(2)}`
    else  return 'error'
}
module.exports = converter;