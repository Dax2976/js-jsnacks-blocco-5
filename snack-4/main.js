// SNACK 4
// Scrivi una funzione 
// che fonda due array 
// (aventi lo stesso numero di elementi) 
// prendendo alternativamente gli elementi da uno e dall’altro
// es. [a,b,c], [1,2,3] → [a,1,b,2,c,3].

const primo = [1,2,3]

const secondo = ['A','B','C']

/**
 * 
 * @param {array} first_array 
 * @param {array} second_array 
 * @returns 
 */

function fusion(first_array,second_array){
   const thirdarray = []

   first_array.forEach((element,i) => {
      const firstarray_element = first_array[i]
      const secondarray_element = second_array[i]
      thirdarray.push(firstarray_element)
      thirdarray.push(secondarray_element)
    })
    return [thirdarray]
}

console.log(fusion(primo,secondo))