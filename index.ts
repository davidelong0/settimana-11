//1) Quali sono i tipi primitivi principali in TypeScript?//
//string, number, boolean, null, undefined, symbol, bigint, any//

//2) Crea tre variabili tipizzate: una stringa con il tuo nome, un numero con la tua età, e un booleano che indica se stai studiando TypeScript.//
let myName: string = 'Davide'
let myAge: number = 28
let studyTypescript: boolean = true

console.log(`Ciao, mi chiamo ${myName}, ho ${myAge} anni e studio TypeScript: ${studyTypescript}`);

//3) Tipizza il parametro della seguente funzione://

const greet = (name: string) => { return "Ciao " + name }
console.log(greet('Mario'))

//4) Specifica il tipo di ritorno della seguente funzione://

const sum = (a: number, b: number):number => { return a + b }
console.log(sum (2,2))

//5) Crea una funzione che accetti un prezzo e restituisca il prezzo con IVA (22%). Usa i tipi appropriati.//
const prezzoConIVA = (prezzo: number, iva: number = 22): number => {
    return prezzo * (1 + iva / 100);
  };
  
  console.log(prezzoConIVA(50));      
  console.log(prezzoConIVA(50, 10));     
  

//6) Crea una funzione che concateni due stringhe e restituisca la lunghezza totale.//

const concatString = (str1: string, str2: string): number =>{
    const result = str1+str2
    return result.length
}
console.log(concatString("Ciao", "Mondo"))

//7) Cos'è un Type Union e come si scrive?//
// string | number <-- TYPE UNION (come negli insiemi alle elementari)//

//8) Crea una variabile che possa contenere un numero, null o undefined.//
let myVar:number|null|undefined, b:number|null|undefined;
 
myVar = 42;       
myVar = null;      
myVar = undefined; 

//9) Crea un tipo per rappresentare i giorni della settimana usando union di stringhe letterali.//
type GiornoSettimana = 
  | "Lunedì"
  | "Martedì"
  | "Mercoledì"
  | "Giovedì"
  | "Venerdì"
  | "Sabato"
  | "Domenica";

//10) Tipizza il seguente array di numeri://

//const numbers = [1, 2, 3]//
const numbers:number[] = [1, 2, 3]


//11) Crea una tupla per definire un array di 5 elementi, i primi 3 devono essere stringhe e gli ultimi due numeri.//
const myTouple: [string, string, string, number, number] = [ 'Mino', 'Luigi', 'Mario', 1, 2]
//12) Qual è la differenza tra type e interface?//
//interface si usa per strutture dati a oggetti, quando vogiamo crearli in sequenza e riutilizzarli. type invece si usa per union, tuple e tipi complessi.
//13) Definisci un'interfaccia in TypeScript per un oggetto dotato di proprietà "firstname", "lastname", e "age".//
interface Obj {
    firstname: string
    lastname: string
    age: number
  }
//14) Crea un'interfaccia per un utente con email obbligatoria e telefono opzionale.//
interface User {
    email: string
    telephone?: number
}
//15) Crea un array tipizzato di oggetti "Studente" con nome e voto.//
type Studente = {
    nome: string;
    voto: number;
}
const studenti: Studente[]=[
    {nome:'topogigio', voto: 10},
    {nome:'topolino', voto: 9},
    {nome:'paperino', voto: 7}
]
//16) Crea un'interfaccia base "Veicolo" e estendila per creare "Auto".//

interface Veicolo {
    marca: string;
    anno: number;
  }
  
  interface Auto extends Veicolo {
    cilindrata: number;
    modello: string;
  }
  

  
//17) Crea un oggetto che implementi l'interfaccia Auto.//
const cinquecento: Auto = {
    marca: 'Fiat',
    anno: 2023,
    cilindrata: 60,
    modello: 'Electric'
  };
//18) Cosa sono i Generics in TypeScript?//
// un GENERIC in TS è un argomento per un TIPO.
// servono a rendere più generiche le interfacce, in modo da poterle riutilizzare di più.

//19) È possibile avere più tipi generici in un'interfaccia?//
//si//

//20) Crea un'interfaccia generica per una risposta API.  //
interface ApiResponse<T> {
    success: boolean;
    message: string;
    data: T;
  }
  