let log = console.log;

// Завдання 1
/**
 * Функція `complexConvert` отримує об'єкт з числовими значеннями і збільшує їх на 1.
 *
 *  data - json дані для обробки.
 * Повертає - json дані в яких всі числові значення збільшено на 1.
 */
function complexConvert(data) {
  //   log(data);
  let obj = {}; // Створюємо новий порожній об'єкт для збереження результату.

  obj = JSON.parse(data); // Перетворюємо json дані в об'єкт та отримуємо всі ключі об'єкта.
  //   log(obj);
  let keys = Object.keys(obj); // Принимает в качестве аргумента объект и выдает массив с заданными ключами объекта
  //   log(keys);

  // Обходимо всі ключі та перевіряємо значення.
  // Итерируем метод Object.keys(obj) с методом forEach для получения доступа к паре ключ-значение объекта
  keys.forEach((key) => {
    let value = obj[key];
    // log(value);

    if (typeof value === "number") {
      obj[key] = value + 1; // Якщо значення є числом, збільшуємо його на 1.
    } else {
      obj[key] = value;
    }
  });

  return JSON.stringify(obj); // Повертаємо оброблений об'єкт.
}
console.log("Завдання: 1 ==============================");
const data = {
  name: "John",
  age: 30,
  city: "New York",
  grades: {
    math: 90,
    science: 80,
    history: 70,
  },
};
console.log(complexConvert(JSON.stringify(data)));
// Виведе
// {"name":"John","age":31,"city":"New York","grades":{"math":90,"science":80,"history":70}}

// Завдання 2
/*
   * Функція `manipulateUrl` приймає URL у вигляді рядка і виконує над ним різні операції.
   *
   * url - URL у вигляді рядка.
   *
   * Повертає об'єкт, що містить різні властивості URL.
   *  href: // Повний URL.
	  protocol: // Протокол URL.
	  host:  // Хост URL.
	  pathname // Шлях URL.
	  search // Рядок запиту URL.
	  params: Параметри URL у вигляді масиву пар [ключ, значення].
   */
function manipulateUrl(url) {
  let obj = new URL(url); // Створю ємо новий об'єкт URL.

  obj.protocol = "https"; // Змінюємо протокол URL на https.

  obj.host = "newhost.com"; // Змінюємо хост URL на 'newhost.com'.

  obj.searchParams.append("newParam", "newValue"); // Додаємо параметр 'newParam' зі значенням 'newValue' до URL.

  // якщо параметр 'oldParam' існує
  if (obj.searchParams.has("oldParam")) {
    obj.searchParams.delete("oldParam"); // Видаляємо з URL
  }
  // Повертаємо об'єкт, який містить різні властивості URL.
  return {
    href: obj.href,
    protocol: obj.protocol,
    host: obj.host,
    pathname: obj.pathname,
    search: obj.search,
    params: [...obj.searchParams.entries()],
  };
}
console.log("Завдання: 2 ==============================");

// Приклад використання функції manipulateUrl
let url = "http://example.com/path?param1=value1&param2=value2";

console.log(manipulateUrl(url));
// Виведе
// {
//   href: 'https://newhost.com/path?param1=value1&param2=value2&newParam=newValue',
//   protocol: 'https:',
//   host: 'newhost.com',
//   pathname: '/path',
//   search: '?param1=value1&param2=value2&newParam=newValue',
//   params: [
//     [ 'param1', 'value1' ],
//     [ 'param2', 'value2' ],
//     [ 'newParam', 'newValue' ]
//   ]
// }

// Завдання 3
/*
 * Функція `searchParamsURL` створює новий об'єкт URL з вхідної URL-адреси та повертає об'єкт з параметрами пошуку URL.
 *  url - Вхідна URL-адреса для аналізу.
 *  Повертає об'єкт з параметрами пошуку URL.
 */
function searchParamsURL(url) {
  let obj = new URL(url); // Створення нового об'єкта URL з вхідного рядка

  let URLSearchParams = obj.searchParams; // Отримання об'єкта URLSearchParams з властивості 'searchParams' об'єкта URL
  //   log(URLSearchParams);
  let params = new Map([]); // Створення порожнього словника для збереження параметрів пошуку

  // Перебір кожного параметра пошуку з 'searchParams'
  URLSearchParams.forEach((key, value) => {
    // Кожен 'param' - це масив, де [0] - ім'я параметра, а [1] - значення параметра
    params.set(key, value); // додавання їх до словника 'params'
  });
  return params; // Повертаємо словник
}
console.log("Завдання: 3 ==============================");

