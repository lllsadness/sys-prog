function counter(n) {
    let current = n;
    const intervalId = setInterval(() => {
        console.log(current);
        current--;
        if (current < 0) {
            clearInterval(intervalId);
        }
    }, 1000);
}

function createCounter(n) {
    let current = n;
    let intervalId;

    return {
        start() {
            intervalId = setInterval(() => {
                console.log(current);
                current--;
                if (current < 0) {
                    clearInterval(intervalId);
                }
            }, 1000);
        },
        pause() {
            clearInterval(intervalId);
        },
        stop() {
            clearInterval(intervalId);
            current = n;
        }
    };
}

// Пример использования функции counter
counter(5);

// Пример использования функции createCounter
const myCounter = createCounter(5);
myCounter.start(); // начинаем счёт
// через какое-то время останавливаем счёт
setTimeout(() => {
    myCounter.pause(); // приостанавливаем счёт
}, 3000);
// через ещё какое-то время снова возобновляем счёт
setTimeout(() => {
    myCounter.start(); // возобновляем счёт
}, 6000);
// ещё через некоторое время останавливаем и сбрасываем счёт
setTimeout(() => {
    myCounter.stop(); // останавливаем и сбрасываем счёт
}, 9000);
