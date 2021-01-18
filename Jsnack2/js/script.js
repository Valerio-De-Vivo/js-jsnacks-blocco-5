//.creo l'array di zucchine

var zucchine = [];
var sommaPeso= 0;
for (var i = 1; i <= 10; i++) {
    zucchine.push({
        varietà: i ,
        peso: i + 7,
        lunghezza: 5 * i
    });
}

//.sommo tutti i pesi delle zucchine 

for (var k in zucchine) {
    var num = zucchine[k].peso;
    sommaPeso += num;
}


console.log(zucchine);
console.log(sommaPeso);


