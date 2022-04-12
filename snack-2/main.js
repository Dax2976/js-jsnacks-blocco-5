// SNACK 2
// Crea 10 oggetti che rappresentano una zucchina.
// Dividi in due array separati le zucchine che misurano meno o più di 15cm.
// Infine stampa separatamente quanto pesano i due gruppi di zucchine.


const zucchine = [
    {varieta: 'Verde' , peso: 123, lunghezza: 12},
    {varieta: 'Rosso' , peso: 134, lunghezza: 13},
    {varieta: 'Viola' , peso: 67, lunghezza: 14},
    {varieta: 'Giallo' , peso: 13, lunghezza: 16},
    {varieta: 'Marrone' , peso: 23, lunghezza: 17},
    {varieta: 'Blu' , peso: 178, lunghezza: 19},
    {varieta: 'Nero' , peso: 90, lunghezza: 13},
    {varieta: 'Fucsia' , peso: 69, lunghezza: 12},
    {varieta: 'Azzurro' , peso: 89, lunghezza: 12},
    {varieta: 'Arancio', peso: 290, lunghezza: 21}
]

const lunghezza15 = zucchine.filter((zucchina)=> zucchina.lunghezza < 15)

console.log(lunghezza15)

const lunghezzavarie = zucchine.filter ((zucchina) => zucchina.lunghezza >= 15)

console.log(lunghezzavarie)


let somma=0

lunghezza15.forEach((zucchina)=>{
    somma+= zucchina.peso
})

console.log(somma)


let sommavarie = 0
lunghezzavarie.forEach((zucchina)=>{
    sommavarie+= zucchina.peso
})
console.log(sommavarie)