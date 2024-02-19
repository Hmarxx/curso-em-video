let num = [5, 2, 8, 9, 3]
num[2]=8  // coloca o número 8 na posição 2.
num.push(7) // acrescenta o número na última posição

for(let pos =0; pos<num.length; pos++){
    console.log(`A posição ${pos} possui o valor ${num[pos]}`)
}

num.sort() // ordem crescrente

console.log(num[0]) // mostra o valor do elemento 0
console.log(num.length) // mostra a quantidade de elementos
console.log(`Nosso vetor é o ${num}`) // mostra o que tem no vetor