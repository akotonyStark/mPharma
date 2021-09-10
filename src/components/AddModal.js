import React, { useRef } from 'react'
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
  data,
  open,
  handleClickOpen,
  setOpen,
  setProducts,
  liveData,
  setLiveData,
  modalTitle,
  productName,
  setProductName,
  productPrice,
  setProductPrice,
  showUpdate,
  hideSave,
  setConfirmOpen
 
}) {
 

  const priceRef = useRef(null)
  const prodNameRef = useRef(null)

  const handleFormSubmit = () => {
    let newEntry = {
      id: Math.floor(Math.random() * 1000 + 1),
      name: productName,
      currentPrice: Number(productPrice),
      prevPrice: Number(productPrice),
    }

    //console.log(newEntry)
    setProducts((prevList) => [...liveData, newEntry])
    data = [...liveData, newEntry]
    setLiveData(data)

    // console.log('Context Data:', liveData)
    // console.log('UpdatedLive: ', data)

    setOpen(false)
    setProductName('')
    setProductPrice('')
  }

  const handleFormUpdate = () => {
    let inmemoryItem = JSON.parse(localStorage.getItem('selecteditem'))
    let newObj = {
      id: inmemoryItem.id,
      name: productName,
      currentPrice: productPrice,
      prevPrice: inmemoryItem.currentPrice,
    }
    setProducts((prevList) => [...liveData, newObj])
    console.log('Record was: ', inmemoryItem)
    console.log('Updated with: ', newObj)

    setOpen(false)
    setProductName('')
    setProductPrice('')
  }

  return (
    <div>
      <Dialog
        onClose={handleClickOpen}
        aria-labelledby='customized-dialog-title'
        open={open}
      >
        <DialogTitle id='customized-dialog-title' onClose={handleClickOpen}>
          {modalTitle}
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
          {!hideSave ? (
            <Button
              variant='contained'
              onClick={handleFormSubmit}
              style={{
                backgroundColor: '#ff5100',
                color: 'white',
              }}
            >
              Save
            </Button>
          ) : null}
          {showUpdate ? (
            <Button
              variant='contained'
              onClick={handleFormUpdate}
              style={{
                backgroundColor: '#1383b5',
                color: 'white',
              }}
            >
              Update
            </Button>
          ) : null}
        </DialogActions>
      </Dialog>
    </div>
  )
}
