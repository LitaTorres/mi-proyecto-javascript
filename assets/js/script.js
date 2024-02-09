
 alert("Este trabajo es con fines educativos, las imágenes e información no son mías (pero en el icono del footer hay un enlace que nos lleva a la bibliografía)")
 alert("Se aceptan sugerencias para mejorar mi aprendizaje ¡Gracias!")

$(document).ready(function () {
    $(".card-title").click(function () {
        $(".card-text").toggle();

    });
})

$(document).ready(function () {
    $(".boton2").click(function () {
        $(".card-text, .card-title, .fa-brands, .fa-solid").css("color", "black");
        $(".recomendaciones").css("background-color", "white");
        $(".navbar, .contenido-principal").css("background-color", "#f0f0f0");
        $(".arriba, footer").css("background-color", "#6c757d");
        $(".menu, a").css("color", "black");
        $(".texto").css("color", "black");
        $(".contenido").css("-webkit-text-stroke", "1px black")
        $(". footer a").css("color", "black")
    });
})

$(document).ready(function () {
    $(".boton1").click(function () {
        $(".card-text, .card-title, .fa-brands, .fa-solid").css("color", "white");
        $(".recomendaciones").css("background-color", "#6c757d");
        $(".navbar, .contenido-principal").css("background-color", "#23272d");
        $(".arriba, .footer").css("background-color", "black");
        $(".menu, a").css("color", "white");
        $(".texto").css("color", "white");
        $(".contenido").css("-webkit-text-stroke", "0%") // esto lo inventé xD
        $(". footer a").css("color", "white")
    });
})
