export default function RadioElement({ id, name, value, label }) {
  return (
    <div className='flex gap-1 relative'>
      <input 
        className=''
        id={id} 
        type="radio" 
        name={name} 
        value={value} 
      />
      <label 
        htmlFor={id}
      >
        {label}
      </label>
    </div>
  )
}