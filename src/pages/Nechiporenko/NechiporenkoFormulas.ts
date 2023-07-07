/**
 * Для оценки воспалительного процесса. Считают клеточные эллементы на литр.
 * Количество клеток на 3.2 мл, а нужно считать на литр.
 * Формула переводит в литры.
 * @param x Количество лейкоциты или эритроциты. Вводятся по очереди.
 * @param coefficient сколько больших квадратов камеры используется. Если клеток мало надо счиать 1, если много - то считаем только часть камеры, а потом просто умножаем на коээфициент.
 */
export const NFormula = (x: number | null, coefficient: 1 | 2 | 4 | 16) =>
  x ? (x * coefficient * 0.031).toFixed(3) : ""

export const NFormulaNormal = (coefficient: 1 | 2 | 4 | 16) => coefficient

/**
 * Спиномозговая жидкость. Тоже пересчёт (общее колисчество, нитрофилы, макрофилы, лимфоциты)
 * @param x лейкоциты. Отдельно общее колисчество или нитрофилы или марофаги или лимфоциты.
 * @param coefficient ну тоже типа коэфициент
 */
export const AFormula = (x: number | null, coefficient: 1 | 2 | 4 | 16) =>
  x ? ((x * coefficient) / 3).toFixed(3) : ""



// Валидация не актуальна.
