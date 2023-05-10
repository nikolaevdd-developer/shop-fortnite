import { Link } from 'react-router-dom'

function Header(props) {
  return (
    <header className="d-flex justify-between align-center p-40">
      <Link to="/">
        <div className="d-flex align-center">
          <img width={40} height={40} src="/img/logo.png" />
          <div>
            <h3 className="text-uppercase">React Fortnite</h3>
            <p className="opacity-5">Магазин товаров Fortnite</p>
          </div>
        </div>
      </Link>

      <ul className="d-flex">
        <li onClick={props.onOpen}>
          <span className="price">1205 руб.</span>
          <img width={18} height={18} src="/img/cart.svg" />
        </li>
        <li>
          <Link to="/favorites">
            <img src="/img/heart.svg" alt="избранное" />
          </Link>
        </li>
        <li>
          <img width={18} height={18} src="/img/user.svg" />
        </li>
      </ul>
    </header>
  )
}

export default Header
