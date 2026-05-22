// Функция вычисления
function calculate(operation) {

    // Получаем значения из input
    const num1 = Number(document.getElementById('num1').value);

    const num2 = Number(document.getElementById('num2').value);

    // Объект с операциями
    const operations = {

        add: () => num1 + num2,

        subtract: () => num1 - num2,

        multiply: () => num1 * num2,

        divide: () => {
            if (num2 === 0) {
                return 'Error';
            }

            return num1 / num2;
        },

        power: () => num1 ** num2,

        sqrt: () => Math.sqrt(num1)
    };

    // Выполняем нужную операцию
    const result = operations[operation]();

    // Показываем результат
    document.getElementById('result').innerText =
        'Result: ' + result;
}