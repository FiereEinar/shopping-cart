import { useParams, useLoaderData } from 'react-router-dom'

export default function CategoryPage() {
  const { category } = useParams()
  const { shopItems } = useLoaderData()
  const itemsList = shopItems.filter((item) => item.category === category)

  return (
    <div>
      <h1>{category}</h1>
      {itemsList.map((item) => (
        <p key={item.id}>{item.title}</p>
      ))}
    </div>
  )
}