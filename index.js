const MAPA_PADRE = document.querySelector('.mapa')
const RUTAS = document.querySelectorAll('.ruta')
const SELECCIONADOR = document.querySelector('#seleccion')
const BOTON_ENVIAR = document.querySelector('.boton_enviar')
const FORMULARIO = document.querySelector('#formulario')

class Ob_ruta {
    constructor(elemento, texto){
        this.elemento = elemento;
        this.texto = texto;
    }
}


let links_de_rutas = {
    link_ruta:{
    'Ruta M': "https://www.google.com/maps/d/u/0/embed?mid=1-Gs3_ETr-ztOEjRr_URbjlsHHJxByek&ehbc=2E312F"
    /*ESCRIBIR DATOS DE CADA RUTA*/
    }
}


let lista_de_rutas = []


RUTAS.forEach(ruta => {
    lista_de_rutas.push(new Ob_ruta(ruta, ruta.value))
});


function cambiar_mapa(ruta_texto){
    let link = links_de_rutas.link_ruta[ruta_texto]
    if (link != undefined){
        MAPA_PADRE.innerHTML = `<iframe src=${link} class='mapa_l'></iframe>`
    }else{
        MAPA_PADRE.innerHTML = "<img src= 'ohno.svg' class='ohno'></img>"
    }
}
FORMULARIO.addEventListener("submit", function(event) {
    event.preventDefault()

BOTON_ENVIAR.addEventListener('click',()=>{
    });
    if (SELECCIONADOR.value != 'label_seleccion'){
        let valor_seleccionado = SELECCIONADOR.value
        cambiar_mapa(valor_seleccionado)
    }else{
        MAPA_PADRE.innerHTML = '<iframe src="https://www.google.com/maps/d/u/0/embed?mid=17fsh3t8czCEDF_szhb4oHHnrrzZwgVs&ehbc=2E312F" class="mapa_l"></iframe>'
    }
    
    
});
