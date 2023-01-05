import * as React from "react";
import { useState } from "react";
import Container from "@mui/material/Container";

import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import uuid from "react-uuid";



export default function Form(props) {
    const [userInput, setUserInput] = useState({
        enteredName: '',
        enteredAge: ''
    })


    const nameChangeHandler = (event) => {
        setUserInput((prevState) => {
            return{
                ...prevState, enteredName: event.target.value
            }
        })
    }
    const ageChangeHandler = (event) => {
        setUserInput((prevState) => {
            return{
                ...prevState, enteredAge: event.target.value
            }
        })
        console.log(userInput.enteredAge)
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        if(userInput.enteredAge=='' || userInput.enteredName==''){
            props.onChangeError(true)
        }else{
            const data = {
            id: uuid(),
            name: userInput.enteredName,
            age: parseFloat(userInput.enteredAge),
            };

            props.onSaveData(data);

            setUserInput({
            enteredAge: "",
            enteredName: "",
            });
        }
        
    }

  return (
    <div>

      <Container maxWidth="sm">
        <Box sx={{ minWidth: 275, mt: 2 }}>
          <Card variant="outlined">
            <React.Fragment>
              <CardContent>
                <Box
                  component="form"
                  sx={{
                    "& .MuiTextField-root": { m: 1, width: "25ch" },
                  }}
                  noValidate
                  autoComplete="off"
                >
                  <div>
                    <TextField
                      required
                      id="standard-required"
                      label="Name"
                      variant="standard"
                      onChange={nameChangeHandler}
                      value={userInput.enteredName}
                    />
                    <TextField
                      id="filled-number"
                      label="Age"
                      type="number"
                      required
                      variant="standard"
                      onChange={ageChangeHandler}
                      value={userInput.enteredAge}
                    />
                  </div>
                </Box>
              </CardContent>
              <CardActions>
                <Button size="small" type="submit" onClick={handleSubmit}>
                  Submit
                </Button>
              </CardActions>
            </React.Fragment>
          </Card>
        </Box>
      </Container>
    </div>
  );
}