// Демонстрація використання функції:
console.log(
  searchParamsURL(
    "https://example.com/pathname?param1=value1&param2=value2&param3=value3"
  )
);
// Виведе
// Map(3) {
//   'param1' => 'value1',
//   'param2' => 'value2',
//   'param3' => 'value3'
// }

// Завдання 4
/*
 * Функція `manipulateSearchParams` повинна приймати об'єкт з параметрами та нову URL-адресу.
 * paramsObj (об'єкт) - об'єкт, який містить параметри пошуку.
 * newUrl (рядок) - нова URL-адреса.
 *
 * Функція повертає нову URL-адресу з властивістю searchParams, оновленою за допомогою параметрів з paramsObj.
 */
function manipulateSearchParams(paramsObj, newUrl) {
  let urlObj = new URL(newUrl); // Створюємо новий об'єкт URL з нової URL-адреси.
  //   log(urlObj);
  let keys = Object.keys(paramsObj); // Використовуючи метод 'keys' з об'єкта Object, отримуємо всі ключі paramsObj.
  //   log(keys);
  // За допомогою циклу 'for of' перебираємо всі ключі
  for (let key of keys) {
    let value = paramsObj[key];
    // log(value);
    urlObj.searchParams.append(key, value); // додаємо параметри пошуку до urlObj.
  }
  return urlObj.toString(); // Повертаємо нову URL-адресу в рядковому форматі.
}
// Приклад використання функції manipulateSearchParams
console.log("Завдання: 4 ==============================");

console.log(
  manipulateSearchParams(
    { param1: "value1", param2: "value2" },
    "https://example.com/pathname"
  )
);
// Виведе: https://example.com/pathname?param1=value1&param2=value2

// Завдання 5
/*
 * Функція `deleteSearchParams` повинна приймати масив ключів параметрів і URL-адресу.
 * keys (масив) - масив, який містить ключі параметрів пошуку для видалення.
 * url (рядок) - URL-адреса.
 *
 * Функція повертає нову URL-адресу, з якої були видалені вказані параметри пошуку.
 */
function deleteSearchParams(keys, url) {
  let obj = new URL(url); // Створюємо новий об'єкт URL з URL-адреси.
  // За допомогою циклу 'for of' перебираємо всі ключі
  for (let item of keys) {
    obj.searchParams.delete(item); // видаляємо відповідні параметри пошуку з urlObj.
  }
  return obj.toString(); // Повертаємо нову URL-адресу в рядковому форматі.
}

// Приклад використання функції deleteSearchParams
console.log("Завдання: 5 ==============================");

console.log(
  deleteSearchParams(
    ["param1", "param2"],
    "https://example.com/pathname?param1=value1&param2=value2"
  )
);
// Виведе: https://example.com/pathname

// Завдання 6
/*
 * Функція `createURLWithParams` приймає об'єкт параметрів пошуку та базову URL-адресу.
 * params (об'єкт) - об'єкт, ключі та значення якого стануть параметрами пошуку нової URL-адреси.
 * url (рядок) - базова URL-адреса.
 *
 * Функція повертає нову URL-адресу, до якої додані параметри пошуку з об'єкта params.
 */
function createURLWithParams(params, url) {
  let urlObj = new URL(url); // Створюємо новий об'єкт URL з базової URL-адреси.

  // За допомогою циклу 'for in' перебираємо всі ключі та значення об'єкта params
  for (let id in params) {
    // log(id);
    let value = params[id];
    urlObj.searchParams.append(id, value); // додаємо значення об'єкта params як параметри пошуку до urlObj
  }
  return urlObj.toString(); // Повертаємо нову URL-адресу в рядковому форматі.
}

// Приклад використання функції createURLWithParams
console.log("Завдання: 6 ==============================");

console.log(
  createURLWithParams(
    { param1: "value1", param2: "value2" },
    "https://example.com"
  )
);
// Виведе: https://example.com/?param1=value1&param2=value2

// Завдання 7
/*
 * Функція `updateURLHash` приймає URL-адресу та рядок, і оновлює значення хеша в URL-адресі.
 * url (рядок) - URL-адреса, яку треба оновити.
 * hash (рядок) - нове значення хеша.
 *
 * Функція повертає нову URL-адресу з оновленим хешем.
 */
