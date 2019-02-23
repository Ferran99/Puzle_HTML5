var emmagatzematge = {
    taula: document.getElementById('taula'),
    desar: function (key, value) {
        localStorage.setItem(document.getElementById('nom').value, value);
        emmagatzematge.esborrarTaula();
        emmagatzematge.mostrar();
    },
    mostrar: function() {
        for (var i = 0; i < localStorage.length; i++) {
            var fila = taula.insertRow(0);
            fila.insertCell(0).innerHTML = localStorage.key(i);
        };
    },
   esborrarTaula: function() {
        while (taula.rows.length > 0) {
            taula.deleteRow(0);
        }
    }
}
document.getElementById('desar').addEventListener('click', emmagatzematge.desar, false);
emmagatzematge.mostrar();
