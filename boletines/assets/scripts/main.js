console.log("Hola mundo desde un archivo externo Java Script");

//DOM
/*let links = document .querySelectorAll("a");

links.forEach(function(link){
    console.log(link);
})*/

//Boton obtiene todo los elementos de la clase .close
let boton = document.querySelectorAll(".close");

//Recorres el arreglo
boton.forEach(function(botones){
        //Agregar un evento click a cada uno de ellos
    botones.addEventListener('click',function(ev){
        ev.preventDefault();
        let content = document.querySelector(".content");

        //Quitarles las clases de animación que ya tiene
        content.classList.remove("animate__fadeInDown");
        content.classList.remove("animate__animated");

        //Agregar la animación de salida
        content.classList.add("animate__fadeOutUp");
        content.classList.add("animate__animated");

        //Dar timing  a la animación
        setTimeout(function(){
           location.href = "/";
        },500);

        return false;
    });
});