function updateURLHash(url, hash) {
  let urlObj = new URL(url); // Створюємо новий об'єкт URL з вхідної URL-адреси.

  urlObj.hash = hash; // Оновлюємо значення хеша в URL-адресі.

  return urlObj.toString(); // Повертаємо нову URL-адресу в рядковому форматі.
}

// Приклад використання функції updateURLHash
console.log("Завдання: 7 ==============================");

console.log(updateURLHash("https://example.com", "newHash"));
// Виведе: https://example.com/#newHash

// Завдання 8
/*
 * Функція `appendSearchParam` приймає URL-адресу, ключ і значення та додає новий параметр пошуку до URL-адреси.
 * url (рядок) - URL-адреса, до якої треба додати новий параметр пошуку.
 * key (рядок) - ключ нового параметра пошуку.
 * value (рядок) - значення нового параметра пошуку.
 *
 * Функція повертає нову URL-адресу з доданим параметром пошуку.
 */
function appendSearchParam(url, key, value) {
  let urlObj = new URL(url); // Створюємо новий об'єкт URL з вхідної URL-адреси.

  urlObj.searchParams.append(key, value); // Додаємо новий параметр пошуку до URL-адреси.

  return urlObj.toString(); // Повертаємо нову URL-адресу в рядковому форматі.
}
// Приклад використання функції appendSearchParam
console.log("Завдання: 8 ==============================");

console.log(appendSearchParam("https://example.com", "newParam", "newValue"));
// Виведе: https://example.com/?newParam=newValue

// Завдання 9
/*
 * Функція `modifyURLParameters` приймає URL та словник з параметрами пошуку.
 * Функція додає ці параметри до URL, а якщо такий параметр вже існує, замінює його.
 *
 * url - URL, який треба змінити.
 *  params - Словник з параметрами пошуку.
 * Повертається - Нова URL-адреса з оновленими параметрами пошуку.
 */
function modifyURLParameters(url, params) {
  let urlObj = new URL(url); // Створюємо новий об'єкт URL з вхідної URL-адреси.

  // Перебираємо словник params за допомогою for in
  for (let key in params) {
    let value = params[key]; // Отримаємо значення словника по ключу

    // Якщо параметр вже існує, метод set замінює його новим значенням.
    // Якщо параметр не існує, метод set додає його.
    urlObj.searchParams.set(key, value);
  }
  return urlObj.toString(); // Повертаємо нову URL-адресу в рядковому форматі.
}
console.log("Завдання: 9 ==============================");

// Приклад використання функції modifyURLParameters
let modifiedURL = modifyURLParameters("https://example.com/?param1=oldValue1", {
  param1: "newValue1",
  param2: "newValue2",
});
console.log(modifiedURL);
// Виведе: https://example.com/?param1=newValue1&param2=newValue2

// Завдання 10
/*
 * Функція `checkURLParameters` приймає URL та множину параметрів пошуку.
 * Функція перевіряє, чи є ці параметри в URL.
 *
 * url - URL, який потрібно перевірити.
 *  params - Множина параметрів, які потрібно перевірити.
 * Повертається - Об'єкт, ключі якого відповідають ключам вхідного об'єкта,
 *                    а значеннями є булеві значення, що вказують на наявність відповідного параметра в URL.
 */
function checkURLParameters(url, params) {
  let urlObj = new URL(url); // Створюємо новий об'єкт URL з вхідної URL-адреси.
  //   log(urlObj);

  let obj = {}; // Створюємо новий об'єкт для зберігання результатів.
  // Перебираємо елементи множини params за допомогою for of.
  for (let key of params) {
    let value = urlObj.searchParams.has(key);

    obj[key] = value; // Додаємо новий ключ в результат з булевим значенням, яке вказує, чи є параметр в URL.
  }
  return obj; // Повертаємо об'єкт з результатами.
}
console.log("Завдання: 10 ==============================");

// Приклад використання функції checkURLParameters
let params = new Set(["param1", "param2", "param3", "param4"]);

console.log(
  checkURLParameters(
    "https://example.com/?param1=value1&param2=value2&param3=value3",
    params
  )
);
// Виведе: { param1: true, param2: true, param3: true, param4: false }

// const order = { protocol: "http:" };
// const emptyOrder = Object.keys(order).length > 0;
// log(emptyOrder);

