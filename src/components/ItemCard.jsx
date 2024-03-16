import { useNavigate } from 'react-router-dom';

export default function ItemCard({ id, imgURL, title, price, sold, rating }) {
  const navigate = useNavigate();

  return (
    <button
      className="w-full border rounded-md overflow-hidden flex flex-col
    hover:shadow hover:border-zinc-500 transition-all p-1"
      onClick={() => {
        navigate(`/item/${id}`);
      }}
    >
      <img className="w-full h-44 md:h-56 bg-contain" src={imgURL} />
      <div className="flex flex-col p-3 gap-1">
        <p className="text-start hover:text-blue-400 transition-all">{title}</p>
        <p className="text-start text-orange-400">${price}</p>
        <p className="text-start">
          <span className="text-gray-400">{sold} sold</span> |{' '}
          <span className="text-orange-400">{rating}</span> rating
        </p>
      </div>
    </button>
  );
}
