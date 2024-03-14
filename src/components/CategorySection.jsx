export default function CategorySection({ children, heading }) {
  return (
    <div className="flex flex-col gap-3 p-2 py-5 border rounded-2xl bg-white">
      <h1 className="text-2xl ml-1">{heading}</h1>
      {children}
    </div>
  );
}
