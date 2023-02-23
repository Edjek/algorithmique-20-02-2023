/* --------------------------- Les Commentaires --------------------------- */

// Un commentaire sur une ligne en Javascript
/* 
    Un commentaire multiligne
    en Javascript 
*/

/* --------------------------- Affichage --------------------------- */

//Afficher des informations dans la console de debbugage du navigateur
console.log('Hello World!');

//Afficher une boite de dialogue avec champs à remplir
prompt('Quel age avez-vous ?');

/* --------------------------- Les Variables --------------------------- */

//  Déclaration d'une Variable
let uneVariable;

// Affectation d'une variable
uneVariable = 'Je suis une variable!';

// Les 2 se font généralement en même temps
// Les variables sont sensibles à la casse (majuscules/minuscules)
let helloWorld = 'Hello world!';

// Affichage d'une variable dans la console
console.log(uneVariable);
console.log(helloWorld);

// Affectation d'une variable dans une autre variable
let affectation = helloWorld;
console.log(affectation);

/* --------------------------- La Concatenation --------------------------- */

let nom = 'EDJEKOUANE';
let prenom = 'Rachid';

// Concaténation (Afficher du texte et des variables)
console.log("Je m'appelle " + nom + ' ' + prenom);

// Déclarer une chaine de caractère, un nombre, booléen
let varchar = 'salut tout le monde';
let number = 2;
let decimal = 20.3;
let boolean = true;

// Les opérations mathématiques (+, -, *, / )
let resultat = number * decimal;
console.log(resultat);

// Comment utiliser les guillemets dans une chaine de caractère
let message = "J'apprend l'algorithmie";
console.log(message);

let unNouveauMessage = "J'apprend encore l'algorithmie";
console.log(unNouveauMessage);

/* --------------------------- Instructions Conditionnelles --------------------------- */

let condition = 19;

// Si (if)
if (condition == 18) {
    console.log('tout est ok');
}

// Si, Sinon (if, else)
if (condition == 17) {
    console.log('tout est ok');
} else {
    console.log('Houston, nous avons un problème');
}

// Si, Sinon Si, Sinon (if, else if, else)
if (condition == 17) {
    console.log('tout est ok');
} else if (condition == 19) {
    console.log('là ça va');
} else if (condition == 20) {
    console.log('là ça va encore');
} else {
    console.log('Houston, nous avons un problème');
}

// Les opérateurs de comparaison (==, !=, >, >=, <, <=)
if (condition >= 18) {
    console.log('Tu es majeur, bravo');
} else {
    console.log('Houston, nous avons un problème');
}

// Les opérateurs logique OU (||) et ET (&&)
let permis = true;
if (condition >= 18 || permis == true) {
    console.log('Tu es majeur et tu as le permis');
} else {
    console.log('Houston, nous avons 2 problèmes');
}

// Récupérer une valeur de l'utilisateur
let age = prompt('quel ages as-tu?');

if (age >= 18) {
    console.log('tu es majeur!');
} else {
    console.log('tu es mineur');
}

/* --------------------------- Les Boucles --------------------------- */

// Boucle à itérations définies (for)
for (let i = 0; i < 5; i++) {
    console.log(i);
}

// Boucle à itérations non définies (while)
let i = 0;
let diese = '#';
while (i < 18) {
    console.log(diese);
    diese += '#';
    i++;
}
console.log('Enfin fini de tourner en rond!');

// Boucle Tant Que (while)
let majeur = prompt('quel ages as-tu?');
while (majeur < 18) {
    majeur = prompt('Tu es mineur, tu ne peux pas rentrer! (Mens sur ton age)');
}

/* --------------------------- Les Fonctions --------------------------- */

function add(x, y) {
    return x + y;
}

// Une fonction n'est executée que lorsqu'elle est appelée
let result = add(7, 3);

// Portée des variables dans une fonction
// locale ou globale
function test() {
    let value = 4;
    return 2;
}

let res = test();
console.log(res);

// Une variable déclarée dans une fonction n'est pas accessible en dehors de sa fonction
// Une erreur est générée en tentant de l'afficher
console.log(value);

/* --------------------------- Les tableaux --------------------------- */

let vegetables = ['pain', 'lait', 'fromage', 'houmous', 'nouilles'];

// On peut afficher une case d'un tableau via son indice
// ! Attention l'indice d'un tableau commence à 0
console.log(vegetables[4]);
