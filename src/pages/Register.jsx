import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { registerUser } from '../features/authSlice'
import { useNavigate, Link } from 'react-router-dom'

export default function Register() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const { status, error } = useSelector(s => s.auth)
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const submit = async (e) => {
    e.preventDefault()
    try {
      await dispatch(registerUser({ name, email, password })).unwrap()
      navigate('/')
    } catch {}
  }

  return (
    <div className="max-w-md mx-auto card p-6">
      <h2 className="text-2xl font-bold mb-4">Register</h2>
      <form className="space-y-3" onSubmit={submit}>
        <input className="input w-full" placeholder="Name" value={name} onChange={e=>setName(e.target.value)} />
        <input className="input w-full" placeholder="Email" value={email} onChange={e=>setEmail(e.target.value)} />
        <input className="input w-full" type="password" placeholder="Password" value={password} onChange={e=>setPassword(e.target.value)} />
        {error && <div className="text-red-600 text-sm">{error}</div>}
        <button className="btn-primary w-full" type="submit" disabled={status==='loading'}>{status==='loading' ? 'Loading…':'Create Account'}</button>
      </form>
      <div className="text-sm mt-3">Have an account? <Link to="/login" className="text-purple-600">Login</Link></div>
    </div>
  )
}
