var prompt = require('prompt-console');


function teste(count) {
    var words = [
        { base: "arise", past: "arose", mean: "surgir, erguer-se" },
        { base: "awake", past: "awoke", mean: "despertar" },
        //{ base: "be", past: "was, were", mean: "ser, estar" },
        { base: "bear", past: "bore", mean: "suportar, ser portador de" },
        { base: "beat", past: "beat", mean: "bater" },
        { base: "become", past: "became", mean: "tornar-se" },
        { base: "befall", past: "befell", mean: "acontecer" },
        { base: "beget", past: "begot", mean: "procriar, gerar" },
        //{ base: "begin", past: "began", mean: "começar" },
        //{ base: "behold", past: "beheld", mean: "contemplar" },
        { base: "bend", past: "bent", mean: "curvar" },
        //{ base: "bet", past: "bet", mean: "apostar" },
        { base: "bid", past: "bid", mean: "oferecer, fazer uma oferta" },
        { base: "bind", past: "bound", mean: "unir, encadernar, obrigar-se" },
        { base: "bite", past: "bit", mean: "morder" },
        { base: "bleed", past: "bled", mean: "sangrar, ter hemorragia" },
        { base: "blow", past: "blew", mean: "assoprar, explodir" },
        { base: "break", past: "broke", mean: "quebrar" },
        { base: "breed", past: "bred", mean: "procriar, reproduzir" }];

    var x = Math.random() * 15;
    var word = words[x.toFixed(0)];
    var values = [word.base, word.past, word.mean];
    var y = Math.random() * 2;
    console.log("A palavra é:   " + values[y.toFixed(0)]);

    prompt.ask(
        [{
            question: 'What is the base form',
            validator: function (base) {
                var final = word.base == base;

                if (!final) throw "Errou!!! o certo era: " + word.base + ", mas vc digitou: " + base;

                return true;
            },
            color: 'green',
            name: 'base'
        }, {
            question: 'What is the past form? ',
            validator: function (past) {
                var final = word.past == past;

                if (!final) throw "Errou!!! o certo era: " + word.past + ", mas vc digitou: " + past;

                return true;
            },
            color: 'yellow',
            name: 'past'
        }, {
            question: 'Portuguese translation?',
            validator: function (mean, answers) {
                var final = word.mean.split(", ").indexOf(mean) > -1;

                if (!final) throw "Errou!!! o certo era: " + word.mean + ", mas vc digitou: " + mean;

                return true;
            },
            color: 'cyan',
            name: 'mean'
        }], function (response) {
            console.log();
            console.log('Boaaaaaaaaaaa!!!!!!!!!');
            console.log(values);
            teste(count + 1);
        }
    );
};

(function jogo(count){
    
        if(count <=10){
            teste(count);
        }
   
})(1);