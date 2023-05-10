import Card from '../components/Card'

function Home(props) {
  const {
    search,
    searchItem,
    setSearch,
    state,
    remove,
    addToCart,
    addToFarvorite,
  } = props
  return (
    <div className="content p-40">
      <div className="d-flex align-center justify-between mb-40">
        <h1>{search ? `Поиск по: ${search}` : 'Все товары'}</h1>
        <div className="search-block d-flex">
          <img src="/img/search.svg" alt="Search" />
          <input placeholder="Поиск..." value={search} onChange={searchItem} />
          {search ? (
            <img
              className="cu-p cu-p-spec"
              src="/img/btn-remove.svg"
              alt="Close"
              onClick={() => setSearch('')}
            />
          ) : null}
        </div>
      </div>
      <div className="d-flex flex-wrap">
        {state
          .filter((item) =>
            item.name.toLowerCase().includes(search.toLowerCase())
          )
          .map((element, index) => (
            <Card
              key={element.id}
              id={index + 1}
              name={element.name}
              price={element.price}
              image={element.icon}
              del={() => remove(element)}
              onPlus={addToCart} //onPlus={(obj) => setCartItems([...cartItems, obj])} лучше с prev т.к. берет предыдущие данные и добавляет. С первым вариантом могут быть устаревшие данные
              onLikeFavorits={addToFarvorite}
            />
          ))}
      </div>
    </div>
  )
}

export default Home
