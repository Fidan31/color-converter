function hexToRGB(hex) {
    hex = hex.replace('#', '');
    // удаляет символ #, если он присуствует в начале HEX кода
    if (!isValidHexCode(hex)) return null;
  
// проверяет является ли HEX-code валидным с помощью функции isValidHexCode
// если не валиден то возвращает null
    // Извлекаем компоненты
    const components = getRGBComponents(hex);
  //  разбиваем HEX код на составляющие красный зеленый и синий компоненты

    // Преобразуем в десятичный формат
    return toRGBObject(components);
  }
  


// это функция проверяет соот-ет ли строка формату HEX кода
  function isValidHexCode(hex) {
    const stripped = hex.replace(/#/gi, '');
    // убирает символы #, если они есть
  
    // Проверка, что длина равна 6 и содержит только допустимые символы
    return /^[0-9A-Fa-f]{6}$/i.test(stripped);
  }
  


  const getRGBComponents = (hex) => {
    const red = hex.substring(0, 2);
    // извлекает первые 2 символа 
   
    const green = hex.substring(2, 4);
    // извлекает первые 2-е и 3-е символы
    const blue = hex.substring(4, 6);
    // извлекает последние 4-е и 5-е символы
    return { red, green, blue };
  };
  

  // преобразование строки hexValue (16) в число в десятичной системе
  const hexToDecimal = (hexValue) => {
    return parseInt(hexValue, 16);
  };
  // example
  // parseInt("FF",16); вернет 255
  
  const toRGBObject = (components) => ({
    red: hexToDecimal(components.red),
    green: hexToDecimal(components.green),
    blue: hexToDecimal(components.blue),
  });
  // функция принимает объект components с 16 значениями компонентов RGB


  // Функция конвертации HEX в RGB
  function convertHexToRGB() {
    const hexInput = document.getElementById('hex').value; // Получаем введённый hex
    const rgbResult = hexToRGB(hexInput); // Конвертируем
  
    if (rgbResult) {
      const rgbString = `rgb(${rgbResult.red}, ${rgbResult.green}, ${rgbResult.blue})`;
      document.getElementById('rgb').value = rgbString; // Выводим результат в поле RGB
    } else {
      alert('Please enter a valid hex color code.');
    }
  }
  