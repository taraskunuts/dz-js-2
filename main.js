

let celsTemperature = 29; 
let fahrTemperature = (celsTemperature * 9/5) + 32; //формулу та символи цельсія і фаренгейта знайшов в гуглі
console.log(celsTemperature + "°C");
console.log(fahrTemperature + "°F");


let daysInMonth = 30;
let hoursInMonth = daysInMonth * 24;
let minutesInMonth = hoursInMonth * 60;
// в дні є 24 години а в 24 годинах 60 хвилин
console.log(daysInMonth);
console.log(hoursInMonth);
console.log(minutesInMonth);


let healthAmount = 100;
let energyAmount = 100;


healthAmount = 100 - 20;
energyAmount = 100 - 15;
// Ти побився, при цьому втрачаючи здоров'я і енергію
console.log(healthAmount);
console.log(energyAmount);


let flyingNumber = 3.37;
let flyedNumber = Math.floor(flyingNumber);//За допомогую Math.floor ми округлюємо число до меншого тобто 3,37 до 3
console.log(flyingNumber);
console.log(flyedNumber);

let stringValue = "12.37";
let decimalNumber = parseFloat(stringValue);//Властивіть parseFloat робить із String(рядка) Number(число)
console.log(stringValue);
console.log(decimalNumber);


let stringInteger = "42";
let integerNumber = parseInt(stringInteger);//Те саме що parseFloat але перетворює цілі числа
console.log(stringInteger);
console.log(integerNumber);


//P.S роблячи це дз я помітив що String елементи на консолі позначені чорним кольором а елементи Number-синьо-фіолетовим
let myNumber = 16;
let squareNumber = Math.sqrt(myNumber);//Властивітсть Math.sqrt показує як числа виглядають якщо їх подати в квадраті тобно 16 це є 4 в 2 степені
console.log(myNumber);
console.log(squareNumber);


let integerValue = 42;
let stringNumber = "58";
let parsedInteger = parseInt(stringNumber);
let stringFromInteger = integerValue.toString();//Базові властивості для перетворення з числа в рядок
console.log(stringNumber);
console.log(parsedInteger);
console.log(integerValue);
console.log(stringFromInteger)

//credits!
//Особлива подяка дядьку гуглу за переводчик :D