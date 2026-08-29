function filterArray(numbers, value) {
  // 1. Створюємо порожній масив, куди будемо складати підходящі числа
  const filteredNumbers = [];

  // 2. Використовуємо цикл для перебору всіх елементів масиву
  for (let i = 0; i < numbers.length; i += 1) {
    // 3. Перевіряємо умовою if, чи є поточне число більшим за value
    if (numbers[i] > value) {
      // Якщо так, додаємо його в наш новий масив
      filteredNumbers.push(numbers[i]);
    }
  }

  // 4. Повертаємо готовий масив
  return filteredNumbers;
}

// Перевірка коректності роботи
console.log(filterArray([1, 2, 3, 4, 5], 3)); // [4, 5]
console.log(filterArray([1, 2, 3, 4, 5], 4)); // [5]
console.log(filterArray([1, 2, 3, 4, 5], 5)); // []
console.log(filterArray([12, 24, 8, 41, 76], 38)); // [41, 76]
console.log(filterArray([12, 24, 8, 41, 76], 20)); // [24, 41, 76]