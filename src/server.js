const Translator = require('./Translator')

const text = process.argv[2];
const targetLang = process.argv[3];
const translator = new Translator();

const printTranslate = async () => {
  console.log(await translator.translate(text,targetLang));
}

printTranslate();