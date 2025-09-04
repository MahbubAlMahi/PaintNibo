import { useEffect, useState } from 'react'

export default function Orders() {
  const [orders, setOrders] = useState([])

  useEffect(() => {
    (async () => {
      const res = await fetch(`${import.meta.env.VITE_API_URL || 'http://localhost:5000'}/api/checkout/orders`, { credentials: 'include' })
      const data = await res.json()
      setOrders(data)
    })()
  }, [])

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Your Orders</h2>
      {orders.length === 0 ? (
        <div className="card p-4">No orders yet.</div>
      ) : (
        <div className="space-y-3">
          {orders.map(o => (
            <div key={o._id} className="card p-4">
              <div className="flex justify-between"><div className="font-semibold">Order #{o._id.slice(-6)}</div><div className="text-sm text-gray-500">{new Date(o.createdAt).toLocaleString()}</div></div>
              <div className="text-sm">Status: <span className="font-semibold">{o.status}</span></div>
              <div className="mt-2 space-y-1">
                {o.items.map((it, idx) => (
                  <div key={idx} className="flex justify-between text-sm">
                    <span>{it.name} × {it.qty}</span>
                    <span>${(it.price * it.qty).toFixed(2)}</span>
                  </div>
                ))}
              </div>
              <div className="flex justify-between mt-2 font-bold"><span>Total</span><span>${o.total.toFixed(2)}</span></div>
              <div className="text-xs text-gray-500">Paid with: {o.paymentNumberMasked}</div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
