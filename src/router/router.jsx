import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from '../pages/Home.jsx'
import Month from '../pages/Month.jsx'

function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/month/:monthId" element={<Month />} />
      </Routes>
    </BrowserRouter>
  )
}

export default AppRouter