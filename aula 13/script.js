function verificar(){
    var data = new Date()
    var ano = data.getFullYear();
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')

    if(fano.value.length == 0 || fano.value > ano){
        alert('[ERRO]Verifique os dados e tente novamente')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')

        if(fsex[0].checked){
            genero = 'Homem'
            if(idade >=0 && idade <11){
                //criança
                img.setAttribute('src', 'menino.jpg')

            } else if (idade <21) {
                //adolescente
                img.setAttribute('src', 'adolescente homem.jpg')

            } else if(idade <50) {
                //adulto
                img.setAttribute('src', 'adulto.jpg')

            } else {
                //idoso
                img.setAttribute('src', 'velho.jpg')

            }

        } else if (fsex[1].checked){
            genero = 'Mulher'
            if(idade >=0 && idade <11){
                //criança
                img.setAttribute('src', 'menina.jpg')

            } else if (idade <21) {
                //adolescente
                img.setAttribute('src', 'adolescente mulher.jpg')

            } else if(idade <50) {
                //adulto
                img.setAttribute('src', 'adulta.jpg')
            } else {
                //idoso
                img.setAttribute('src', 'velha.jpg')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Dectamos ${genero} com ${idade} anos`
        res.appendChild(img)
    }
}