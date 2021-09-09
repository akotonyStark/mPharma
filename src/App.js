import logo from './logo.svg'
import './App.css'
import NavBar from './components/NavBar'
import Products from './components/Products'
import { useState, useEffect } from 'react'
import Fab from '@material-ui/core/Fab'
import AddIcon from '@material-ui/icons/Add'
import axios from 'axios'

let initData = []

function App() {
  const [products, setProducts] = useState([])

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
        setProducts(initData)
      }
    } catch (error) {
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

  return (
    <div className='App'>
      <NavBar />
      <Products products={products} />
      {/* <Fab color='primary' aria-label='add' style={{ float: 'right' }}>
        <AddIcon />
      </Fab> */}
    </div>
  )
}

export default App
