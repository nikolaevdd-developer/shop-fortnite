import styles from './Card.module.scss'
import React, { useState } from 'react'

function Card({
  name,
  price,
  image,
  onPlus,
  id,
  del,
  onLikeFavorits,
  isFavorited = false,
}) {
  const [state, setState] = useState(false)
  const [value, setValue] = useState(isFavorited) // Отвечает за лайк false не лайкнуто true лайкнуто

  const onClickReverse = () => {
    state === false
      ? onPlus({ name, price, image, id })
      : del({ name, price, image, id })
    setState(!state)
  }

  const onFavorite = () => {
    // передает true/false в хук для лайка
    // value === false
    //   ? onLikeFavorits({ name, price, image, id })
    //   : onLikeFavorits({ name, price, image, id })

    setValue(!value)
    onLikeFavorits({ name, price, image, id })
  }

  return (
    <div className={styles.card}>
      <div className="favorite" onClick={onFavorite}>
        {value === true ? (
          <img src="/img/liked.svg" alt="liked" />
        ) : (
          <img src="/img/heart-unliked.svg" alt="liked" />
        )}
      </div>
      <img width={133} height={112} src={image} alt="Sneakers" />
      <h5>{name}</h5>
      <div className="d-flex justify-between align-center">
        <div className="d-flex flex-column">
          <span>Цена:</span>
          <b>{price} ₽</b>
        </div>
        <div onClick={onClickReverse}>
          <img
            src={state === true ? '/img/btn-checked.svg' : '/img/btn-plus.svg'}
            alt="Plus"
          />
        </div>
      </div>
    </div>
  )
}

export default Card
