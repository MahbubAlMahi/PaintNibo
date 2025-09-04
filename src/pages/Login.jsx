import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { loginUser } from '../features/authSlice'
import { useLocation, useNavigate, Link } from 'react-router-dom'

export default function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const { status, error } = useSelector(s => s.auth)
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const loc = useLocation()

  const submit = async (e) => {
    e.preventDefault()
    try {
      await dispatch(loginUser({ email, password })).unwrap()
      navigate(loc.state?.from?.pathname || '/')
    } catch {}
  }

  return (
    <div className="max-w-md mx-auto card p-6">
      <h2 className="text-2xl font-bold mb-4">Login</h2>
      <form className="space-y-3" onSubmit={submit}>
        <input className="input w-full" placeholder="Email" value={email} onChange={e=>setEmail(e.target.value)} />
        <input className="input w-full" type="password" placeholder="Password" value={password} onChange={e=>setPassword(e.target.value)} />
        {error && <div className="text-red-600 text-sm">{error}</div>}
        <button className="btn-primary w-full" type="submit" disabled={status==='loading'}>{status==='loading' ? 'Loading…':'Login'}</button>
      </form>
      <div className="text-sm mt-3">No account? <Link to="/register" className="text-purple-600">Register</Link></div>
    </div>
  )
}
