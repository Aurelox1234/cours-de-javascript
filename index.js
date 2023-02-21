// commentaire JS une ligne



/*
commentaire JS sur plusieurs lignes
*/

// boite de dialogue

//alert('Bonne année à tous!!!'); permet d'afficher un message d'utilisateur
//confirm('Etes vous sûr ?'); permet de récupérer une confirmation d'utilisateur
//prompt('Quel age avez vous?'); permet de récupérer une saisie d'utilisateur

// ces boites de dialogues sont utilisées pour délivrer une information d'utilisateur.

//var prenom=prompt('Quel est votre prenom'); // on récupère la saisie dans une variable

//document.write('Bonjour'+' '+ prenom);

// Affichage dans la console du navigateur
// Outils de débuggage qui permet de controler les données, le contenu d'une variable, d'un objet, d'un tableau,etc.
//console.log('Affichage dans la console');
//console.info('Attention aux erreurs de syntaxe')
//console.dir('Attention aux erreurs de syntaxe')

// Affichage du DOM dans la console

/*
DOM:DOCUMENT OBJET MODELE
Le DOM est un programme interne a notre navigateur qui fait en sorte que chaque élément de notre document html soit récupérable, manipulable par un langage de programmation
*/
//console.log(document);

document.write('<h4>Variables : declaration /affectation </h4>');

//chaque instruction se termine toujours par un point virgule ";" c'est le délimitateur

//Declaration avec "VAR"
var maBoite; //declaration d'une variable nommée 'maBoite'
// le mot clé VAR permet de déclarer une variable, caractères autorisés : 0-9, A-Z, a-z, $ et _
// Attention JAVASCRIPT est sensible à la casse : var A n'est pas la même chose que var a

//il n'est pas possible de déclarer une variable commençant par un chiffre

// Affectation

// = : simple signe égal permet d'affecter une  valeur à une variable

var maBoite=10; // affectation de la valeur numérique 10 dans le variable maBoite
console.log(maBoite);

//déclaration avec 'let'
/*
une variable déclarée avec let n'existe que dans le bloc où elle a été déclarée, un bloc en javascript et à l'interieur des accolades{}
if(condition) {//bloc}
    function true() {//bloc}
        while(condition) {//bloc}
*/

{let testLet = "Un test";
document.write(testLet);}


//il est possible de déclarer deux variables du même nom avec var
var test1 = 123;
var test1 = 356;
console.log(test1);

//ce n'est pas possible dans le même bloc
let test2 = 123;


//Il est plutôt à la mode de dire qu'il faut utiliser let plutôt que var
// ce sont deux outils de langage et c'est aux développeurs de faire les bons choix


//DECLARATION avec CONST
// Une constante tout comme une variable permet de conserver une valeur sauf que nous ne pourrons pas modifier la valeur de la constante durant l'execution du code

//Il faut obligatoirement affecter une valeur lors de la déclaration de la constante

const TESTCONST = "une constante";
console.log(TESTCONST);

document.write("<h4> Les types de données</h4>");

//Les types numériques

let chiffres = 20;
let negatif = -20;

//les types chaines de caracteres
let monTexte = "Voici une phrase écrtite en double quotes";
let apostrophe = "pour l'utilisation d'une apostrophe dans les quotes simples, il faut mettre un caractere d'échappement";

let numero = '10';// la valeur de la variable est 10 mais son type est STRING

// les types booleans
let choix = true; //ou false

document.write(typeof chiffres);//Types: NUMBER
document.write('<br>');
document.write(typeof negatif); //Types: NUMBER
document.write('<br>');
document.write(typeof monTexte);//Types: STRING
document.write('<br>');
document.write(typeof numero);//Types: STRING
document.write('<br>');
document.write(typeof choix);//Types: boolean

// Il existe un grand nombre de fonctions predefinies en JAVASCRIPT permettant de realiser des traitements specifiques
// typeof() est une fonction predefinie qui retourne le type d'une variable
// On appelle toujours une fonction predefinie avec des parantheses puisqu'elle peut potentiellement recevoir des arguments

document.write("<h4>La concatenation</h4>")

var prenom = "Bruce"
nom = "Wayne";

// + : concatenation, que l'on peut traduire par "suivi de"
document.write(prenom +' '+"<strong>" + nom +"</strong>" );
document.write('<br>');

let jaune = "jaune";
document.write("<font color = yellow>" + jaune + "</font>")
document.write('<br>');

let rouge = "rouge";
document.write("<font color = red>" + rouge + "</font>")
document.write('<br>');

let vert = "vert";
document.write("<font color = green>" + vert + "</font>")

// fonctionne avec tous les operateurs : +=, -=, *=, /=, %=
//chiffre += 5; //raccourci, equivaut a chiffre1 = chiffre1 + 5

document.write("<h4>Conditions et opérateurs de comparaison</h4>");

/*
OPÉRATEURS DE COMPARAISON

*       affectation
==      comparaison de la valeur
===     comparaison de la valeur et du type
<       strictement inferieur à
>       strictement supérieur à
<=      inférieur ou égal à
>==     supérieur ou égal à
AND &&  ET
OR ||   OU
!       n'est pas
!=      différent de

*/ 
let a = 0,
b=5,
c=2;

// le cas esle n'est pas indispensable

//IF /ELSE
//On déclare la condition dans les parentheses du IF
//Si la condition renvoie true, si elle est vérifiée, on entre dans les accolades et le code s'execute.

//10 > 5 

if(a>b) {
    document.write("A supérieur à B")
} else {
    document.write("Non c'est B qui est supérieur à A. <br>")
};

// IF avec AND
// Il est possible de déclarer plusieurs conditions dans le IF grâce à des opérateurs
// Avec AND il faut que les 2 conditions soient vérifiées entre les accolades

if(a>b && b>c) {
    document.write("Ok pour les 2 conditions <br>")
} else {
    document.write("C'est non! <br>");
}
// IF avec OR
if(a==9 || b>c) {
    document.write("Ok pour au moins l'une des deux conditions. <br>");
}

//IF/ ELSEIF /ELSE

if (a == 8) {
    document.write("A est égal à 8. <br>");
} else if (a>c) {
    document.write("B est supérieur à C. <br>");
} else if (c == 2) {
    document.write("C est égal à 2. <br>");
} else {
    document.write("Tout le monde a faux. <br>");
}