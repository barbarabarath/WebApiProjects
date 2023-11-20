window.onload = function () {
    initPascal(10);
}

var initPascal = function (n) {
    var pascalDiv = document.getElementById('pascal');

    for (var sor = 0; sor < n; sor++) {
        //div létrehozás
        var ujSorDiv = document.createElement('div');

        //új div osztálylistájához add hozzá a "sor"-t
        ujSorDiv.classList.add('sor');

        //új div-et add hozzá a "pascal" gyermekeihez
        pascalDiv.appendChild(ujSorDiv);

        for (var oszlop = 0; oszlop <= sor; oszlop++) {
            //új div létrehozása az új elemnek
            var ujElemDiv = document.createElement('div');

            //új elem div osztálylistájához add hozzá az "elem"-et
            ujElemDiv.classList.add('elem');

            //teszteléshet .innerHTML = `${sor}:${oszlop}`
            ujElemDiv.innerText = faktorialis(sor) / (faktorialis(oszlop) * faktorialis(sor - oszlop));

            //új elem div-et vedd fel a sor elemei közé
            ujSorDiv.appendChild(ujElemDiv);
        }
    }
}

var faktorialis = function (n) {
    eredmeny = 1;
    for (var i = 1; i <= n; i++) {
        eredmeny *= i;

    }
    return eredmeny;
}