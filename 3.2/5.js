function isPalindrome(str) {
    // Приводим строку к нижнему регистру и удаляем пробелы и знаки пунктуации
    const cleanStr = str.toLowerCase().replace(/[\W_]/g, '');
  
    // Создаем обратную версию строки
    const reversedStr = cleanStr.split('').reverse().join('');
  
    // Сравниваем исходную и обратную строки
    return cleanStr === reversedStr;
  }
  
  // Примеры использования
  console.log(isPalindrome("Не гни папин ген")); // true
  console.log(isPalindrome("123")); // false
  