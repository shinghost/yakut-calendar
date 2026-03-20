import { Link } from 'react-router-dom'

function MonthCard({ month }) {
  return (
    <Link to={`/month/${month.id}`} className="month-card month-card--orbit">
      <div className="month-card__image-wrap">
        <img src={month.image} alt={month.title} className="month-card__image" />
      </div>

      <div className="month-card__content">
        <span className="month-card__index">
          {String(month.order || 0).padStart(2, '0')}
        </span>
        <h2>{month.title}</h2>
        <p>{month.description}</p>
      </div>
    </Link>
  )
}

export default MonthCard