//Utilitzar IndexedDB en qualsevol navegador web.
var indexedDB = window.indexedDB || window.mozIndexedDB || window.webkitIndexedDB || window.msIndexedDB;
var dataBase = null;

//Iniciant IndexedDB, creat la base de dades.
function startDB() {

    dataBase = indexedDB.open("Players", 1);

    //Creant una nova taula a IndexedDB
    dataBase.onupgradeneeded = function (e) {
        //Obrint conexió a indexedDB
        active = dataBase.result;
        //Creant una taula per emagatzemar les dades. Amb clau primaria ID
        object = active.createObjectStore("Scores", {keyPath: 'id', autoIncrement: true});
//Creant mes propietats a la BD
        object.createIndex('by_name', 'name', {unique: false});
        object.createIndex('by_score', 'score', {unique: false});
        object.createIndex('by_time', 'time', {unique: false});


    };

    dataBase.onsuccess = function (e) {
        console.log('Base de carregada correctament');
        showResults();

    };

    dataBase.onerror = function (e) {
        console.log('Error al carregar la base de dades');
    };

}

function addUsername() {
    //Recuperant conexió a la nostra BD
    var active = dataBase.result;

    //Afegint objectes a la nosrtra taula
    var data = active.transaction(["Scores"], "readwrite");

    //Seleccionant taula on treballar
    var object = data.objectStore("Scores");

    var request = object.put({
        name: localStorage.key((localStorage.length * 1) - 1),
        score: $("#segundos").text() * 1 * 2,
        time: $("#segundos").text() * 1
    });
    request.onerror = function (e) {
        console.log(request.error.name + '\n\n' + request.error.message);
    };

    data.oncomplete = function (e) {

        console.log('Object successfully added');

    };

}


function loadAll() {
    var active = dataBase.result;
    var data = active.transaction(["Scores"], "readonly");
    var object = data.objectStore("Scores");
    var index = object.index("by_score");

    var elements = [];

    index.openCursor().onsuccess = function (e) {

        var result = e.target.result;

        if (result === null) {
            return;
        }

        elements.push(result.value);
        result.continue();

    };

    data.oncomplete = function () {

        var outerHTML = '';

        var i = 1;
        for (var key in elements) {


            outerHTML += '\n\
                        <tr>\n\
                            \
                            <th scope="row">' + i + '</th>\n\
                            <td>' + elements[key].name + '</td>\n\
                              <td>' + elements[key].score + '</td>\n\
                        </tr>\n\
                        \n\
                         ';
            i++

        }

        elements = [];
        document.querySelector("#elementsList").innerHTML = outerHTML;
    };
}


function loadAllByName() {
    var active = dataBase.result;
    var data = active.transaction(["Scores"], "readonly");
    var object = data.objectStore("Scores");
    var index = object.index("by_name");

    var elements = [];

    index.openCursor().onsuccess = function (e) {

        var result = e.target.result;

        if (result === null) {
            return;
        }

        elements.push(result.value);
        result.continue();

    };

    data.oncomplete = function () {

        var outerHTML = '';
        var i = 1;
        for (var key in elements) {


            outerHTML += '\n\
                        <tr>\n\
                            \
                            <th scope="row">' + i + '</th>\n\
                            <td>' + elements[key].name + '</td>\n\
                              <td>' + elements[key].score + '</td>\n\
                        </tr>\n\
                        \n\
                         ';
            i++

        }

        elements = [];
        document.querySelector("#elementsList").innerHTML = outerHTML;
    };
}


/*

function startDB() {

    dataBase = indexedDB.open("object", 1);

    dataBase.onupgradeneeded = function (e) {

        var active = dataBase.result;
        var object = active.createObjectStore("Scores", {keyPath: 'id', autoIncrement: true});
        object.createIndex('by_name', 'name', {unique: false});
        object.createIndex('by_dni', 'dni', {unique: true});

    };

    dataBase.onsuccess = function (e) {
        //    alert('Database loaded');
        loadAll();
    };

    dataBase.onerror = function (e) {
        alert('Error loading database');
    };

}

function add() {
    var active = dataBase.result;
    var data = active.transaction(["people"], "readwrite");
    var object = data.objectStore("people");

    var request = object.put({
        dni: document.querySelector("#dni").value,
        name: document.querySelector("#name").value,
        surname: document.querySelector("#surname").value
    });

    request.onerror = function (e) {
        alert(request.error.name + '\n\n' + request.error.message);
    };

    data.oncomplete = function (e) {

        document.querySelector('#dni').value = '';
        document.querySelector('#name').value = '';
        document.querySelector('#surname').value = '';
        alert('Object successfully added');
        loadAll();
    };

}

function load(id) {
    var active = dataBase.result;
    var data = active.transaction(["people"], "readonly");
    var object = data.objectStore("people");

    var request = object.get(parseInt(id));

    request.onsuccess = function () {
        var result = request.result;

        if (result !== undefined) {
            alert("ID: " + result.id + "\n\
                               DNI " + result.dni + "\n\
                               Name: " + result.name + "\n\
                               Surname: " + result.surname);
        }
    };
}




function loadAll() {
    var active = dataBase.result;
    var data = active.transaction(["people"], "readonly");
    var object = data.objectStore("people");

    var elements = [];

    object.openCursor().onsuccess = function (e) {

        var result = e.target.result;

        if (result === null) {
            return;
        }

        elements.push(result.value);
        result.continue();

    };

    data.oncomplete = function () {

        var outerHTML = '';

        for (var key in elements) {

            outerHTML += '\n\
                        <tr>\n\
                            <td>' + elements[key].dni + '</td>\n\
                            <td>' + elements[key].name + '</td>\n\
                            <td>\n\
                                <button type="button" onclick="load(' + elements[key].id + ')">Details</button>\n\
                                <button type="button" onclick="loadByDni(' + elements[key].dni + ')">Details DNI</button>\n\
                            </td>\n\
                        </tr>';

        }

        elements = [];
        document.querySelector("#elementsList").innerHTML = outerHTML;
    };
}

function loadAllByName() {
    var active = dataBase.result;
    var data = active.transaction(["people"], "readonly");
    var object = data.objectStore("people");
    var index = object.index("by_name");

    var elements = [];

    index.openCursor().onsuccess = function (e) {

        var result = e.target.result;

        if (result === null) {
            return;
        }

        elements.push(result.value);
        result.continue();

    };

    data.oncomplete = function () {

        var outerHTML = '';

        for (var key in elements) {

            outerHTML += '\n\
                        <tr>\n\
                            <td>' + elements[key].dni + '</td>\n\
                            <td>' + elements[key].name + '</td>\n\
                            <td>\n\
                                <button type="button" onclick="load(' + elements[key].id + ')">Details</button>\n\
                                <button type="button" onclick="loadByDni(' + elements[key].dni + ')">Details DNI</button>\n\
                            </td>\n\
                        </tr>';

        }

        elements = [];
        document.querySelector("#elementsList").innerHTML = outerHTML;
    };
}
*/