// Завдання 11
/*
 * Функція `processURL` приймає URL та об'єкт з параметрами та налаштуваннями для обробки URL.
 * url (рядок) - URL, який потрібно обробити.
 * options (об'єкт) - об'єкт, який містить параметри та налаштування для обробки URL.
 *
 * Функція повертає новий URL, який було сформовано на основі вхідного URL і параметрів обробки.
 */
function processUrl(url, options) {
  let urlObj = new URL(url); // Створюємо новий об'єкт URL з вхідної URL-адреси.
  //   log(urlObj);

  // Перевіряємо, чи в об'єкті 'options' є параметри пошуку.
  if (Object.keys(options).length > 0) {
    // Якщо є, перебираємо ці параметри за допомогою циклу 'for in'.
    for (let key in options.searchParams) {
      let value = options.searchParams[key];
      //   log((value = options.searchParams[key]));

      urlObj.searchParams.append(key, value); // Для кожного ключа параметру додаємо його та відповідне значення до об'єкта 'urlObj' за допомогою методу 'append'.
      //   log(urlObj);
    }
    //   Перевіряємо, чи в об'єкті 'options' є протокол.
    if (options.hasOwnProperty("protocol")) {
      urlObj.protocol = options.protocol; // Якщо є, змінюємо протокол 'urlObj' на протокол з 'options'.
    }

    // Перевіряємо, чи в об'єкті 'options' є хост.
    if (options.hasOwnProperty("host")) {
      urlObj.host = options.host; // Якщо є, змінюємо хост 'urlObj' на хост з 'options'.
    }
    return urlObj.toString(); // Повертаємо 'urlObj' у вигляді рядка за допомогою методу 'toString'.
  }
}
// Приклад використання функції processURL
console.log("Завдання: 11 ==============================");

console.log(
  processUrl("https://example.com/path", {
    searchParams: { param1: "value1", param2: "value2" },
    protocol: "http:",
    host: "newexample.com",
  })
);
// Виведе: 'http://newexample.com/path?param1=value1&param2=value2'

// Завдання 12
/*
 * Функція `manipulateQuery` отримує URL та словник з додатковими налаштуваннями та працює над пошуковими параметрами URL.
 *
 * url - URL для обробки.
 * options - Словник з налаштуваннями. Включає ключі `append` та `delete`.
 *
 * Повертається - Новий URL з модифікованими пошуковими параметрами.
 */
function manipulateQuery(url, options) {
  let urlObj = new URL(url); // Створюємо новий об'єкт URL з вхідної URL-адреси.
  //   log(urlObj);

  // Якщо в словнику `options` є ключ `append`...
  if (options.has("append")) {
    // ...перебираємо його ключі та значення за допомогою циклу for...of.
    for (let [key, value] of options.get("append")) {
      //   log(key, value);
      urlObj.searchParams.append(key, value); // Додаємо кожний ключ і значення до об'єкта `searchParams` в URL.
      //   log(urlObj);
    }
  }
  //   Якщо в словнику `options` є ключ `delete`...
  // log(options.has("delete"));
  if (options.has("delete")) {
    // ...перебираємо його значення за допомогою циклу for...of.
    for (let value of options.get("delete")) {
      //   log(`value ${value}`);
      urlObj.searchParams.delete(value); // Видаляємо кожний ключ з об'єкта `searchParams` в URL.
      //   log(urlObj);
    }
  }
  return urlObj.toString(); // Повертаємо новий URL як рядок.
}
console.log("Завдання: 12 ==============================");

// Приклад використання функції manipulateQuery
let options = new Map([
  [
    "append",
    new Map([
      ["param3", "value3"],
      ["param4", "value4"],
    ]),
  ],
  ["delete", ["param1", "param2"]],
]);

console.log(
  manipulateQuery(
    "https://example.com/path?param1=value1&param2=value2",
    options
  )
);
// Виведе: 'https://example.com/path?param3=value3&param4=value4'

//   Завдання 13
/*
 * Функція `getUrlData` приймає URL у вигляді рядка і повертає інформацію про URL.
 * @url (рядок) - URL-адреса для аналізу.
 *
 * Функція повертає об'єкт, що містить наступні ключі:
 * - 'origin': походження URL.
 * - 'hostname': ім'я хоста URL.
 * - 'port': порт URL.
 * - 'username': ім'я користувача в URL.
 * - 'password': пароль в URL.
 */
