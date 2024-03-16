export default function RadioElement({
  id,
  name,
  value,
  label,
  checked,
  onChange,
}) {
  return (
    <div className="flex gap-1 relative">
      <input
        checked={checked}
        onChange={onChange}
        id={id}
        type="radio"
        name={name}
        value={value}
      />
      <label htmlFor={id}>{label}</label>
    </div>
  );
}
