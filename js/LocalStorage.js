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
    },
   esborrarItem: function() {
        localStorage.removeItem(document.getElementById('inputUsername').value);
        emmagatzematge.esborrarTaula();
        emmagatzematge.mostrar();
    },
   netejar: function() {
        localStorage.clear();
        emmagatzematge.esborrarTaula();
        emmagatzematge.mostrar();
    }
}
document.getElementById('desar').addEventListener('click', emmagatzematge.desar, false);
//document.getElementById('esborrar').addEventListener('click', emmagatzematge.esborrarItem, false);
//document.getElementById('netejar').addEventListener('click', emmagatzematge.netejar, false);
emmagatzematge.mostrar();
