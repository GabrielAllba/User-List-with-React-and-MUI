import * as React from "react";
import Form from './components/Form'
import Header from './components/Header'
import UserList from "./components/UserList";
import Error from "./components/Error";
import { useState } from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Footer from "./components/Footer";
import { Card } from "@mui/material";
import Container from "@mui/material/Container";

const Data = [];

export default function App() {

  const [dataUser, setDataUser] = useState(Data)
  const [error, setError] = useState(false)
  const saveData = (value) => {
    
    setDataUser((prev) => {
      const newData = [value, ...prev];
      setError(false)
      return newData
    })

    
    
  }

  const changeClose = (val) => {
    setError(val)
  }

  const changeError = () => {
    setError(true)
    console.log(error)
  }
  console.log(dataUser);

  return (
    <React.Fragment>
      <Container maxWidth="md" sx={{mt: 2}} >
        <Card variant="outlined" sx={{pb: 2}}>
          {error === true ? (
            <Error
              onCloseHandle={changeClose}
              message="You must enter your name and age!"
            ></Error>
          ) : (
            ""
          )}
          <CssBaseline />
          <Header></Header>
          <Form onChangeError={changeError} onSaveData={saveData}></Form>
          <UserList user={dataUser}></UserList>
          <Footer></Footer>
        </Card>
      </Container>
    </React.Fragment>
  );
}