function Type({ type }) {
  const classType = `bg-${type.toLowerCase()}`;

  return (
    <div className={`py-1 px-2 mr-2 mt-2 border border-gray-400 rounded-md text-white ${classType}`}>{type}</div>
  )
}

export default Type;
