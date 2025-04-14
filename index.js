//1) Quali sono i tipi primitivi principali in TypeScript?//
//string, number, boolean, null, undefined, symbol, bigint, any//
//2) Crea tre variabili tipizzate: una stringa con il tuo nome, un numero con la tua età, e un booleano che indica se stai studiando TypeScript.//
var myName = 'Davide';
var myAge = 28;
var studyTypescript = true;
console.log("Ciao, mi chiamo ".concat(myName, ", ho ").concat(myAge, " anni e studio TypeScript: ").concat(studyTypescript));
//3) Tipizza il parametro della seguente funzione://
var greet = function (name) { return "Ciao " + name; };
console.log(greet('Mario'));
//4) Specifica il tipo di ritorno della seguente funzione://
var sum = function (a, b) { return a + b; };
console.log(sum(2, 2));
//5) Crea una funzione che accetti un prezzo e restituisca il prezzo con IVA (22%). Usa i tipi appropriati.//
var prezzoConIVA = function (prezzo, iva) {
    if (iva === void 0) { iva = 22; }
    return prezzo * (1 + iva / 100);
};
console.log(prezzoConIVA(50));
console.log(prezzoConIVA(50, 10));
//6) Crea una funzione che concateni due stringhe e restituisca la lunghezza totale.//
var concatString = function (str1, str2) {
    var result = str1 + str2;
    return result.length;
};
console.log(concatString("Ciao", "Mondo"));
//7) Cos'è un Type Union e come si scrive?//
// string | number <-- TYPE UNION (come negli insiemi alle elementari)//
//8) Crea una variabile che possa contenere un numero, null o undefined.//
var myVar, b;
myVar = 42;
myVar = null;
myVar = undefined;
//10) Tipizza il seguente array di numeri://
//const numbers = [1, 2, 3]//
var numbers = [1, 2, 3];
//11) Crea una tupla per definire un array di 5 elementi, i primi 3 devono essere stringhe e gli ultimi due numeri.//
var myTouple = ['Mino', 'Luigi', 'Mario', 1, 2];
var studenti = [
    { nome: 'topogigio', voto: 10 },
    { nome: 'topolino', voto: 9 },
    { nome: 'paperino', voto: 7 }
];
//17) Crea un oggetto che implementi l'interfaccia Auto.//
var cinquecento = {
    marca: 'Fiat',
    anno: 2023,
    cilindrata: 60,
    modello: 'Electric'
};
//prova percorsi
