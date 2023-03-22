const arrayOfNumbers = [8, 5, 7, 36, 4];

const arrayOfStrings = ["El", "carro", "rojo", "corre"];

const arrayOfThreeTypes = [24, true, "vida"];

// a) Imprima a **quantidade de itens** de cada array (utilize um `console.log()` para cada impressão).
console.log(arrayOfNumbers.length);
console.log(arrayOfStrings.length);
console.log(arrayOfThreeTypes.length);

// b) Imprima o **primeiro item** do primeiro array, o **segundo item** do segundo array, e o **terceiro item** do terceiro array.
console.log(arrayOfNumbers[0]);
console.log(arrayOfStrings[1]);
console.log(arrayOfThreeTypes[2]);

// c) **Verifique** se um item está incluído no primeiro array e depois no terceiro array. Imprima o resultado dessas verificações no `console.log()`. A primeira impressão deve retornar um booleano **true** e a segunda deve retornar um booleano **false**.
console.log(arrayOfNumbers.includes(36));
console.log(arrayOfThreeTypes.includes(36));