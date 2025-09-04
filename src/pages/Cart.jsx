import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getCart, updateCartItem, removeFromCart } from '../features/cartSlice'
import { Link, useNavigate } from 'react-router-dom'

export default function Cart() {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { items } = useSelector(s => s.cart)

  useEffect(() => { dispatch(getCart()) }, [dispatch])

  const total = items.reduce((t, i) => t + i.product.price * i.qty, 0)

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Your Cart</h2>
      {items.length === 0 ? (
        <div className="card p-4">Cart is empty. <Link to="/" className="text-purple-600">Go shopping</Link></div>
      ) : (
        <div className="grid md:grid-cols-3 gap-4">
          <div className="md:col-span-2 space-y-3">
            {items.map(i => (
              <div key={i.product._id} className="card p-3 flex items-center gap-4">
                <img src={i.product.image} alt={i.product.name} className="w-24 h-20 object-cover rounded-xl" />
                <div className="flex-1">
                  <div className="font-semibold">{i.product.name}</div>
                  <div className="text-sm text-gray-500">${i.product.price.toFixed(2)}</div>
                </div>
                <select className="input w-20" value={i.qty} onChange={(e)=>dispatch(updateCartItem({ productId: i.product._id, qty: +e.target.value }))}>
                  {[...Array(10).keys()].map(x => <option key={x+1} value={x+1}>{x+1}</option>)}
                </select>
                <button className="btn-secondary" onClick={()=>dispatch(removeFromCart(i.product._id))}>Remove</button>
              </div>
            ))}
          </div>
          <div className="card p-4 h-fit">
            <div className="flex justify-between"><span>Items</span><span>{items.length}</span></div>
            <div className="flex justify-between font-bold text-lg mt-2"><span>Total</span><span>${total.toFixed(2)}</span></div>
            <button className="btn-primary mt-4 w-full" onClick={()=>navigate('/checkout')}>Proceed to Checkout</button>
          </div>
        </div>
      )}
    </div>
  )
}
