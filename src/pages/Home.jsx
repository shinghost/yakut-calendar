import MonthCard from '../components/MonthCard'
import { months } from '../data/months'

function Home() {
  return (
    <main className="home-page">
      <header className="hero">
        <h1>Якутский календарь</h1>
        <p>Выберите месяц</p>
      </header>

      <section className="months-grid">
        {months.map((month) => (
          <MonthCard key={month.id} month={month} />
        ))}
      </section>
    </main>
  )
}

export default Home