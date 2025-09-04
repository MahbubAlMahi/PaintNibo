export default function Rating({ value=0 }) {
  const filled = Math.round(value)
  return (
    <div className="text-yellow-600">
      {'★'.repeat(filled)}<span className="text-gray-300">{'★'.repeat(5-filled)}</span>
    </div>
  )
}
