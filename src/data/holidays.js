import rawHolidays from './Data.json'

const MONTHS = {
  января: 1,
  февраля: 2,
  марта: 3,
  апреля: 4,
  мая: 5,
  июня: 6,
  июля: 7,
  августа: 8,
  сентября: 9,
  октября: 10,
  ноября: 11,
  декабря: 12,
}

function parseFixedDate(dateString) {
  const match = dateString.match(/^(\d{1,2})\s+([а-яё]+)$/i)
  if (!match) return null

  const day = Number(match[1])
  const month = MONTHS[match[2].toLowerCase()]
  if (!month) return null

  return { month, day }
}

function getFirstSaturdayOfMarch(year = new Date().getFullYear()) {
  const date = new Date(year, 2, 1)
  while (date.getDay() !== 6) {
    date.setDate(date.getDate() + 1)
  }
  return { month: 3, day: date.getDate() }
}

function getLastSaturdayOfJune(year = new Date().getFullYear()) {
  const date = new Date(year, 5, 30)
  while (date.getDay() !== 6) {
    date.setDate(date.getDate() - 1)
  }
  return { month: 6, day: date.getDate() }
}

function resolveHolidayDate(item, year = new Date().getFullYear()) {
  const fixed = parseFixedDate(item.date)
  if (fixed) return fixed

  const normalized = item.date.toLowerCase().trim()

  if (normalized === 'первая суббота марта') {
    return getFirstSaturdayOfMarch(year)
  }

  if (normalized === 'последние выходные июня') {
    return getLastSaturdayOfJune(year)
  }

  return null
}

export const holidaysByMonth = rawHolidays.reduce((acc, item) => {
  const resolved = resolveHolidayDate(item)
  if (!resolved) return acc

  const { month, day } = resolved

  if (!acc[month]) acc[month] = {}
  if (!acc[month][day]) acc[month][day] = []

  acc[month][day].push({
    id: item.id,
    title: item.name,
    description: item.description,
    fact: item.fact,
    category: item.category,
    originalDate: item.date,
    image: '/images/ui/jaw.png',
  })

  return acc
}, {})

console.log('holidaysByMonth', holidaysByMonth)