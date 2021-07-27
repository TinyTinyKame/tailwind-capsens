import Card from '../Card'

function CardsList({ list = [], title = 'Title' }) {
  return (
    <div className="container px-6 mx-auto">
      <h2 className="my-6 text-2xl font-semibold text-gray-700">
        {title}
      </h2>

      <div className="grid gap-6 mb-8 md:grid-cols-2 xl:grid-cols-4">
        {
          list.map(item => (<Card key={item.id} item={item} />))
        }
      </div>
    </div>
  )
}

export default CardsList;
