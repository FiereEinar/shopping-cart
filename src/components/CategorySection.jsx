export default function CategorySection({ children, heading }) {
  return (
    <div className="flex flex-col gap-3 p-2 py-5 border rounded-md bg-white animate-[subtleShow_0.2s_ease] shadow-md">
      <h1 className="text-2xl ml-1">{heading}</h1>
      {children}
    </div>
  );
}
