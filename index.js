const MAPA = document.querySelector('.mapa_l')
const RUTA_PADRE = document.querySelector('.lista_de_rutas').getElementsByTagName('div')
const RUTAS = Array.from(RUTA_PADRE)


class Ob_ruta {
    constructor(div, texto){
        this.div = div;
        this.texto = texto;
    }
}


let links_de_rutas = {
    link_ruta:{
    'Ruta M': "https://www.google.com/maps/d/u/0/embed?mid=1-Gs3_ETr-ztOEjRr_URbjlsHHJxByek&ehbc=2E312F"
    }
}


let lista_de_rutas = []


RUTAS.forEach(ruta => {
    lista_de_rutas.push(new Ob_ruta(ruta, ruta.innerText))
});

function remover(){
    lista_de_rutas.forEach(rutaxa=>{
        if (rutaxa.div.classList.contains('active')){
            rutaxa.div.classList.remove('active')
        }
    });
}

function cambiar_mapa(ruta){
    let link = links_de_rutas.link_ruta[ruta.texto]
    if (link != undefined){
        MAPA.setAttribute('src',link)
    }else{
        console.log('No existe')
    }
}


lista_de_rutas.forEach(rutax =>{
    rutax.div.addEventListener('click',()=>{
        remover()
        rutax.div.classList.add('active')
        cambiar_mapa(rutax)
    });
});

