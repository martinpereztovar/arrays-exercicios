const arrayOfNumbers = [8, 5, 7, 36, 4];

const arrayOfStrings = ["El", "carro", "rojo", "corre"];

const arrayOfThreeTypes = [24, true, "vida"];

// Copie cada um dos arrays originais para sua respectiva cópia usando o método `slice()`.

const arrayOfNumbersCopy = arrayOfNumbers.slice();
const arrayOfStringsCopy = arrayOfStrings.slice();
const arrayOfThreeTypesCopy = arrayOfThreeTypes.slice();

// Faça o que se pede abaixo nas **cópias** dos arrays originais:

// a) Adicione um item `number` ao **início** do primeiro array. 
// Utilize `console.log()` para exibir o original e a cópia.
arrayOfNumbersCopy.unshift(57);
console.log(arrayOfNumbers);
console.log(arrayOfNumbersCopy);

// b) Remova o **último item** do segundo array. 
// Utilize `console.log()` para exibir o original e a cópia.
arrayOfStringsCopy.pop();
console.log(arrayOfStrings);
console.log(arrayOfStringsCopy);

// c) Remova o **segundo item** do terceiro array. 
// Utilize `console.log()` para exibir o original e a cópia.
arrayOfThreeTypesCopy.splice(1,1)
console.log(arrayOfThreeTypes);
console.log(arrayOfThreeTypesCopy);