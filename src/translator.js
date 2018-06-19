"use strict";

const Translate = require('@google-cloud/translate');
const translate = new Translate({
  keyFilename: './translator.conf.json',
});

class Translator {
    
    traducir(content, targetLang){

        return new Promise(function(resolve,reject){
            translate
                .translate(content,targetLang)
                .then(results => {
                    resolve(results[0]);
                })
                .catch(err => {
                    reject(err);
                })
        });   
      
    }; 

}

module.exports = Translator;