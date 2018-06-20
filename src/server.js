const Translator = require('./Translator')

const text = "quiero trabajar con los mejores"
const targetLang = 'en'

const translator = new Translator();
translator.translate(text, targetLang)
  .then((result) => {
    console.log(result);
  }, (err) =>{
    console.log(err);
  });


const translator2 = new Translator();
const result = async () => await translator2.translate(text, targetLang);
console.log(result());

const prueba = translator.translate(text, targetLang);
console.log(prueba);