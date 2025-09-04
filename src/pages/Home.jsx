import { useEffect, useState } from 'react'
import ProductCard from '../components/ProductCard'
import CategoryFilter from '../components/CategoryFilter'

export default function Home() {
  const [products, setProducts] = useState([])
  const [category, setCategory] = useState('')
  const [term, setTerm] = useState(sessionStorage.getItem('search') || '')

  const fetchProducts = async (t = term, c = category) => {
    const params = new URLSearchParams()
    if (t) params.set('search', t)
    if (c) params.set('category', c)
    const res = await fetch(`${import.meta.env.VITE_API_URL || 'http://localhost:5000'}/api/products?${params.toString()}`)
    const data = await res.json()
    setProducts(data)
  }

  useEffect(() => { fetchProducts() }, [category])

  useEffect(() => {
    const listener = (e) => { setTerm(e.detail); fetchProducts(e.detail, category) }
    window.addEventListener('search-change', listener)
    return () => window.removeEventListener('search-change', listener)
  }, [category])

  return (
    <div>
      <div className="mb-6 text-center">
        <h1 className="text-3xl md:text-4xl font-extrabold mb-2">Welcome To PaintNibo</h1>
        <p className="text-gray-600">Find stylish decor, showpieces, furniture & paints.</p>
      </div>
      <div className="mb-4 flex items-center justify-between gap-4">
        <CategoryFilter active={category || 'All'} onChange={setCategory} />
        <div className="text-sm text-gray-500">{products.length} items</div>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {products.map(p => <ProductCard key={p._id} p={p} />)}
      </div>
    </div>
  )
}
