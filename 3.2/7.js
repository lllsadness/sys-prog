function intersect(arrA, arrB) {
    // Создаем объект для хранения значений массива arrA
    const map = {};
    // Создаем массив для хранения пересечения значений
    const intersection = [];

    // Заполняем объект map значениями из массива arrA
    for (const value of arrA) {
        map[value] = true;
    }

    // Проверяем значения из массива arrB на наличие в объекте map
    for (const value of arrB) {
        // Если значение присутствует в map, добавляем его в массив intersection
        if (map[value]) {
            intersection.push(value);
            // Удаляем значение из map, чтобы избежать повторного добавления в intersection
            delete map[value];
        }
    }

    return intersection;
}

// Пример использования функции
const arrA = [1, 2, 3, 4, 5];
const arrB = [3, 4, 5, 6, 7];
console.log(intersect(arrA, arrB)); // Выведет: [3, 4, 5]
