//.creo l'array di zucchine

var zucchine = [];
for (var i = 1; i <= 10; i++) {
    zucchine.push({
        varietà: i ,
        peso: i + 7,
        lunghezza: 3 * i
    });
}

//.dichiaro le var dei vari insiemi e distribuisco gli oggetti calcolando anche il peso

var zucchineUnder = [];
var zucchineOver = [];
var sommaUnder = 0;
var sommaOver = 0;


for (var k in zucchine) {
    var lung = zucchine[k].lunghezza;

    if ( lung <= 15) {
        zucchineUnder.push(zucchine[k]);
        sommaUnder += zucchine[k].peso;
    } else {
        zucchineOver.push(zucchine[k]);
        sommaOver += zucchine[k].peso;
    }
    
}


console.log(zucchineUnder);
console.log(sommaUnder);

console.log(zucchineOver);
console.log(sommaOver);



