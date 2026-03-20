import { Link } from 'react-router-dom'

function MonthCard({ month }) {
  return (
    <Link to={`/month/${month.id}`} className="month-card">
      <img src={month.image} alt={month.title} />
      <div className="month-card__content">
        <h2>{month.title}</h2>
        <p>{month.description}</p>
      </div>
    </Link>
  )
}

export default MonthCard