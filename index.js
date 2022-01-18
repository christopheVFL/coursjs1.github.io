// Initialise la variable (ancienJS)
var unTexte = "Voici un texte";
console.log(unTexte);
// Changement de valeur sur unTexte
unTexte = "Nouveau Texte ...";
console.log(unTexte);

//JS today
// Variable qui ne bouge pas
const prenom = "Justine";
console.log(prenom);
// Nous ne pouvons plus changer la variable const sous risque d'erreur

// Variable qui bouge
let unChiffre = 34;
// On change la variable
unChiffre = 12;
console.log(unChiffre);
// Affiche 12 etant la derniere modif effectué

// Concaténation 
let nombre = 24;

let nouvelleChaîne = "Le chiffre attendu est : " + nombre;
console.log(nouvelleChaîne);

// Les types de données
// types chaine de caractere
let string = "Je suis une chaîne de caractère";
// types nombre
let number = 24;
// types bouleen
let boulean = true;
// types tableaux
let array = ["je", "suis", 24, false];
// types objet
let object = {
    name : "Audrey",
    age : 34,
    ville : "Paris",
};
// Demander le type de qqch
console.log(typeof string);

// type null et undefined
// type undefined
let arbre;
console.log(arbre);
// type null
let arbres = null;
console.log(arbres);
console.log(typeof arbres);

// les opérateurs
console.log(4 + 5);
console.log(5 * 5);
console.log(4 / 8);
console.log(9 - 3);
// puissance
console.log(2 ** 4);

//les operateur d'affectation
let total = 2;
//addition +1
total++
console.log(total);
// multiplication
total *=5
console.log(total);

//structure de controle if else
let x = 2;
let y = 5;

if(x < y){
    console.log("x est inferieur à y");
} else {
    console.log("x est supéieur à y");
}
//test d'égalité
if (x === y){
    console.log("True !");
} else {
    console.log("False");
}

//test d'égalité a double test
if (x === y){
    console.log("True !");
} else if (x == y){
    console.log("x et y égaux en valeur");
} else{
    console.log("x et y ne sont pas du tout égaux");
}

// les fonctions
function faireQuelqueChose(){
    console.log("Je fais un truc !");
    console.log("Trop cool");
}
faireQuelqueChose();

//fonction fléché
const faireUneTache = (tache) =>{
    console.log("Je fais : " + tache);
};
faireUneTache("Les course");

//return retourne le calc que l'on demande dans la console
function calc(x, y){
   return x + y;
   //tout sous le return ne sera pas lu
}