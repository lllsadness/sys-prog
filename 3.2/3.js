const arr = [3, 5, 8, 13, 21, 42];

const sumOfSquareRoots = arr.reduce((sum, num) => {
  if (num % 2 === 0) { // Проверка на четность
    return sum + Math.sqrt(num); // Добавляем квадратный корень четного числа к сумме
  } else {
    return sum; // Пропускаем нечетные числа
  }
}, 0);

console.log(sumOfSquareRoots); // Выведет сумму квадратных корней четных чисел
