function EventCard({ event, allEvents = [] }) {
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
          <p className="event-card__meta">{event.category}</p>
          <h3>{event.title}</h3>
          <p>{event.description}</p>
  
          {event.fact && <p className="event-card__fact">Факт: {event.fact}</p>}
  
          {allEvents.length > 1 && (
            <div className="event-card__extra">
              <strong>Ещё в этот день:</strong>
              <ul>
                {allEvents.slice(1).map((item) => (
                  <li key={item.id}>{item.title}</li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </article>
    )
  }
  
  export default EventCard