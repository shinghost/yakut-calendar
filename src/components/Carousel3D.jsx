import { useEffect, useMemo, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { months } from '../data/months.js'

function Carousel3D() {
  const navigate = useNavigate()
  const stageRef = useRef(null)
  const lastMoveRef = useRef(0)

  const [activeIndex, setActiveIndex] = useState(0)
  const [hoveredId, setHoveredId] = useState(null)
  const [isPaused, setIsPaused] = useState(false)
  const [mouseTilt, setMouseTilt] = useState(0)

  const total = months.length

  useEffect(() => {
    if (isPaused || hoveredId) return

    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % total)
    }, 2600)

    return () => clearInterval(interval)
  }, [isPaused, hoveredId, total])

  const arrangedMonths = useMemo(() => {
    return months.map((month, index) => {
      let offset = index - activeIndex

      if (offset > total / 2) offset -= total
      if (offset < -total / 2) offset += total

      return { ...month, offset }
    })
  }, [activeIndex, total])

  const handleMouseMove = (event) => {
    if (hoveredId) return

    const now = Date.now()
    const rect = stageRef.current?.getBoundingClientRect()
    if (!rect) return

    const x = event.clientX - rect.left
    const centerX = rect.width / 2
    const normalized = (x - centerX) / centerX

    setMouseTilt(normalized)

    if (now - lastMoveRef.current < 260) return

    if (normalized > 0.55) {
      setActiveIndex((prev) => (prev + 1) % total)
      lastMoveRef.current = now
    } else if (normalized < -0.55) {
      setActiveIndex((prev) => (prev - 1 + total) % total)
      lastMoveRef.current = now
    }
  }

  const handleMouseLeaveStage = () => {
    setMouseTilt(0)
    setHoveredId(null)
    setIsPaused(false)
  }

  return (
    <section className="carousel3d-shell">
      <div
        ref={stageRef}
        className="carousel3d-stage"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={handleMouseLeaveStage}
        onMouseMove={handleMouseMove}
      >
        <img
          src="/images/ui/choron.png"
          alt="Якутский чорон"
          className="carousel3d-choron"
        />

        <div
          className="carousel3d-track"
          style={{ '--mouse-tilt': mouseTilt }}
        >
          {arrangedMonths.map((month) => {
            const isActive = month.offset === 0
            const isHovered = hoveredId === month.id

            return (
              <article
                key={month.id}
                className={`carousel3d-card ${isActive ? 'is-active' : ''} ${isHovered ? 'is-hovered' : ''}`}
                style={{
                  '--offset': month.offset,
                  '--abs': Math.abs(month.offset),
                }}
                onMouseEnter={() => {
                  setHoveredId(month.id)
                  setMouseTilt(0)
                }}
                onMouseLeave={() => setHoveredId(null)}
                onClick={() => navigate(`/month/${month.id}`)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    navigate(`/month/${month.id}`)
                  }
                }}
              >
                <img
                  src={month.image}
                  alt={month.titleRu}
                  className="carousel3d-card__image"
                />

                <div className="carousel3d-card__overlay">
                  <h2>{month.titleYakut}</h2>
                  <p>{month.titleRu}</p>
                </div>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Carousel3D