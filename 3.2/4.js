function isAnagram(str1, str2) {
    // Приводим обе строки к нижнему регистру и удаляем пробелы
    const cleanStr1 = str1.toLowerCase().replace(/\s/g, '');
    const cleanStr2 = str2.toLowerCase().replace(/\s/g, '');
  
    // Сортируем символы в строках
    const sortedStr1 = cleanStr1.split('').sort().join('');
    const sortedStr2 = cleanStr2.split('').sort().join('');
  
    // Сравниваем отсортированные строки
    return sortedStr1 === sortedStr2;
  }
  
  // Примеры использования
  console.log(isAnagram("Лунь", "нуль")); // true
  console.log(isAnagram("Лунь", "ноль")); // false
  