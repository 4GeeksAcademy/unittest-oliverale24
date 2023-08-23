
// declaramos una funcion con el mismo nombre "formEuroToDollar"
const fromEuroToDollar = function(valueInEuro){
    // convertimos el valor a dolares
    let valueInDollar = valueInEuro * 1.2;
    // retornamos el valor
    return valueInDollar;} 
   

const fromDollarToYen = function(valueInDollar){
    // convertimos el valor a dolares
    let valueInYen = valueInDollar * 106.58;
    // retornamos el valor
    return valueInYen;} 
   

const fromYenToPound = function(valueInYen){
    let valueinPound = valueInYen * 0.00625488;
    return valueinPound; 
}
module.exports = { fromEuroToDollar, fromDollarToYen, fromYenToPound }
    