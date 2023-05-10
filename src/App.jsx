import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Routes, Route, json } from 'react-router-dom'
import Layout from './pages/Layout'
import Home from './pages/Home'
import Best from './pages/Favourites'

function App() {
  const [state, setState] = useState([])
  const [cartItems, setCartItems] = useState([])
  const [openDrawer, setopenDrawer] = useState(false)
  const [search, setSearch] = useState('')
  const [favorite, setFavorite] = useState([])

  useEffect(() => {
    function getData() {
      fetch('https://fortniteapi.io/v1/shop?lang=ru', {
        headers: {
          Authorization: '2ba1d099-e01b4fc5-8de05c2e-5017d4f8',
        },
      })
        .then((response) => response.json())
        .then((data) => setState(data.featured))
      axios
        .get('https://644be8164bdbc0cc3a9db75d.mockapi.io/cart')
        .then((res) => {
          setCartItems(res.data)
        })
      axios
        .get('https://644be8164bdbc0cc3a9db75d.mockapi.io/favorite')
        .then((res) => {
          setFavorite(res.data)
        })
    }
    getData()
  }, [])

  const removeToCart = (obj) => {
    axios.delete(`https://644be8164bdbc0cc3a9db75d.mockapi.io/cart/${obj}`)
    setCartItems((prev) => prev.filter((item) => item.id !== obj))
  }

  const searchItem = (event) => {
    setSearch(event.target.value)
    console.log(search)
  }

  const remove = (object) => {
    axios.delete(`https://644be8164bdbc0cc3a9db75d.mockapi.io/cart/${object}`)
    setCartItems((prev) => prev.filter((item) => item.name !== object.name))
  }

  const addToCart = (obj) => {
    axios.post('https://644be8164bdbc0cc3a9db75d.mockapi.io/cart', obj)
    setCartItems((prev) => [...prev, obj])
    console.log(obj)
  }

  const addToFarvorite = async (obj) => {
    try {
      if (favorite.find((favObj) => favObj.id === obj.id)) {
        axios.delete(
          `https://644be8164bdbc0cc3a9db75d.mockapi.io/favorite/${obj.id}`
        )
        setFavorite((prev) => prev.filter((item) => item.id !== obj.id))
      } else {
        const { data } = await axios.post(
          'https://644be8164bdbc0cc3a9db75d.mockapi.io/favorite',
          obj
        )
        setFavorite((prev) => [...prev, data])
      }
    } catch (error) {
      alert('Не удалось добавить/удалить товар')
    }
  }

  return (
    <Routes>
      <Route
        path="/"
        element={
          <Layout
            openDrawer={openDrawer}
            setopenDrawer={setopenDrawer}
            cartItems={cartItems}
            removeToCart={removeToCart}
          />
        }
      >
        <Route
          index
          element={
            <Home
              search={search}
              searchItem={searchItem}
              setSearch={setSearch}
              state={state}
              remove={remove}
              addToCart={addToCart}
              addToFarvorite={addToFarvorite}
            />
          }
        />
        <Route
          path="/favorites"
          element={<Best addToFarvorite={addToFarvorite} favorite={favorite} />}
        />
      </Route>
    </Routes>
  )
}

export default App
