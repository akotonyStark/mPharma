import React from 'react'
import ProductItem from './ProductItem'
import { makeStyles } from '@material-ui/core/styles'
import { DataGrid } from '@material-ui/data-grid'

const useStyles = makeStyles({
  root: {
    width: '100%',
  },
  container: {
    maxHeight: 600,
  },
})

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
  const classes = useStyles()
  const [page, setPage] = React.useState(0)
  const [rowsPerPage, setRowsPerPage] = React.useState(10)

  return (
    <div
      className='prod'
      style={{ margin: '0 auto', height: 600, width: '50%', padding: '20px' }}
    >
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
