import Card from '../components/Card'

import React from 'react'

function favourites(props) {
  const { favorite, addToFarvorite } = props
  return (
    <div className="content p-40">
      <div className="d-flex align-center justify-between mb-40">
        <h1>Избранное</h1>
      </div>

      <div className="d-flex flex-wrap">
        {favorite.map((element) => (
          <Card
            key={element.id}
            id={element.id}
            name={element.name}
            price={element.price}
            image={element.image}
            isFavorited={true}
            onLikeFavorits={addToFarvorite}
          />
        ))}
      </div>
    </div>
  )
}

export default favourites
