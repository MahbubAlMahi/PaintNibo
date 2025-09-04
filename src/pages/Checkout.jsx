import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { clearCartLocal, getCart } from '../features/cartSlice'

export default function Checkout() {
  const [number, setNumber] = useState('')
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()
  const dispatch = useDispatch()

  useEffect(()=>{ dispatch(getCart()) }, [dispatch])

  const pay = async () => {
    setLoading(true)
    try {
      const res = await fetch(`${import.meta.env.VITE_API_URL || 'http://localhost:5000'}/api/checkout`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        credentials: 'include',
        body: JSON.stringify({ paymentNumber: number })
      })
      const j = await res.json()
      if (!res.ok) throw new Error(j.message || 'Payment failed')
      dispatch(clearCartLocal())
      alert(`Payment successful! Order ${j.orderId}`)
      navigate('/orders')
    } catch (e) {
      alert(e.message)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="max-w-md mx-auto card p-6">
      <h2 className="text-2xl font-bold mb-4">Checkout</h2>
      <label className="block text-sm mb-1">Enter payment number (8-16 digits)</label>
      <input className="input w-full" value={number} onChange={e=>setNumber(e.target.value.replace(/\D/g,''))} placeholder="e.g., 017XXXXXXXX" />
      <button className="btn-primary mt-4 w-full" onClick={pay} disabled={loading}>{loading? 'Processing…':'Pay Now'}</button>
      <p className="text-xs text-gray-500 mt-2">* For demo only. No real charges.</p>
    </div>
  )
}
