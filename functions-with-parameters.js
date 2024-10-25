/* Opdracht 0: voorbeeld */
// Schrijf een functie genaamd add, die twee getallen verwacht, die bij elkaar optelt en teruggeeft
// ---- Verwachte uitkomsten:
// add(1, 4) geeft 5
// add(2, 5) geeft 7

function add(a, b) {
  return a + b;
}

const result = add(1, 4);
console.log(result);

/* Opdracht 1 */
// Schrijf een functie genaamd greeter, die een naam verwacht en een groet teruggeeft
// ---- Verwachte uitkomsten:
// greeter("Jan") geeft "Hoi Jan!"
// greeter("Kees") geeft "Hoi Kees!"

function greeter(name){
  return "Hoi " + name + "!";
}

const greet = greeter("Jan");
console.log(greet);

/* Opdracht 2 */
// Schrijf een functie genaamd minutesToSeconds, die een hoeveelheid minuten verwacht (als een getal) en teruggeeft hoeveel seconden dat zijn.
// ---- Verwachte uitkomsten:
// minutesToSeconds(1) geeft 60
// minutesToSeconds(3) geeft 180
// minutesToSeconds(23) geeft 1380

function minutesToSeconds(minutes) {
  return minutes * 60;
}

const seconds = minutesToSeconds(23);
console.log(seconds);

/* Opdracht 3 */
// Schrijf een functie genaamd merge, die twee strings verwacht en deze aan elkaar geplakt teruggeeft.
// Let op: je mag hier geen String methoden voor gebruiken zoals concat().
// ---- Verwachte uitkomsten:
// merge("abra", "cadabra") geeft "abracadabra"
// merge("zoet", "sappig") geeft "zoetsappig"

function merge (sentenceOne, sentenceTwo) {
  return sentenceOne + sentenceTwo;
}

const numberOfSecondsOne = merge("abra", "cadabra");
const numberOfSecondsTwo = merge("zoet", "sappig");

console.log(numberOfSecondsOne);
console.log(numberOfSecondsTwo);


/* Opdracht  4 */
// Schrijf een functie genaamd calculateDogYears die de hondenleeftijd verwacht en dit omrekent naar mensenjaren (1 tot 7). Op basis daarvan wordt een zinnetje teruggegeven.
// ---- Verwachte uitkomsten:
// calculateDogYears(6) geeft "Jouw hond is 42 jaar oud in mensenjaren."
// calculateDogYears(2) geeft "Jouw hond is 14 jaar oud in mensenjaren."

function calculateDogYears(dogAge) {
  return "Jouw hond is " + dogAge*7 + " jaar oud in mensenjaren.";
}

const ageDogOne = calculateDogYears(6);
const ageDogTwo = calculateDogYears(2);
console.log(ageDogOne);
console.log(ageDogTwo);

/* Opdracht 5 */
// Schrijf een functie genaamd wrapper, die twee parameters verwacht: een woord en een karakter
// De functie omwikkelt het woord met het karakter en geeft dit terug
// ---- Verwachte uitkomsten:
// wrapper("bril", "*") geeft "*bril*"
// wrapper("beep", "_") geeft "_beep_"
// wrapper("kaas", "Q") geeft "QkaasQ"

function wrapper (word, character) {
  return character + word + character;
}

const outcomeOne = wrapper("bril", "*");
const outcomeTwo = wrapper("beep", "_");
const outcomeThree = wrapper("kaas", "Q");
console.log(outcomeOne);
console.log(outcomeTwo);
console.log(outcomeThree);

/* Bonus opdracht  */
// Schrijf een functie genaamd createDetailString, die een object met de properties firstName, lastName en profession verwacht en een zin teruggeeft
// ---- Verwachte uitkomsten:
// createDetailString({ firstName: 'Jan', lastName: 'Jansen', profession: 'docent'}) geeft "Het beroep vam Jan Jansen is docent."
// createDetailString({ firstName: 'Kees', lastName: 'Klaasen', profession: 'brandweerman'}) geeft "Het beroep vam Kees Klaasen is brandweerman."

function createDetailString (detailsObject) {
  return "Het beroep van " + detailsObject.firstName + " " + detailsObject.lastName + " is " + detailsObject.profession;
}

const detailStringOne = createDetailString({ firstName: 'Jan', lastName: 'Jansen', profession: 'docent'});
console.log(detailStringOne);
const detailStringTwo = createDetailString({ firstName: 'Kees', lastName: 'Klaasen', profession: 'brandweerman'});
console.log(detailStringTwo);