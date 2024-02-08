function contando (){
    var i = Number(document.getElementById('inicio').value);
    console.log(i);

    var f = Number(document.getElementById('fim').value);
    console.log(f);

    var p = Number(document.getElementById('passo').value);
    console.log(p);

    var res = document.getElementById('preparando')
    var numeros = [i];

    


    
    
    if(i.value =! Number){
        alert('Digite um número')    
    } else {
        for(var cont = i; cont < f; cont+p ){
            cont = cont + p;
            if(cont > f){
                break;
            } else {
                numeros.push('&#128073')
                numeros.push(cont);
            }
            
        }
        res.innerText = `A contagem é: `
        res.innerHTML = `${numeros.join(' ')} ${'&#127937'}`
    }

}