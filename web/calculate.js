/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

/*
 * Currency based on Feb. 2022
 */

function convertCurrency(val) {
    var currency_in_USD = parseFloat(convertToUSDollar(val));
    var result = parseFloat(convertFromUSDollar(currency_in_USD));

    conversion_amount.value = result.toFixed(2);
}

function convertToUSDollar(val)    {
    var currency_on_hand = document.getElementById("currency_on_hand").value;
    var conversion_result_in_USD = parseFloat(0);
    val=parseFloat(val);

    if(currency_on_hand === "Euro") 
        conversion_result_in_USD = val * 1.09;
    else if(currency_on_hand === "US_Dollar")
        conversion_result_in_USD = val * 1.00;        
    else if(currency_on_hand === "Canadian_Dollar")
        conversion_result_in_USD = val * 0.79;
    else if(currency_on_hand === "Bitcoin")
        conversion_result_in_USD = val * 39020.70;
    else if(currency_on_hand === "Ethereum")
        conversion_result_in_USD = val * 2638.50;

    return conversion_result_in_USD;
}

function convertFromUSDollar(val)    {
    var convert_currency = document.getElementById("convert_currency").value;
    var conversion_result = parseFloat(0);
    val=parseFloat(val);

    if(convert_currency === "Euro") 
        conversion_result = val * 0.91;
    else if(convert_currency === "US_Dollar")
        conversion_result = val * 1.00;        
    else if(convert_currency === "Canadian_Dollar")
        conversion_result = val * 1.27;
    else if(convert_currency === "Bitcoin")
        conversion_result = val * 0.000026;
    else if(convert_currency === "Ethereum")
        conversion_result = val * 0.00038;

    return conversion_result;
}
