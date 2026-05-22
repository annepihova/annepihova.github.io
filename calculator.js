// Класс калькулятора
class Calculator {

    // Сложение
    add(a, b) {
        return a + b;
    }

    // Вычитание
    subtract(a, b) {
        return a - b;
    }

    // Умножение
    multiply(a, b) {
        return a * b;
    }

    // Деление
    divide(a, b) {

        // Проверка деления на ноль
        if (b === 0) {
            throw new Error('Cannot divide by zero');
        }

        return a / b;
    }

    // Возведение в степень
    power(a, b) {
        return a ** b;
    }

    // Квадратный корень
    sqrt(a) {
        return Math.sqrt(a);
    }

}

// Экспорт класса
module.exports = Calculator;