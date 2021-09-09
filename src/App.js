import './App.css'
import NavBar from './components/NavBar'
import Products from './components/Products'
import { React, useState, useEffect } from 'react'
import axios from 'axios'
import Loader from './components/Loader'
import AddModal from './components/AddModal'

let initData = []

function App() {
  const [products, setProducts] = useState([])
  const [isLoading, setIsloading] = useState(true)
  const [open, setOpen] = useState(false)

  const getData = async () => {
    try {
      const result = await fetch(
        'http://www.mocky.io/v2/5c3e15e63500006e003e9795'
      )
      const data = await result.json()
      if (data.products) {
        data.products.map((item) => {
          let newObj = {
            id: item.id,
            name: item.name,
            currentPrice: item.prices[0].price,
            prevPrice: item.prices[1].price,
          }
          initData.push(newObj)
        })
        setIsloading(false)
        setProducts(initData)
      }
    } catch (error) {
      setIsloading(false)
      setProducts([])
      console.log(error)
    }

    // axios
    //   .get('http://www.mocky.io/v2/5c3e15e63500006e003e9795')
    //   .then((res) => {
    //     //console.log('Data:', res.data.products)
    //     res.data.products.map((item) => {
    //   let newObj = {
    //     id: item.id,
    //     name: item.name,
    //     currentPrice: item.prices[0].price,
    //     prevPrice: item.prices[1].price,
    //   }
    //   initData.push(newObj)
    // })
    //     console.log(initData)
    //     setProducts(initData)
    //   })
    //   .catch((err) => {
    //     console.log(err)
    //   })
    //   .finally(console.log('done'))
  }
  useEffect(() => {
    getData()
  }, [])

  const handleClickOpen = () => {
    setOpen(!open)
  }

  return (
    <div className='App'>
      <NavBar
        setProducts={setProducts}
        products={products}
        handleClickOpen={handleClickOpen}
      />
      {isLoading ? <Loader /> : <Products products={products} />}
      <AddModal handleClickOpen={handleClickOpen} open={open} />
    </div>
  )
}

export default App
