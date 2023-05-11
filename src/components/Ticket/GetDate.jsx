export function GetDate(date) {
  const daysWeekArray = ['Вс', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб'];
  const monthsArray = [
    'янв',
    'фев',
    'мар',
    'апр',
    'май',
    'июн',
    'июл',
    'авг',
    'сен',
    'окт',
    'ноя',
    'дек',
  ];

  const dateArray = date.split('.').map((date) => +date);

  const day = dateArray[0];
  const month = dateArray[1] - 1;
  const year = `20${dateArray[2]}`;
  const dayName = new Date(year, month, day).getDay();

  return `${day} ${monthsArray[month]} ${year}, ${daysWeekArray[dayName]}`;
}
