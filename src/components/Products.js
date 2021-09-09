import React from 'react'
import { DataGrid } from '@material-ui/data-grid'
import '../css/products.css'

const columns = [
  { field: 'id', headerName: 'ID', width: 100 },
  {
    field: 'name',
    headerName: 'Product Name',
    width: 200,
    editable: false,
  },
  {
    field: 'currentPrice',
    headerName: 'Price (GHS)',
    type: 'number',
    width: 250,
    editable: true,
  },
  {
    field: 'prevPrice',
    headerName: 'Previous Price (GHS)',
    type: 'number',
    width: 250,
    editable: false,
  },
  { field: 'action', headerName: 'Action', width: 150 },
]

function Products({ products }) {
  return (
    <div className='prod'>
      <DataGrid
        rows={products}
        columns={columns}
        pageSize={10}
        checkboxSelection
        //disableSelectionOnClick
      />
    </div>
  )
}

export default Products
