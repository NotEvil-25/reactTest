import React from "react";
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import ItemButtons from "../ItemButtons/ItemButtons";
import Typography from "@mui/material/Typography";

const TodoItem = ({...props}) => {
  const {text, id} = props

  return (
      <Paper elevation={0} sx={{p: 2}}>
        <Grid container spacing={{ xs: 2, sm: 0 }}>
          <Grid item xs={10}>
            <Typography variant="body1">
              {text}
            </Typography>
          </Grid>
          <Grid item xs={2}>
            <ItemButtons text={text} id={id}/>
          </Grid>
        </Grid>
      </Paper>
  )
}

export default TodoItem