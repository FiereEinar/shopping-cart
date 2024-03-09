export default function ProductSection({ children }) {
  return (
    <div className='grid grid-cols-[repeat(auto-fill,minmax(10rem,1fr))] gap-3 gap-y-5
    p-2'>
      {children}
    </div>
  )
}