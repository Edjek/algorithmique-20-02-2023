/* ------------------ Les commentaires ------------------ */

// Un commentaire en Javascript
/*
    Un commentaire multiligne
    en javascript
*/

/* ------------------ Les variables ------------------ */

// Déclaration d'une variable
let uneVariable;

// Affectation de la variable
uneVariable = 2;

// Réaffectation d'une variable (on change sa valeur)
uneVariable = 8;

// Les 2 peuvent se faire en même temps
// Les variables sont sensibles à la casse (majuscule/minuscule)
let helloWorld = 'Hello, World';

// Affichage d'un message dans la console
// console.log('Je suis un message affiché dans la console');
// Affichage d'une variable dans la console
// console.log(helloWorld);

// Affectation d'une variable dans une autre variable
let test = helloWorld;
// console.log(test)

// Il existe plusieurs types de variables (entiers, réels, chaînes de caractère, booléens, etc...)
let number = 23;
let decimal = 18.5;
let varchar = 'je suis un message';
// true ou false
let boolean = true;

// Comment utiliser les guillemets dans une chaine de caractère(les doubles guillemets)
let message = "J'apprend l'algorithmique";

/* ------------------ La Concaténation ------------------ */

let firstName = 'Rachid';
let lastName = 'EDJEKOUANE';
let age = 39;
// console.log("Bonjour, je m'appelle " + firstName + ' ' + lastName + " j'ai " + age + ' ans!');

let formation = 'Doranco';
let duration = 2;
// console.log('Bonjour, je suis une formation à ' + formation + ' depuis ' + duration + ' mois');

// Les opérations mathématiques ( +, -, *, / )

let result = 2 * 3;
console.log('je contiens ' + result);

let a = 12;
let b = 45;
let resultat = a * b;
console.log('je contiens ' + resultat);

// Utilisateur donne une valeur
// let ages =  prompt('Quel est ton age?');
// console.log(ages);

// On va demander un nombre, on l'affecte dans une variable
// On va demander un deuxieme nombre, on l'affecte dans une autre variable
// On affiche "le resultat de la multiplication est : " X
// let c = prompt('Quel est votre nombre');
// let d = prompt('Quel est votre nombre');
// let res = c * d;
// console.log('le resultat de la multiplication est : ' + res);

/* ------------------ Instructions Conditionnelles ------------------ */
// let condition = prompt('Quel est ton age ?');

// // Les opérateurs de comparaison (==, !=, >, >=, <, <=)
// if (condition == 18) {
//     console.log('bravo, tu as le droit à un cadeau!');
// } else if (condition < 18) {
//     console.log('Tu es mineur!');
// } else {
//     console.log('Tu es trop vieux!');
// }

// demander à l'utilisateur s'il a des enfants
// s'il repond oui
// demander si c'est un garcon
// si c'est oui afficher il doit aimer le foot
// sinon affiche je sais pas ce qu'il aime
// s'il repond non
// afficher ce n'est pas un garçon
// let response = prompt('est-ce que vous avez des enfants?');

// if (response == 'oui') {
//     let sex = prompt('Est-ce un garçon?');
//     if (sex == 'oui') {
//         console.log('il doit aimer le foot')
//     } else {
//         console.log("je ne sais ce qu'il aime")
//     }
// } else if (response == 'non') {
//     console.log("ce n'est pas un garçon");
// }

// Les operateurs logiques OU et ET
let val = 18;

if (val < 10 || val > 20) {
} else if (val != 18 && val < 16) {
}

// Ecrire un algorithme qui demande à l'utilisateur son age.
// On va repondre indique ensuite à l'utilisateur quel film il peut aller voir.
// "Action Man" si moins de 13 ans
// "Matrix" si il a entre 13 et 18 ans
// "Evil Dead" si plus de 18ans

// let userAge = prompt('Quel est ton âge?');

// if (userAge < 13) {
//     console.log('Action Man');
// } else if (userAge >= 13 && userAge <= 18) {
//     console.log('Matrix');
// } else if (userAge < 18) {
//     console.log('Evil dead');
// }

/* --------------------------- Les boucles -------------------------- */

// Boucle à itérations définies (for)
// for (let i = 0; i <= 10; i++) {
//     console.log(i);
// }

// Ecrire une table de multiplication automatiser
// demander une chiffre à notre utilisateur
// boucle
// afficher
// 9 x 0 = 9
// 9 x 1 = 9
// 9 x 2 = 18

// let chiffre = prompt('Quelle table de multiplication voulez-vous?');
// for (let i = 0; i < 10; i++) {
//     let result = chiffre * i;
//     console.log(chiffre + ' x ' + i + ' = ' + result);
// }

// Écrire un algorithme qui demande un nombre entier non nul de départ,
// et qui calcule la somme des entiers jusqu’à ce nombre. Par exemple, si l’on entre 5, le programme doit calculer : 1 + 2 + 3 + 4 + 5 = 15.

// let chiffre = prompt('Quelle table de multiplication voulez-vous?');

// let res = 0;
// for (let i = 0; i <= chiffre; i++) {
//     res = res + i;
// }

// console.log(res);

// Boucle à itérations non définies (while)
// let i = 0;
// let chiffre = prompt('Quel est votre chiffre ?')
// let sapin ='#';

// while (i <= chiffre) {
//     console.log(sapin)
//     sapin = sapin + '#';
//     i++;
// }

// Utilisateur nous donne un nombre
// tant que on a pas atteint le chiffre
// #
// ##
// ###

/* --------------------------- Les fonctions --------------------------- */

function coucou() {
    let i = 0;
    let chiffre = prompt('Quel est votre chiffre ?');
    let sapin = '#';

    while (i <= chiffre) {
        console.log(sapin);
        sapin = sapin + '#';
        i++;
    }
}

// Une fonction n'est executé que lorsqu'elle est appelé

// coucou();

function afficher(x) {
    console.log(x);
}

afficher(12);

afficher('test');

function add(x, y) {
    return x + y;
}

function divide(x, y) {
    return y / x;
}

let r = divide(4,7)
console.log(r)


let value = add(12, 13);
console.log(value);

// créer un fonction qui aura un parametre
// return le carre de ce parametre
// appelle la fonction on la recupère la valeur dans une variable et on l'affiche
