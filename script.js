// Exercie 1
const fruits = ["Banana", "Apples", "Oranges", "Blueberries"];
fruits.splice(0, 1);
fruits.sort();
fruits.push("Kiwi");
fruits.splice(0, 1);
fruits.reverse();
console.log();

// Exercice 2
const moreFruits = ["Banana", ["Apples", ["Oranges"], "Blueberries"]];
const el_orange = moreFruits[1][1][0];
console.log(el_orange);
