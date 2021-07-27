import Card from '../Card'

function CardsList({ list = [], title = 'Title' }) {
  return (
    <div>
      <h2>
        {title}
      </h2>

      <div>
        {
          list.map(item => (<Card item={item} />))
        }
      </div>
    </div>
  )
}

export default CardsList;
