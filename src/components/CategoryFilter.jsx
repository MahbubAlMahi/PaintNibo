export default function CategoryFilter({ active, onChange }) {
  const cats = ['All', 'Home decor', 'Showpiece', 'Furniture', 'Paints']
  return (
    <div className="flex flex-wrap gap-2">
      {cats.map(c => (
        <button key={c}
          onClick={()=>onChange(c === 'All' ? '' : c)}
          className={`px-3 py-1 rounded-full border ${ (active===c || (active==='' && c==='All')) ? 'bg-purple-500 text-white border-purple-500' : 'bg-white/80 border-gray-200 hover:border-purple-300' }`}
        >
          {c}
        </button>
      ))}
    </div>
  )
}
