import { Routes, Route, Link } from 'react-router-dom'
import Register from './pages/Register'
import Login from './pages/Login'
import Catalogue from './pages/Catalogue'
import Cart from './pages/Cart'
import Contact from './pages/Contact'
import About from './pages/About'

function App() {
  return (
    <div>
      <nav>
        <Link to="/register">Register</Link> |{" "}
        <Link to="/login">Login</Link> |{" "}
        <Link to="/catalogue">Catalogue</Link> |{" "}
        <Link to="/cart">Cart</Link> |{" "}
        <Link to="/contact">Contact</Link> |{" "}
        <Link to="/about">About</Link>
      </nav>

      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/catalogue" element={<Catalogue />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  )
}

export default App
