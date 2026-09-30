/*
let score = 0
let mottapéOK = "Exaucé"
let motUtilisateur = prompt("Entrez un mot :")
switch (motUtilisateur) {
    case "Exaucé":
        console.log("Mot correct !")
        score++
        console.log("Votre score est : " + score)
        break;
    case "exaucé":
        console.log("Vous y etes presque. Encore un effort !")
        break;
    case "Exauce":
        console.log("Dommage, il manque un accent !")
        break;
    default:
        console.log("Mot incorrect !")
        score--
        console.log("Votre score est : " + score)
        break;
}
*/

/*
let ticket = {
    nomFilm: "Inception",
    prix: 12.5,
    numeroSalle: 5,
}

let textAffichage = "Bonjour Monsieur/Madame, Votre film  " + ticket.nomFilm + "\n" + "est en salle numéro " + ticket.numeroSalle 
console.log(textAffichage)
*/



//function afficherResultat(score, nbrMotsProposes){
    //on affiche le score de l'utilisateur 
    //console.log("Votre score est : " + score + " sur " + nbrMotsProposes)
//}
/*function choisirPhraseOuMot(){
   //tant que l'utilisateur n'a pas choisir "mots ou "phrases" on lui redemande de choisir
    let choix = prompt("Voulez-vous jouer avec des mots ou des phrases ? (Entrez 'mots' ou 'phrases')")
    while (choix !== "mots" && choix !== "phrases") {
    choix = prompt("Voulez-vous jouer avec des mots ou des phrases ? (Entrez 'mots' ou 'phrases')")
    } 
    return choix
}

function lancerBoucleDeJeu(listePropose){
    let score = 0
    for (let i = 0; i < listePropose.length; i++){
        motUtilisateur = prompt ("Entrer le mot :" + listePropose[i])
        if (motUtilisateur === listePropose[i]){
            score++
        }
    }
    return score
}
*/

function lancerJeu(){
    let score = 0
    let nbrMotsProposes = 0

    let BtnVaiderMot = document.getElementById("BtnValiderMot")
    BtnValiderMot.addEventListener("click", () => {
        console.log("Bouton cliqué !")
    })
    afficherResultat(score, nbrMotsProposes)
} 