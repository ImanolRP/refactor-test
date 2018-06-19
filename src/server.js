const Translator = require('./Translator')

const text = "quiero trabajar con los mejores"
const targetLang = 'en'

const traductor = new Translator();
traductor.traducir(text,targetLang).then(function(result){
  console.log(result);
}, function(err){
  console.log(err);
});