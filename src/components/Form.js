import * as React from "react";
import { useState, useRef } from "react";
import Container from "@mui/material/Container";

import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import uuid from "react-uuid";



export default function Form(props) {
  const ageInputRef = useRef()

  const [userInput, setUserInput] = useState({
      enteredName: ''
  })


    const nameChangeHandler = (event) => {
        setUserInput((prevState) => {
            return{
                ...prevState, enteredName: event.target.value
            }
        })
    }
    

    const handleSubmit = (event) => {
        
        event.preventDefault()

      const age = ageInputRef.current.value;
      console.log("age" + age);

        if(ageInputRef==null || userInput.enteredName==''){
            props.onChangeError(true)
        }else{
            const data = {
              id: uuid(),
              name: userInput.enteredName,
              age: parseFloat(age),
            };

            props.onSaveData(data);

            setUserInput({
              enteredName: "",
            });

            
        }
        
    }

  return (
    <div>
      <Container maxWidth="sm">
        <Box sx={{ minWidth: 275, mt: 2 }}>
          <Card variant="outlined">
            <form onSubmit={handleSubmit}>
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
                      inputRef={ageInputRef}
                    />
                    
                  </div>
                </Box>
              </CardContent>
              <CardActions>
                <Button size="small" type="submit">
                  Submit
                </Button>
              </CardActions>
            </form>
          </Card>
        </Box>
      </Container>
    </div>
  );
}
