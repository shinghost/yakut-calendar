import EventCard from './EventCard'

function Calendar({ month }) {
  const days = Array.from({ length: month.daysInMonth }, (_, index) => index + 1)

  return (
    <section className="calendar">
      {days.map((day) => {
        const event = month.events.find((item) => item.day === day)

        return (
          <div key={day} className={`calendar-day ${event ? 'has-event' : ''}`}>
            <div className="calendar-day__number">{day}</div>
            {event && <EventCard event={event} />}
          </div>
        )
      })}
    </section>
  )
}

export default Calendar