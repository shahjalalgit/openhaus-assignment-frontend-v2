import { BrowserRouter, Route, Routes } from 'react-router-dom'

function CustomRouterProvider() {
  return (
    <BrowserRouter future={{ v7_startTransition: true }}>
          <Routes>
            <Route path="/" element={<div>Hello</div>} /> 👈 Renders at /app/
          </Routes>
    </BrowserRouter>
  )
}

export default CustomRouterProvider