import { Link } from 'react-router-dom'

export default function ProductCard({ p }) {
  return (
    <Link to={`/product/${p._id}`} className="card overflow-hidden group">
      <div className="aspect-[4/3] overflow-hidden">
        <img src={p.image} alt={p.name} className="w-full h-full object-cover transition-transform group-hover:scale-105" />
      </div>
      <div className="p-4">
        <div className="text-sm text-gray-500">{p.category}</div>
        <h3 className="font-semibold text-lg">{p.name}</h3>
        <div className="flex items-center justify-between mt-2">
          <span className="font-bold">${p.price.toFixed(2)}</span>
          <span className="text-xs text-yellow-600">★ {p.rating?.toFixed(1) || '0.0'}</span>
        </div>
      </div>
    </Link>
  )
}
