import Type from '../Type';
import Badge from '../Badge';

function Card({ item }) {
  return (
    <div className="flex items-center p-4 bg-white rounded-lg shadow-xs relative overflow-visible">
      <Badge text={`${item.id}`} />
      <img className="mr-4 rounded-full" src={item.roundImg} alt={`${item.name} icon`}/>
      <div className="flex flex-col">
        <h3 className="text-lg font-semibold text-gray-700">{item.name}</h3>
        <div className="text-sm font-medium text-gray-600">{item.species}</div>
        <div className="flex flex-row items-center">
          {
            item.types.map(type => (<Type key={`${item.name}-${type}`} type={type} />))
          }
        </div>
      </div>
    </div>
  )
}

export default Card;
