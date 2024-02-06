
function verificando(){
    var ano = document.getElementById('txtano')
    var data = new Date();
    var anoAtual = data.getFullYear();
    var res = document.getElementById('res')
    
    var secao = document.getElementById('seção')
    
    if(ano.value.length == 0 || ano.value > anoAtual){
        alert('Erro! Tente novamente.')
    } else {
        var genero = ''
        var fsex = document.getElementsByName('radsex')
        var idade =  Number(anoAtual - ano.value)
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')

        if(fsex[0].checked){ //se a primeira opção foi selecionada...
            genero = 'Homem'

            if(idade > 0 && idade < 12){
                img.setAttribute('src', 'menino.jpg')
            } else if(idade < 18) {
                img.setAttribute('src', 'adolescenteh.jpg')
            } else if(idade < 50) {
                img.setAttribute('src', 'adulto.jpg')
            } else {
                img.setAttribute('src', 'velho.jpg')
            }

        } else if (fsex[1].checked){
            genero = 'Mulher'
            if(idade > 0 && idade < 12){
                img.setAttribute('src', 'menina.jpg')
            } else if(idade < 18) {
                img.setAttribute('src', 'adolescentem.jpg')
            } else if(idade < 50) {
                img.setAttribute('src', 'adulta.jpg')
            } else {
                img.setAttribute('src', 'velha.jpg')
            }
        }

        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)


    }
}

