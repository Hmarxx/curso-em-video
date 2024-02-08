function contando (){
    var i = document.getElementById('inicio');

    var f = document.getElementById('fim');

    var p = document.getElementById('passo');

    var res = document.getElementById('preparando')
    
    
    if(i.value.length == 0 || f.value.length == 0 || p.value.length == 0){
        alert('Digite um número')
        res.innerHTML = 'Impossível contar' 
    } else {
        res.innerHTML ='Contando: '
        let ini = Number(i.value)
        let fim = Number(f.value)
        let pas = Number(p.value)


        if(pas <= 0){
            alert('Passo inválido! Considerando passo 1')
            pas = 1
        }
        if(ini<fim) {
            //CONTAGEM CRESCENTE
            for(var cont = ini; cont <= fim; cont+=pas ){
                res.innerHTML += `${cont} \u{1F449}`
                
            } 
        } else {
            //CONTAGEM REGRESSIVA
            for(let cont = ini; cont >= fim; cont -= pas){
                res.innerHTML += `${cont} \u{1F449}` 
            }
        }
        res.innerHTML += `\u{1F3C1}`
        

        
        
    }

}