function getUrlData(url) {
  let urlObj = new URL(url); // Створюємо новий об'єкт URL з вхідної URL-адреси.
  // Повертаємо об'єкт з відповідними даними.
  return {
    origin: urlObj.origin,
    hostname: urlObj.hostname,
    port: urlObj.port,
    username: urlObj.username,
    password: urlObj.password,
  };
}
// Приклад використання функції getUrlData
console.log("Завдання: 13 ==============================");
console.log(getUrlData("https://username:password@example.com:8080/path"));
// Виведе:
// {
//   origin: 'https://example.com:8080',
//   hostname: 'example.com',
//   port: '8080',
//   username: 'username',
//   password: 'password'
// }

// Завдання 14
/*
 * Функція `sortUrlParams` приймає URL і повертає новий URL з відсортованими пошуковими параметрами.
 * @url (рядок) - URL-адреса для аналізу.
 *
 * Функція повертає новий URL з відсортованими пошуковими параметрами за ключами у порядку зростання.
 */
function sortUrlParams(url) {
  let urlObj = new URL(url); // Створюємо новий об'єкт URL з вхідної URL-адреси.
  //   log(urlObj);

  let arr = [...urlObj.searchParams.entries()]; // Отримуємо масив з ключами і значеннями параметрів за допомогою методу 'entries'.
  //   log(arr);

  // urlObj.searchParams.sort(key); // - Это сортировка объекта URL, а не массива!!!
  arr.sort((a, b) => a[0] - b[0]); // Сортуємо масив за ключами у порядку зростання.

  urlObj.search = ""; // Очищуємо пошукові параметри URL.
  //   log(urlObj);

  for (let [key, value] of arr) {
    urlObj.searchParams.append(key, value); // Додаємо відсортовані параметри до URL.
  }
  return urlObj.href; // Повертаємо новий URL як рядок.
}
// Приклад використання функції sortUrlParams
console.log("Завдання: 14 ==============================");
console.log(
  sortUrlParams("https://example.com/path?param2=value2&param1=value1")
);
// Виведе: 'https://example.com/path?param1=value1&param2=value2'

// Завдання 15
/*
 * Функція `getURLValues` приймає URL і повертає масив значень пошукових параметрів.
 * url - URL-адреса для аналізу.
 * Повертаємо - Масив значень пошукових параметрів.
 */
function getURLValues(url) {
  let urlObj = new URL(url); // Створюємо новий об'єкт URL з вхідною URL-адресою.
  //   log(urlObj);

  let URLSearchParams = urlObj.searchParams; // Отримуємо об'єкт `URLSearchParams` з пошуковими параметрами.
  //   log(URLSearchParams);

  // Не додумался поставить прописать keys()
  let arr = Array.from(URLSearchParams.keys()); // Отримуємо масив ключів пошукових параметрів.
  //   log(arr);
  //   log(Array.isArray(arr));

  let searchArr = []; // Масив для збереження значень пошукових параметрів.

  // Перебираємо ключі пошукових параметрів.
  for (let key of arr) {
    let value = URLSearchParams.getAll(key); // Отримуємо всі значення для даного ключа за допомогою методу `getAll`.
    // log(value);

    // Не додумался поставить троеточие
    searchArr.push(...value); // Додаємо значення до масиву.
  }
  //   arr.forEach((key) => {
  //     let value = URLSearchParams.getAll(key); // Отримуємо всі значення для даного ключа за допомогою методу `getAll`.
  //     log(value);
  //   });

  return searchArr; // Повертаємо масив значень пошукових параметрів.
}

// Приклад використання функції getURLValues
console.log("Завдання: 15 ==============================");
console.log(
  getURLValues(
    "https://example.com/path?param1=value1&param2=value2&param3=value3"
  )
);

// Завдання 16
/*
 * Функція `getUrlKeys` приймає URL і повертає масив з ключами пошукових параметрів.
 * @url (рядок) - URL-адреса для аналізу.
 *
 * Функція повертає масив, що містить усі ключі пошукових параметрів.
 */
function getUrlKeys(url) {
  let urlObj = new URL(url); // Створюємо новий об'єкт URL з вхідної URL-адреси.
  //   log(urlObj);

  let arr = [...urlObj.searchParams.keys()]; // Отримуємо масив зі всіма ключами пошукових параметрів за допомогою методу 'keys'.

  return arr; // Повертаємо масив з ключами.
}
// Приклад використання функції getUrlKeys
console.log("Завдання: 16 ==============================");
console.log(getUrlKeys("https://example.com/path?param1=value1&param2=value2"));
// Виведе: [ 'param1', 'param2' ]
