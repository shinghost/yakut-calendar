function EventCard({ event }) {
    return (
      <article className="event-card">
        <div className="event-card__image-wrap">
          <img
            src={event.image}
            alt={event.title}
            className="event-card__image"
          />
        </div>
  
        <div className="event-card__content">
          <p className="event-card__meta">Событие дня</p>
          <h3>{event.title}</h3>
          <p>{event.description}</p>
          {event.fact && <p className="event-card__fact">Факт: {event.fact}</p>}
        </div>
      </article>
    )
  }
  
  export default EventCard