var emmagatzematge = {
    taula: document.getElementById('taula'),
    desar: function (key, value) {
        localStorage.setItem(document.getElementById('inputUsername').value, value);
        emmagatzematge.esborrarTaula();
        //emmagatzematge.mostrar();
    },
    mostrar: function() {
        for (var i = 0; i < localStorage.length; i++) {
            var fila = taula.insertRow(0);
            fila.insertCell(0).innerHTML = localStorage.key(i);
            //fila.insertCell(0).innerHTML = localStorage.getItem(localStorage.key(i));
        };
    },
   esborrarTaula: function() {
        while (taula.rows.length > 0) {
            taula.deleteRow(0);
        }
    },

}
document.getElementById('startGame').addEventListener('click', emmagatzematge.desar, false);

//emmagatzematge.mostrar();
