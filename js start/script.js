const price1 = 15.678;
const price2 = 123.965;
const price3 = 90.2345;
const max_price = Math.max(price1, price2, price3);
const min_price = Math.min(price1, price2, price3);

console.log(Math.max(price1, price2, price3), Math.min(price1, price2, price3));

const sum = price1 + price2 + price3;
console.log(sum);

const floor_price1 = Math.floor(price1);
const floor_price2 = Math.floor(price2);
const floor_price3 = Math.floor(price3);
const floor_sum = floor_price1 + floor_price2 + floor_price3;
console.log(floor_sum);


const small_sum = Math.floor(floor_sum / 200) * 200;
console.log(small_sum);

var is_sum = (small_sum % 2 === 0);
console.log(is_sum);

const payment = 500;
const change = payment - sum;
console.log(change);

const average = sum / 3;
const rounded_average = Math.round(average * 100) / 100;
console.log(rounded_average);

const discount = Math.random()
const discount_sum = sum - (sum * discount);
const rounded_discount = Math.round(discount_sum * 100) / 100;
console.log(rounded_discount);

const cost_price1 = price1 / 2;
const cost_price2 = price2 / 2;
const cost_price3 = price3 / 2;
const cost_sum = cost_price1 + cost_price2 + cost_price3;
const profit = discount_sum - cost_sum;
console.log(profit);

const result = `Максимальна ціна: ${max_price}; Мінімальна ціна: ${min_price}; Вартість всіх товарів: ${sum}; Сума товарів округлена вниз: ${floor_sum}; Сума товарів округлена до найближчої сотні: ${small_sum}; Сума товарів є парним числом: ${is_sum}; Решта з 500 грн: ${change}`;
console.log(result);