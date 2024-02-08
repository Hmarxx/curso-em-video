function multiplica(){

    var n = Number(document.getElementById('numero').value)
    var lista = document.getElementById('produto')
    var img = document.getElementById('imagem')
    

    for (var mult = 0; mult < 11; mult++){
        var res = n * mult
        lista.options[lista.options.length] = new Option(`${n} x ${mult} = ${res}`, `n`)    
    }
}