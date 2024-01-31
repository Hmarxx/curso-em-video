

function horadoDia (){
    var data = new Date();
    var hora = data.getHours();
    var msg = document.getElementById('msg')
    var img = document.getElementById('imagem') // não estava dando certo porque tinha uma div e uma imagem com o msm Id "img"
    

    if(hora >=0 && hora<12) {
        msg.innerHTML = `Bom dia! São ${hora}.`
        document.body.style.background = '#E1E640'
        document.getElementById('msg').style.background = '#E6CD0B'
        img.src = 'Design sem nome (1).png'


    } else if (hora>=12 && hora<18){
        msg.innerHTML = `Boa tarde! São ${hora} horas.`
        document.body.style.background = '#E38D05';
        document.getElementById('msg').style.background = '#E06638'
        img.src = 'Design sem nome (2).png'

    } else {
        msg.innerHTML = `Boa noite! São ${hora} horas.`
        document.body.style.background = '#0020E1';
        document.getElementById('msg').style.background = '#4422E6'
        img.src = 'Design sem nome (3).png'

    }
}