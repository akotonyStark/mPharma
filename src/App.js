import logo from './logo.svg'
import './App.css'
import NavBar from './components/NavBar'
import Products from './components/Products'
import { useState } from 'react'

function App() {
  const [products, setProducts] = useState([
    { id: 'p0001', name: 'Morphine', latestPrice: '100', prevPrice: '110' },
    { id: 'p0002', name: 'Ibuprufen', latestPrice: '120', prevPrice: '140' },
    { id: 'p0003', name: 'Morphine', latestPrice: '100', prevPrice: '110' },
    { id: 'p0004', name: 'Ibuprufen', latestPrice: '120', prevPrice: '140' },
    { id: 'p0005', name: 'Morphine', latestPrice: '100', prevPrice: '110' },
    { id: 'p0006', name: 'Ibuprufen', latestPrice: '120', prevPrice: '140' },
    { id: 'p0007', name: 'Morphine', latestPrice: '100', prevPrice: '110' },
    { id: 'p0008', name: 'Ibuprufen', latestPrice: '120', prevPrice: '140' },
  ])

  return (
    <div className='App'>
      <br />
      <NavBar />
      <Products products={products} />
    </div>
  )
}

export default App
