function Card({ item }) {
  return (
    <div>
      <div>Nº{item.id}</div>
      <img src={item.roundImg} alt={`${item.name} icon`}/>
      <div>
        <h3>{item.name}</h3>
        <div>{item.type}</div>
        <div>{item.species}</div>
      </div>
    </div>
  )
}

export default Card;
