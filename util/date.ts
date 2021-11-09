const monthNames = [
  'jan.',
  'feb.',
  'march',
  'april',
  'may',
  'june',
  'july',
  'aug.',
  'sep.',
  'oct.',
  'nov.',
  'dec.',
]

export const dateToPrettyString = (date: Date) =>
  `${monthNames[date.getMonth()]} ${date.getDate()}${
    date.getFullYear() === new Date().getFullYear()
      ? ''
      : ", '" + date.getFullYear().toString().slice(2)
  }`
