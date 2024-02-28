
export function getUTC() {
        let currentUtcDate = new Date();

        // Извлекаем только дату с точностью до дня
        let year = currentUtcDate.getUTCFullYear(); // Получаем год
        let month = currentUtcDate.getUTCMonth() + 1; // Получаем номер месяца (нумерация с 0, поэтому добавляем 1)
        let day = currentUtcDate.getUTCDate(); // Получаем день

        // Форматируем день и месяц, если они состоят из одной цифры, добавляем в начале 0
        let formattedMonth = month < 10 ? "0" + month : month;
        let formattedDay = day < 10 ? "0" + day : day;

        // Полученная дата в формате год-месяц-день
        let formattedUtcDate = year +""+ formattedMonth  +""+ formattedDay;
        return formattedUtcDate
}