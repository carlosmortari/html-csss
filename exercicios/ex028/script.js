var msg = document.getElementById('msg')
var img = document.getElementById('imagem')
var data = new Date()
//var hora = data.getHours()
var hora = 5
function carregar(){
    
    if (hora >=5 && hora < 12){
        msg.innerHTML = `Bom dia, agora São ${hora} horas`
        img.src = 'img/foto-manha.png'
        document.body.style.background = 'blue'
    }else if (hora >= 12 && hora <19){
        msg.innerHTML = `Boa Tarde, agora São ${hora} horas`
        img.src = 'img/foto-tarde.png'
        document.body.style.background = 'orange'
    }else if (hora >=19 && hora <=23){
        msg.innerHTML = `Boa Noite, agora São ${hora} horas`
        img.src = 'img/foto-noite.png'
        document.body.style.background = 'black'
    }else {
        msg.innerHTML = `Boa Madrugada`
        img.src = 'img/foto-noite.png'
        document.body.style.background = 'black'
    }
}

