var customerName = 'bob';

function upperCaseCustomerName(){
    customerName = customerName.toUpperCase(); 
}
function setBestCustomer(){
    bestCustomer = 'not bob';
    return bestCustomer
}
function overwriteBestCustomer(){
    bestCustomer = 'maybe bob';
}
const leastFavoriteCustomer = 'Mindy';

function changeLeastFavoriteCustomer(){
    leastFavoriteCustomer = 'Susan;'
}