import React from "react";
import Box from  '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import TodoItem from "../TodoItem/TodoItem";
import { grey } from '@mui/material/colors';
import {useSelector} from "react-redux";
import {selectTodos} from '../../store/todoSlice'

const color = grey[200]
const style = {
  background: color,
  paddingX: 1,
  paddingY: 3,
  borderRadius: 1
}

const Body = () => {
  const items= useSelector(selectTodos)

  const content = () => {
    if(!items.length) {
      const text = 'You have no todos'
      return(<Typography variant="overline">{text}</Typography>)
    }
    return (
      items.map(item => <TodoItem text={item.text} id={item.id} key={item.id}/>)
    )
  }

  return (
      <Box sx={style}>
        <Stack spacing={2}>
          {
            content()
          }
        </Stack>
      </Box>
  )
}

export default Body
