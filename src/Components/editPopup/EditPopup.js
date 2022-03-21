import React, {useState} from "react";
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import Button from '@mui/material/Button';
import {useDispatch, useSelector} from "react-redux";
import {selectPopupStatus, selectEditingId, selectText, popup} from "../../store/todoSlice";

const EditPopup = () => {

  const dispatch = useDispatch()
  const open = useSelector(selectPopupStatus)
  const id = useSelector(selectEditingId)
  const [error, setError] = useState(false)
  const [labelVal, setLabelVal] = useState('Change task')
  const text = useSelector(selectText)
  const [inputVal, setInputVal] = useState(text)

  const closePopup = () => {
    dispatch(popup({
      show: false
    }))
    setInputVal('')
  }

  const getInputVal = (e) => {
    setInputVal(e.target.value)
  }

  const confirmNewValue = () => {
    if(inputVal.trim() === '') {
      setError(true)
      setLabelVal('Input not empty value')
      return
    }
    dispatch(popup({
      show: false,
      text: inputVal,
      itemId: id,
      newText: inputVal
    }))
  }

  return (
      <div>
        <Dialog fullWidth={true} maxWidth={'sm'} open={open} onClose={closePopup}>
          <DialogTitle>Edit task</DialogTitle>
          <div>
            <DialogContent>
              <TextField
                onChange={getInputVal}
                error={error}
                label={labelVal}
                value={inputVal}
                placeholder="Your task"
                size="normal"
                multiline
                fullWidth
              />
            </DialogContent>
          </div>
          <DialogActions>
            <Button onClick={closePopup}>Cancel</Button>
            <Button onClick={confirmNewValue}>Confirm</Button>
          </DialogActions>
        </Dialog>
      </div>
  )
}

export default EditPopup