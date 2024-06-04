const accountId  = 0564654;
let email = "demo@gmail.com";
accountCity = "Goa";
accoutPassword = "Dope@123";
let accountState;// undefined

accountCity = "Bengluru";
/*
.Prefer not to use var 
.because of issue in block scope and functional issue
*/

console.table([email,accountCity,accoutPassword,accountState]);