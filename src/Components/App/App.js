import React from "react";
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Header from "../Header/Header";
import Body from "../Body/Body";
import {useSelector} from "react-redux";
import {selectPopupStatus} from "../../store/todoSlice";
import EditPopup from "../editPopup/EditPopup";

const App = () => {
  const isPopupShow = useSelector(selectPopupStatus)

  return(
      <Box sx={{paddingY: 5, minHeight: '100vh'}}>
        <CssBaseline />
        <Container maxWidth="md">
          <Header/>
          <Body/>
        </Container>
        {
          isPopupShow &&
          <EditPopup/>
        }
      </Box>
  )
}

export default App
