import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { addToCart } from '../features/cartSlice'
import Rating from '../components/Rating'

export default function ProductDetails() {
  const { id } = useParams()
  const dispatch = useDispatch()
  const [product, setProduct] = useState(null)
  const [qty, setQty] = useState(1)
  const [rating, setRating] = useState(5)
  const [comment, setComment] = useState('')

  const fetchProduct = async () => {
    const res = await fetch(`${import.meta.env.VITE_API_URL || 'http://localhost:5000'}/api/products/${id}`)
    const data = await res.json()
    setProduct(data)
  }

  useEffect(() => { fetchProduct() }, [id])

  const submitReview = async (e) => {
    e.preventDefault()
    const res = await fetch(`${import.meta.env.VITE_API_URL || 'http://localhost:5000'}/api/products/${id}/reviews`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      credentials: 'include',
      body: JSON.stringify({ rating, comment })
    })
    if (res.ok) {
      setComment('')
      fetchProduct()
      alert('Review submitted!')
    } else {
      const j = await res.json()
      alert(j.message || 'Failed to add review')
    }
  }

  if (!product) return <div>Loading...</div>

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div className="card overflow-hidden">
        <img src={product.image} alt={product.name} className="w-full h-full object-cover"/>
      </div>
      <div>
        <h2 className="text-2xl font-bold">{product.name}</h2>
        <div className="text-gray-500">{product.category}</div>
        <div className="mt-2 flex items-center gap-2">
          <Rating value={product.rating} />
          <span className="text-sm text-gray-500">({product.numReviews} reviews)</span>
        </div>
        <p className="mt-4 text-gray-700">{product.description}</p>
        <div className="mt-4 font-extrabold text-2xl">${product.price.toFixed(2)}</div>
        <div className="mt-4 flex items-center gap-2">
          <select value={qty} onChange={(e)=>setQty(+e.target.value)} className="input w-24">
            {[...Array(Math.min(10, product.countInStock)).keys()].map(x => <option key={x+1} value={x+1}>{x+1}</option>)}
          </select>
          <button
            className="btn-primary"
            onClick={() => dispatch(addToCart({ productId: product._id, qty }))}
          >Add to Cart</button>
        </div>

        <div className="mt-8">
          <h3 className="font-bold mb-2">Write a review</h3>
          <form onSubmit={submitReview} className="space-y-2">
            <select className="input" value={rating} onChange={e=>setRating(+e.target.value)}>
              {[5,4,3,2,1].map(v => <option key={v} value={v}>{v}</option>)}
            </select>
            <textarea className="input" rows="3" placeholder="Your thoughts..." value={comment} onChange={e=>setComment(e.target.value)} />
            <button className="btn-secondary" type="submit">Submit Review</button>
          </form>
        </div>

        <div className="mt-6 space-y-4">
          {product.reviews?.slice().reverse().map(r => (
            <div key={r._id} className="card p-3">
              <div className="font-semibold">{r.name} <span className="text-xs text-gray-500">— {new Date(r.createdAt).toLocaleDateString()}</span></div>
              <Rating value={r.rating} />
              <p className="text-gray-700">{r.comment}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
