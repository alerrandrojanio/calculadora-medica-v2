import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

import { Cholesterol } from "../pages/Cholesterol"

export function Rotas() {
  return (
    <Router>
      <Routes>
        <Route path="/calculadora-medica/" element={<Cholesterol />} />
      </Routes>
    </Router>
  )
}
