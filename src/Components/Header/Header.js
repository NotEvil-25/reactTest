import React, {useState} from 'react'
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';
import {useDispatch} from "react-redux";
import {add} from '../../store/todoSlice'
import { nanoid } from 'nanoid'

const buttonStyle = {
  width: {
    xs: '100%',
    sm: 'auto'
  }
}
const Header = () => {
  const dispatch = useDispatch()
  const [val, setVal] = useState('')
  const [error, setError] = useState(false)
  const [labelVal, setLabelVal] = useState('Input task')

  const addItem = () => {
    if(val.trim() === '') {
      setError(true)
      setLabelVal('Input not empty value')
      setVal('')
      return
    }
    setError(false)
    setLabelVal('Input task')
    setVal('')
    dispatch(add({
      id: nanoid(),
      text: val
    }))
  }

  const input = (e) => {
    const inputValue = e.target.value
    setVal(inputValue)
  }

  return (
      <Box sx={{marginBottom: 2}}>
        <Grid container spacing={{ xs: 2, sm: 0 }}>
          <Grid item xs={12} sm={10}>
            <TextField
                error={error}
                id="outlined-textarea"
                label={labelVal}
                placeholder="Your task"
                size="normal"
                multiline
                fullWidth
                value={val}
                onChange={input}
            />
          </Grid>
          <Grid item container justifyContent="end" alignItems="center" xs={12} sm={2}>
            <Button onClick={addItem} variant="contained" size="large" sx={buttonStyle}>
              <AddIcon/>
            </Button>
          </Grid>
        </Grid>
      </Box>
  )
}

export default Header