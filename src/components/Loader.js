import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import CircularProgress from '@material-ui/core/CircularProgress'

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
}))

function Loader() {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <CircularProgress style={{ color: '#ff5100', margin: '0 auto' }} />
    </div>
  )
}

export default Loader