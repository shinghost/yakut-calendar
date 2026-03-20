import Carousel3D from '../components/Carousel3D.jsx'

function Home() {
  return (
    <main className="home-page home-page--gallery">
      <header className="gallery-header">
        <p className="gallery-header__eyebrow">Якутский календарь</p>
      </header>

      <Carousel3D />
    </main>
  )
}

export default Home