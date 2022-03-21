import React from "react";
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import Stack from '@mui/material/Stack';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { red } from '@mui/material/colors';
import {useDispatch} from "react-redux";
import {remove, popup} from '../../store/todoSlice'

const deleteColor = red[900]

const theme = createTheme({
  palette: {
    delete: {
      main: deleteColor,
      contrastText: '#fff',
    }
  },
});

const ItemButtons = ({...props}) => {
  const {id, text} = props
  const dispatch = useDispatch()

  const deleteItem = () => {
    dispatch(remove(id))
  }

  const showEditPopup = () => {
    dispatch(popup({
      show: true,
      text: text,
      itemId: id
    }))
  }

  return (
      <ThemeProvider theme={theme}>
        <Stack spacing={2}>
          <Button onClick={showEditPopup} variant="contained">
            <EditIcon/>
          </Button>
          <Button onClick={deleteItem} variant="contained" color="delete">
            <DeleteIcon/>
          </Button>
        </Stack>
      </ThemeProvider>
  )
}

export default ItemButtons