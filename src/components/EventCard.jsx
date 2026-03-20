function EventCard({ event }) {
    return (
      <div className="event-card">
        {event.image && <img src={event.image} alt={event.title} />}
        <h3>{event.title}</h3>
        <p>{event.description}</p>
      </div>
    )
  }
  
  export default EventCard