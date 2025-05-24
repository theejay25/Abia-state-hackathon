import { BrowserRouter, Routes, Route } from "react-router-dom"
import Auth from "./pages/Auth"
import Index from "./pages/Index"

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path={'/'} element={<Auth />} />
          <Route path={'/home'} element={<Index />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
