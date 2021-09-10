import './App.css'
import NavBar from './components/NavBar'
import Products from './components/Products'
import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Loader from './components/Loader'
import AddModal from './components/AddModal'
import ConfirmationModal from './components/ConfirmationModal'

let initData = []

function App() {
  const [products, setProducts] = useState([])
  const [isLoading, setIsloading] = useState(true)
  const [open, setOpen] = useState(false)
  const [isOpen, setConfirmModalOpen] = useState(false);
  const [liveData, setLiveData] = useState(initData)
  const [modalTitle, setModalTitle] = useState('Add Product')
  const [productName, setProductName] = useState('')
  const [productPrice, setProductPrice] = useState('')
  const [showUpdate, setShowUpdate] = useState(false)
  const [hideSave, setHideSave] = useState(false)


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
          setLiveData(initData)
          localStorage.setItem('initData', JSON.stringify(initData))
        })
        setIsloading(false)
        setProducts(initData)
      }
    } catch (error) {
      setIsloading(false)
      const offlineData = localStorage.getItem('initData')
      //console.log(offlineData)
      setLiveData(JSON.parse(offlineData))
      setProducts(JSON.parse(offlineData))
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
    setProductName('')
    setProductPrice('')
    setModalTitle('Add Product')
    setShowUpdate(false)
    setHideSave(false)
  }

  return (
    <div className='App'>
      <NavBar
        setProducts={setProducts}
        handleClickOpen={handleClickOpen}
        data={initData}
        liveData={liveData}
        setLiveData={setLiveData}
      />

      <ConfirmationModal
        isOpen = {isOpen}
        setConfirmModalOpen = {setConfirmModalOpen}
        products={products}
        setProducts={setProducts}
        liveData={liveData}
        setLiveData={setLiveData}/>


      {isLoading ? (
        <Loader />
      ) : (
        <Products
          products={products}
          setOpen={setOpen}
          modalTitle={modalTitle}
          setModalTitle={setModalTitle}
          productName={productName}
          setProductName={setProductName}
          productPrice={productPrice}
          setProductPrice={setProductPrice}
          showUpdate={showUpdate}
          setShowUpdate={setShowUpdate}
          hideSave={hideSave}
          setHideSave={setHideSave}
          setConfirmModalOpen = {setConfirmModalOpen} 
          isOpen = {isOpen}
        />
      )}
      <AddModal
        handleClickOpen={handleClickOpen}
        open={open}
        products={products}
        setProducts={setProducts}
        setOpen={setOpen}
        data={initData}
        liveData={liveData}
        setLiveData={setLiveData}
        modalTitle={modalTitle}
        setModalTitle={setModalTitle}
        productName={productName}
        setProductName={setProductName}
        productPrice={productPrice}
        setProductPrice={setProductPrice}
        showUpdate={showUpdate}
        setShowUpdate={setShowUpdate}
        hideSave={hideSave}  
        setConfirmModalOpen = {setConfirmModalOpen}     
      />
    
    </div>
  )
}

export default App
