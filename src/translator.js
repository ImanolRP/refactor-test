"use strict";

const Translate = require('@google-cloud/translate');
const translate = new Translate({
  keyFilename: './translator.conf.json',
});

class Translator {
    
    translate(content, targetLang){

        return new Promise( async (resolve, reject) => {
            try {
                const results = await translate.translate(content, targetLang);
                resolve(results[0]);
            } catch(err) {
                reject(err);
            }
        });
      
    }; 

}

module.exports = Translator;