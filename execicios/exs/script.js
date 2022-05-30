function carregar(){
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var msgboton = window.document.getElementById('msg2')
    var data = new Date()
    //var hora = data.getHours()
    var hora = 15
    msg.innerText = `Agora são são ${hora} horas` 

    if(hora >= 0 && hora <12){
      //bom dia
      img.src = 'imgs/manha.jpg'
      msgboton.innerText = `Bom dia`
      document.body.style.background = '#e2cd9f'
    } else if (hora >= 12 && hora <=18){
      //boa tarde
      img.src = 'imgs/tarde.jpg'
      document.body.style.background = '#b9846f'
      msgboton.innerText = `Boa tarde`
    } else{
     //boa noite
     img.src = 'imgs/noite.jpg'
     document.body.style.background = '#515154'
     msgboton.innerText = `Boa noite`



    }



}
