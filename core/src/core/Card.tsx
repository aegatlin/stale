export function Card({ children }) {
  return (
    <div className="m-4 overflow-hidden rounded-2xl border shadow-sm hover:border-gray-300">
      {children}
    </div>
  )
}
