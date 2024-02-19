function parimp(n){
if(n%2==0){
    return "par"
} else{
    return "ímpar"
}
}
let res = parimp(10)
console.log(res)

// outra função com parâmetros opcionais

function soma(n1=0, n2=0){
    return n1 + n2
}
let r = soma(9, 11)
console.log(r)

// jogando uma função dentro de uma variável

let v = function(x){
    return x*2
}

console.log(v(5))

// calculando fatorial de um  número

function fatorial(n){
    let fat = 1
    for (let c = n; c > 1; c--){
    fat *= c
    }
    return fat
}
console.log(fatorial(5))

// função recursiva (uma função chama ela mesma)
function fatorial(n){
    if(n == 1){
        return 1
    } else {
        return n* fatorial(n-1)
    }
}
console.log(fatorial(5))
