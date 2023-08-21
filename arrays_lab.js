//1
let oddNumbers = [1, 3, 5, 7, 9,  10, 11, 13, 15, 17, 19, 20];

const isOnlyoddNumer = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    const isOdd = arr[i] % 2 !== 0;
    console.log(isOdd);
  }
};

isOnlyoddNumer(oddNumbers);
oddNumbers[5] = 21;
oddNumbers[11] = 23;
console.log(oddNumbers);


//2
const fahrenheitTemps = [32, 50, 68, 86, 104, 122, 140, 158, 176, 194];

const calculateAverageAndHighest = (temps) => {
  let sum = temps.reduce((total, temp) => total + temp, 0);
  let average = sum / temps.length;
  let highest = Math.max(...temps);
  console.log(`Average temperature: ${average}°F`);
  console.log(`Highest temperature: ${highest}°F`);
};

calculateAverageAndHighest(fahrenheitTemps);


//3
const fruits = ["Apple", "Banana", "Orange", "Grapes", "Mango"];

const searchAndAddFavorite = (favoriteFruit) => {
  let index = fruits.indexOf(favoriteFruit);

  if (index == -1) {
    fruits.push(favoriteFruit);
    console.log(`${favoriteFruit} added to the list of fruits.`);
  } else {
    console.log(`${favoriteFruit} is already in the list of fruits.`);
  }
};

const favoriteFruit = "honeydew";
searchAndAddFavorite(favoriteFruit);


//4
const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October"];

let shortenMonths = (arr) => {
  return arr.map(month => month.substring(0, 3));
  
}

shortenedMonths = shortenMonths(months);
console.log(shortenedMonths);


//5
const mixedData = [42, 'hello', true, 3.14, 'world', false, null, undefined, 'goodbye', 7];

const onlyStrings = [];

mixedData.forEach(item => {
  if (typeof item === 'string') {
    onlyStrings.push(item);
  }
});

console.log(onlyStrings);