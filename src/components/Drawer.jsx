function Drawer(props) {
  const { items = [], onClose, remove } = props

  const removeToCart = (object) => {
    // items.filter((item) => item.id !== e.id)
    remove(object.id)
    console.log(object.id)
  }

  return (
    <div className="overlay">
      <div className="drawer">
        <h2 className="d-flex justify-between mb-30">
          Корзина{' '}
          <img
            className="cu-p"
            src="/img/btn-remove.svg"
            alt="Close"
            onClick={onClose}
          />
        </h2>

        <div className="items">
          {items.length > 0 ? (
            items.map((e) => (
              <div className="cartItem d-flex align-center mb-20">
                <div
                  style={{ backgroundImage: 'image' }}
                  className="cartItemImg"
                >
                  <img style={{ width: '100%' }} src={e.image} alt="Plus" />
                </div>

                <div className="mr-20 flex">
                  <p className="mb-5">{e.name}</p>
                  <b>{e.price}</b>
                </div>
                <img
                  className="removeBtn"
                  src="/img/btn-remove.svg"
                  alt="Remove"
                  onClick={() => removeToCart(e)}
                />
              </div>
            ))
          ) : (
            <div className="transform-arr-a">
              <img src="/img/empty-cart.jpg" className=""></img>
              <h2>Корзина пустая</h2>
              <p>Добавьте товар, что бы сделать заказ</p>
            </div>
          )}
        </div>

        {items.length > 0 ? (
          <div className="cartTotalBlock">
            <ul>
              <li>
                <span>Итого:</span>
                <div></div>
                <b>21 498 руб. </b>
              </li>
              <li>
                <span>Налог 5%:</span>
                <div></div>
                <b>1074 руб. </b>
              </li>
            </ul>
            <button className="greenButton">
              Оформить заказ <img src="/img/arrow.svg" alt="Arrow" />
            </button>
          </div>
        ) : (
          <button className="greenButton" onClick={onClose}>
            <img src="/img/arrow.svg" alt="Arrow" class="transform-arr" />{' '}
            Вернуться обратно
          </button>
        )}
      </div>
    </div>
  )
}

export default Drawer
