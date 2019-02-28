var cronometro;


function detenerse() {

    clearInterval(cronometro);

}


function carga() {

    contador_s = 0;


    s = document.getElementById("segundos");


    cronometro = setInterval(
        function () {

            s.innerHTML = contador_s;

            contador_s++;

        }

        , 1000);

}
