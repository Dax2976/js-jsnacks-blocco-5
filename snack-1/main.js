// Crea un array di 10 oggetti che rappresentano una zucchina, 
// indicando per ognuna varietà, peso e lunghezza.
// Calcola quanto pesano tutte le zucchine.


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

//calcolo il peso di tutte le zucchine

let sum = 0 






zucchine.forEach((zucchina)=>{
    console.log(zucchina.peso)
    let peso = zucchina.peso

     sum += peso
})

console.log(sum)





