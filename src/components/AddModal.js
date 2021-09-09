import React, { useRef, useEffect, useState } from 'react'
import { withStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'
import Dialog from '@material-ui/core/Dialog'
import MuiDialogTitle from '@material-ui/core/DialogTitle'
import MuiDialogContent from '@material-ui/core/DialogContent'
import MuiDialogActions from '@material-ui/core/DialogActions'
import IconButton from '@material-ui/core/IconButton'
import CloseIcon from '@material-ui/icons/Close'
import Typography from '@material-ui/core/Typography'
import TextField from '@material-ui/core/TextField'

const styles = (theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(2),
  },
  closeButton: {
    position: 'absolute',
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[500],
  },
})

const DialogTitle = withStyles(styles)((props) => {
  const { children, classes, onClose, ...other } = props
  return (
    <MuiDialogTitle disableTypography className={classes.root} {...other}>
      <Typography variant='h6'>{children}</Typography>
      {onClose ? (
        <IconButton
          aria-label='close'
          className={classes.closeButton}
          onClick={onClose}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </MuiDialogTitle>
  )
})

const DialogContent = withStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
  },
}))(MuiDialogContent)

const DialogActions = withStyles((theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(1),
  },
}))(MuiDialogActions)

export default function AddModal({
  open,
  handleClickOpen,
  setOpen,
  setProducts,
}) {
  const [productName, setProductName] = useState('')
  const [productPrice, setProductPrice] = useState('')

  const priceRef = useRef(null)
  const prodNameRef = useRef(null)

  const handleFormSubmit = () => {
    let newEntry = {
      id: Math.floor(Math.random() * 1000 + 1),
      name: productName,
      currentPrice: Number(productPrice),
      prevPrice: 0,
    }

    console.log(newEntry)
    setProducts((prevList) => {
      return [...prevList, newEntry]
    })

    setOpen(false)
    setProductName('')
    setProductPrice('')
  }

  useEffect(() => {
    // prodNameRef.current.focus()
    return () => {
      //cleanup
    }
  }, [])

  return (
    <div>
      <Dialog
        onClose={handleClickOpen}
        aria-labelledby='customized-dialog-title'
        open={open}
      >
        <DialogTitle id='customized-dialog-title' onClose={handleClickOpen}>
          Add Product
        </DialogTitle>
        <DialogContent dividers>
          <TextField
            autoFocus
            margin='dense'
            id='productName'
            label='Product Name'
            type='text'
            fullWidth
            ref={prodNameRef}
            value={productName}
            onChange={(e) => setProductName(e.target.value)}
          />
          <TextField
            autoFocus
            margin='dense'
            id='productPrice'
            label='Price'
            type='number'
            fullWidth
            ref={priceRef}
            value={productPrice}
            onChange={(e) => setProductPrice(e.target.value)}
          />
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleFormSubmit} color='primary'>
            Save
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  )
}
