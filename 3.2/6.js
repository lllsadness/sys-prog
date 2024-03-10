function fibonacciSequence() {
    let prev = 0;
    let curr = 1;

    // Функция, которая выводит следующее число Фибоначчи в консоль и обновляет значения prev и curr
    function printNextFibonacci() {
        console.log(prev);
        const next = prev + curr;
        prev = curr;
        curr = next;
    }

    // Выводим первое число Фибоначчи
    console.log(prev);

    // Устанавливаем интервал для вывода следующих чисел Фибоначчи
    const intervalId = setInterval(printNextFibonacci, 1000);

    // Останавливаем интервал через 20 секунд (для примера)
    setTimeout(() => clearInterval(intervalId), 20000);
}

// Вызываем функцию
fibonacciSequence();
