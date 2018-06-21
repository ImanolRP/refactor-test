"use strict";

const Translate = require('@google-cloud/translate');
const translate = new Translate({
  keyFilename: './translator.conf.json',
});

class Translator {
    async translate(content, targetLang){
        const res = (await translate.translate(content, targetLang))[0];
        return res;
    }; 
}

module.exports = Translator;