import { Link, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { logoutUser, fetchMe } from '../features/authSlice'
import { useEffect, useState } from 'react'

export default function Header() {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const { user } = useSelector(s => s.auth)
  const [term, setTerm] = useState(sessionStorage.getItem('search') || '')
  const [typing, setTyping] = useState(false)

  useEffect(() => { dispatch(fetchMe()).catch(()=>{}) }, [dispatch])

  useEffect(() => {
    const id = setTimeout(() => {
      sessionStorage.setItem('search', term)
      const ev = new CustomEvent('search-change', { detail: term })
      window.dispatchEvent(ev)
      setTyping(false)
    }, 350)
    return () => clearTimeout(id)
  }, [term])

  return (
    <header className="sticky top-0 z-40 bg-white/70 backdrop-blur-xl border-b border-purple-100">
      <div className="container mx-auto px-4 py-3 flex items-center gap-3">
        <Link to="/" className="text-2xl font-extrabold bg-gradient-to-r from-sky-500 via-pink-500 to-purple-500 bg-clip-text text-transparent">PaintNibo</Link>
        <div className="flex-1">
          <input
            className="input w-full"
            placeholder="Search in real-time..."
            value={term}
            onChange={(e)=>{ setTerm(e.target.value); setTyping(true) }}
          />
          {typing && <div className="text-xs text-gray-500">searching…</div>}
        </div>
        <nav className="flex items-center gap-3">
          <Link to="/" className="btn-secondary">Home</Link>
          <Link to="/cart" className="btn-secondary">Cart</Link>
          {user ? (
            <>
              <Link to="/orders" className="btn-secondary">Orders</Link>
              <button onClick={()=>dispatch(logoutUser()).then(()=>navigate('/'))} className="btn-primary">Logout</button>
            </>
          ) : (
            <>
              <Link to="/login" className="btn-secondary">Login</Link>
              <Link to="/register" className="btn-primary">Register</Link>
            </>
          )}
        </nav>
      </div>
    </header>
  )
}
