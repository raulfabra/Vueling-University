// ***********************************************

cy.getFlightDate = () => {
  const today = new Date();
  let flightDate = new Date();
  let flightDateDay;
  let flightDateMonth;
  flightDate.setDate(today.getDate() + 2);
  if(flightDate.getDate() < 10){
    flightDateDay = (flightDate.getDate()).toString().padStart(2, '0');
  }else{
    flightDateDay = flightDate.getDate();
  }
  if((flightDate.getMonth() + 1) < 10){
    flightDateMonth = (flightDate.getMonth() + 1).toString().padStart(2, '0');
  }else{
    flightDateMonth = flightDate.getMonth() + 1;
  }
  const flightDateYear = flightDate.getFullYear();
  const flightDateFormatted = flightDateDay + '/' + flightDateMonth + '/' + flightDateYear;
  return flightDateFormatted;
};

cy.getFalseDate = () => {
  const today = new Date();
  let falseDate = new Date();
  falseDate.setDate(today.getDate() + 2);
  const falseDateDay = falseDate.getDate();
  const falseDateMonth = falseDate.getMonth();
  const falseDateYear = falseDate.getFullYear();
  const falseDateFormatted = falseDateDay + '/' + falseDateMonth + '/' + falseDateYear;
  return falseDateFormatted;
};

cy.getFutureDate = () => {
  const today = new Date();
  let newDate = new Date();
  newDate.setDate(today.getDate() + 365);
  const newDateDay = newDate.getDate();
  const newDateMonth = newDate.getMonth() + 1;
  const newDateYear = newDate.getFullYear();
  const newDateFormatted = newDateDay + '/' + newDateMonth + '/' + newDateYear;
  return newDateFormatted;
};

cy.getRandomCulture = () => {
  const cultures = [
    'de-DE',
    'en-GB',
    'es-ES',
	  'ca-ES',
    'eu-ES',
    'fr-FR',
    'gl-ES',
    'it-IT',
    'nl-NL',
    'pt-PT',
    'ru-RU'
  ];
  const random = Math.floor(Math.random() * cultures.length);
  const cultureTestcase = cultures[random];
  return cultureTestcase;
};

cy.getDobByAge = (age) => {
  const flightDate = cy.getFlightDate();
  const yearDate = flightDate.toString().slice(-4);
  let dobYear = parseInt(yearDate) - age;
  let dob = flightDate.toString().replace(/\d{4}$/, dobYear);
  return dob;
};

cy.formatNumberLength = (num, length) => {
  var r = "" + num;
  while ( r.length < length ) {
    r = "0" + r;
  }
  return r;
};

cy.charDNI = (dni) => {
  var chain = "TRWAGMYFPDXBNJZSQVHLCKET";
  var pos = dni % 23;
  var letter = chain.substring( pos, pos + 1 );
  return letter;
};

cy.getRandomDNI = () => {
  var num = Math.floor( ( Math.random() * 100000000 ) );
  var sNum = cy.formatNumberLength( num, 8 );
  return sNum + cy.charDNI( sNum );
};

cy.getRandomNumber = () => {

  var randomNumber = "";
  var possible = "0123456789";

  for (var i = 0; i < 9; i++){

      randomNumber += possible.charAt(Math.floor(Math.random() * possible.length));

  }

  return randomNumber;
};

cy.getRandomString = () => {
  const letras = "abcdefghijklmnopqrstuvwxyz";
  const longitudNombre = Math.floor(Math.random() * 5) + 3; // Genera un nombre de longitud entre 3 y 7 caracteres
  let nombre = "";

  for (let i = 0; i < longitudNombre; i++) {
    const indiceAleatorio = Math.floor(Math.random() * letras.length);
    nombre += letras.charAt(indiceAleatorio);
  }

  return nombre;
}