// const price1 = 15.678;
// const price2 = 123.965;
// const price3 = 90.2345;
// const max_price = Math.max(price1, price2, price3);
// const min_price = Math.min(price1, price2, price3);

// console.log(Math.max(price1, price2, price3), Math.min(price1, price2, price3));

const prices = [15.678, 123.965, 90.2345]; // Зробила масив з цін, щоб зменшити кількість констант
const maxPrice = Math.max(...prices); // Обираю максимальну ціну з даних
const minPrice = Math.min(...prices); // Обираю мінімальну ціну з даних

console.log(maxPrice, minPrice); // Виводжу в консоль максимальну і мінімальну ціни

// const sum = price1 + price2 + price3;
// console.log(sum);

const sum = prices.reduce((total, price) => total + price, 0); // Перебираю дані з масиву методом "редюс" і сумую їх, задаю початкове значення для тотал 0, щоб йшов перебір не за дефолтним першим значенням з масиву; елементи з масиву прайсес отримують назву прайс
console.log(sum); // Виводжу в консоль суму

// const floor_price1 = Math.floor(price1);
// const floor_price2 = Math.floor(price2);
// const floor_price3 = Math.floor(price3);
// const floor_sum = floor_price1 + floor_price2 + floor_price3;
// console.log(floor_sum);

const floorPrices = prices.map(price => Math.floor(price)); // Зменшую к-сть констант методом "мап" перебору масиву і задаю їм округлені до низу значення 
const floorSum = floorPrices.reduce((total, price) => total + price, 0); // Переназначаю суму
console.log(floorSum); // Виводжу в консоль нову занижену суму

const smallSum = Math.floor(floorSum / 200) * 200; // Тут нічого не змінювала
console.log(smallSum);

// var is_sum = (smallSum % 2 === 0); // Не помітила що вар написала
// console.log(is_sum);

const isSumEven = smallSum % 2 === 0; // Перейменувала 
console.log(isSumEven);

const payment = 500;
const change = payment - floorSum;
console.log(change);

const average = sum / prices.length; // Зминіла сталу цифру 3 на змінну яка залежить від кількості елементів в масиві, на випадок якщо кількість колись зміниться
const roundedAverage = Math.round(average * 100) / 100;
console.log(roundedAverage);

const discount = Math.random();
const discountSum = sum - (sum * discount);
const roundedDiscount = Math.round(discountSum * 100) / 100;
console.log(roundedDiscount);

// const cost_price1 = price1 / 2;
// const cost_price2 = price2 / 2;
// const cost_price3 = price3 / 2;
// const cost_sum = cost_price1 + cost_price2 + cost_price3;

const costPrices = prices.map(price => price / 2); // Зменшую к-сть констант методом "мап" перебору масиву та задаю вартість закупки вдвічі нижчу від встановленої вартості продажу
const costSum = costPrices.reduce((total, price) => total + price, 0); // Сума вартості закупки товарів
const profit = discountSum - costSum; // Прибуток, хоча я не розумію як випадкову знижку можна надавати на повну вартість товару а не на долю з профіту
console.log(profit);

const result = `Максимальна ціна: ${maxPrice};\n
Мінімальна ціна: ${minPrice};\n
Вартість всіх товарів: ${sum};\n
Сума товарів округлена вниз: ${floorSum};\n
Сума товарів округлена до найнижчої сотні: ${smallSum};\n
Сума товарів є парним числом: ${isSumEven};\n
Решта з 500 грн: ${change};\n
Середнє значення цін, з двома копійками: ${roundedAverage};\n
Розмір випадкової знижки: ${discount};\n
Сума до оплати зі знижкою: ${roundedDiscount};\n
Прибуток: ${profit}`;
console.log(result);