import EventCard from './EventCard.jsx'
import { holidaysByMonth } from '../data/holidays.js'

function Calendar({ month }) {
  const days = Array.from({ length: month.daysInMonth }, (_, index) => index + 1)
  const monthHolidays = holidaysByMonth[month.monthNumber] || {}

  console.log('month', month.titleRu, 'monthNumber', month.monthNumber)
  console.log('monthHolidays', monthHolidays)

  return (
    <section className="calendar">
      {days.map((day) => {
        const dayEvents = monthHolidays[day] || []
        const firstEvent = dayEvents[0]
        const hasEvent = dayEvents.length > 0

        return (
          <div
            key={day}
            className={`calendar-day ${hasEvent ? 'calendar-day--event' : ''}`}
          >
            <span className="calendar-day__number">{day}</span>

            {hasEvent && (
              <>
                <span className="calendar-day__dot"></span>
                <span className="calendar-day__label">{firstEvent.title}</span>
                <EventCard event={firstEvent} allEvents={dayEvents} />
              </>
            )}
          </div>
        )
      })}
    </section>
  )
}

export default Calendar