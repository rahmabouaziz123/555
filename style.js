
//alert("eeeee")

var listVideo=document.querySelectorAll('.video-list .vid ')// pour acceder tous elements de la liste
//console.log(listVideo);

//console.log(listVideo)
let mainVideo=document.querySelector('.main-video-container video')  // pour acceder src 
//console.log(mainVideo)
let title=document.querySelector('.main-video-container .list-title ') // titre de image principale
//console.log(title)

listVideo.forEach(x=>{
x.onclick=()=>{
             // les 2 lignes =>1) pour remove class 'active ' en css. (2)et lelement selectionner on ajoute une clase 'active'
             //dans css pour applique les prpriete de cette  class active
      listVideo.forEach(y => y.classList.remove('active'));
   

    // pas de ajouter dans la partie globale 
    //jute ajoute class active dans element target
    x.classList.add('active')


    if(x.classList.contains('active')){  ///verifier si ona dans lelement courat quia la class active
        //ajout est fait avec succe
          let src=x.children[0].getAttribute('src')
          mainVideo.src = src;

          let text = x.children[1].innerHTML;
          title.innerHTML=text;
    };



    
};
});