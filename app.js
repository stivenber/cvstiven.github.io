//Menu lateral
var menu_visible = false;
let menu = document.getElementById("nav");
function mostrarOcultarMenu(){
    if(menu_visible==false){//si está oculto
        menu.style.display = "block";
        menu_visible = true;   
    }
    else{
        menu.style.display = "none";
        menu_visible = false;
    }
}
//oculto el menu una vez selecciono una opción
let links = document.querySelectorAll("nav a");
for(var x = 0; x <links.length;x++){
    links[x].onclick = function(){
        menu.style.display = "none";
        menu_visible = false;
    }
}
//Creo las barritas de una barra particular identificada por su id
function crearBarra(id_barra){
    for(i=0;i<=16;i++){
        let div = document.createElement("div");
        div.className = "e";
        id_barra.appendChild(div);
    }
}
//Selecciono todas las barras generales para luego manipularlas
let html = document.getElementById("html");
crearBarra(html); 
let javascript = document.getElementById("javascript");
crearBarra(javascript);
let jquery = document.getElementById("jquery");
crearBarra(jquery);
let liquid = document.getElementById("liquid");
crearBarra(liquid);
let json = document.getElementById("json");
crearBarra(json);
let apis = document.getElementById("apis");
crearBarra(apis);
//Ahora voy a guardar la cantidad de barritas de que se van a ir pintando por cada barra
//para eso utilizo un arreglo, cada posición pertenece a un elemento
//comienzan en -1 por que no tienen ninguna pintada al iniciarse
let contadores = [-1, -1, -1, -1, -1, -1];
//esta variable la voy a utilizar de bandera para saber si ya ejecutó la animación
let entro = false; 
//función que aplica las animaciones de las habilidades
function efectoHabilidades(){
    var habilidades = document.getElementById("habilidades")
    var distancia_skills = window.innerHeight - habilidades.getBoundingClientRect().top;
    if(distancia_skills>=300 && entro==false){
        entro=true;
        const intervalHtml = setInterval(function(){
            pintarBarra(html, 4, 0, intervalHtml);
        },100);
        const intervalJavascript = setInterval(function(){
            pintarBarra(javascript, 4, 1, intervalJavascript);
        },100);
        const intervalJquery = setInterval(function(){
            pintarBarra(jquery, 2, 2, intervalJquery);
        },100);
        const intervalLiquid = setInterval(function(){
            pintarBarra(liquid, 2, 3, intervalLiquid);
        },100);
        const intervalJson = setInterval(function(){
            pintarBarra(json, 2, 4, intervalJson);
        },100);
        const intervalApis = setInterval(function(){
            pintarBarra(apis, 2, 5, intervalApis);
        },100);
    } 
}
//Lleno una barra particular con la cantidad indicada 
function pintarBarra(id_barra, cantidad, indice, interval){
    contadores[indice]++;
    x = contadores[indice];
    if(x < cantidad){
        let elementos = id_barra.getElementsByClassName("e")
        elementos[x].style.backgroundColor = "#940253";
    }else{
        clearInterval(interval)
    }
}
//detecto el scrolling del mouse para aplicar la animación de la barra
window.onscroll = function(){
    efectoHabilidades();
}