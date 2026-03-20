import EventCard from './EventCard.jsx'

function Calendar({ month }) {
  const days = Array.from({ length: month.daysInMonth }, (_, index) => index + 1)

  return (
    <section className="calendar">
      {days.map((day) => {
        const event = month.events.find((item) => item.day === day)

        return (
          <div
            key={day}
            className={`calendar-day ${event ? 'calendar-day--event' : ''}`}
          >
            <span className="calendar-day__number">{day}</span>

            {event && (
              <>
                <span className="calendar-day__dot"></span>
                <span className="calendar-day__label">{event.title}</span>
                <EventCard event={event} />
              </>
            )}
          </div>
        )
      })}
    </section>
  )
}

export default Calendar