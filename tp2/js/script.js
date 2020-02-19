function validation() {
    /*type*/ var contenu = [document.getElementById("name"),
    document.getElementById("firstname"),
    document.getElementById("date"),
    document.getElementById("adress"),
    document.getElementById("mail")
    ]

    var erreur = "";
    document.getElementById("error").innerHTML = "";
    document.getElementById("resultat").innerHTML = "";

    for (var champ of contenu) {
        if (champ.value.length < 5) {
            erreur += " Le champ " + champ.id + " doit contenir au moins 5 cinq caracteres <br>";
        }
    }
    if (erreur == "") {
        document.getElementById("resultat").textContent = "Bienvenue " + document.getElementById("firstname").value;
    } else {
        document.getElementById("error").innerHTML = erreur;
    }
}