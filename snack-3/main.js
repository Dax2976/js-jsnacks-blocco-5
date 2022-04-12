// SNACK 3 
// Scrivi una funzione che accetti una stringa come 
// argomento e la ritorni girata (es. Ciao -> oaiC)




const parola = 'capitano'


function Reverse(word){
    let newWord = word.split('').reverse().join('')
     return newWord
}


console.log(Reverse(parola))