import { Link, useParams } from 'react-router-dom'
import { months } from '../data/months.js'
import Calendar from '../components/Calendar.jsx'

function Month() {
  const { monthId } = useParams()
  const month = months.find((item) => item.id === monthId)

  if (!month) {
    return (
      <main className="month-page">
        <section className="month-not-found">
          <h1>Месяц не найден</h1>
          <Link to="/" className="month-back-link">← Вернуться к месяцам</Link>
        </section>
      </main>
    )
  }

  return (
    <main className="month-page">
      <Link to="/" className="month-back-link">← Все месяцы</Link>

      <section className="month-hero-card">
        <div className="month-hero-card__text">
          <p className="month-hero-card__eyebrow">
            {String(month.order).padStart(2, '0')} месяц
          </p>

          <h1 className="month-hero-card__yakut">{month.titleYakut}</h1>
          <h2 className="month-hero-card__ru">{month.titleRu}</h2>

          <p className="month-hero-card__description">{month.description}</p>

          <div className="month-hero-card__meta">
            <span>{month.daysInMonth} дней</span>
            <span>{month.events.length} событий</span>
          </div>
        </div>

        <div className="month-hero-card__image-wrap">
          <img
            src={month.image}
            alt={month.titleRu}
            className="month-hero-card__image"
          />
        </div>
      </section>

      <section className="month-calendar-section">
        <div className="month-calendar-section__header">
          <h3>Календарь месяца</h3>
          <p>Наведи курсор на выделенную дату, чтобы посмотреть событие</p>
        </div>

        <Calendar month={month} />
      </section>
    </main>
  )
}

export default Month