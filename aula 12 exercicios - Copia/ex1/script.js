function carregar(){
    var msg = document.getElementById('msg');
    var img = document.getElementById('imagem');
    var data = new Date();
    var hora = data.getHours(); 
    
    msg.innerHTML = `Agora são ${hora} horas.`

    if (hora >=0 && hora <12){
        img.src = 'Design sem nome (1).png'
        document.body.style.background = '#e2cd9f'

    } else if (hora >=12 && hora <18) {
        img.src = 'Design sem nome (2).png'
        document.body.style.background = '#f76708'


    }else {
        img.src = 'Design sem nome (3).png'
        document.body.style.background = '#020238'

    }

}
