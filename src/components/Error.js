import * as React from "react";

import Container from "@mui/material/Container";

import Box from "@mui/material/Box";
import Alert from "@mui/material/Alert";
import IconButton from "@mui/material/IconButton";
import Collapse from "@mui/material/Collapse";
import Button from "@mui/material/Button";
import CloseIcon from "@mui/icons-material/Close";

import { useState } from "react";

const Backdrop = props => {
  
}


export default function Error(props) {
    const [open, setOpen] = useState(true);
const closeHandle = () => {
  props.onCloseHandle(false)
}
  return (
    <Container maxWidth="sm">
      <Box sx={{ width: "100%", mt: 2 }}>
        <Collapse in={open}>
          <Alert
          severity="error"
            action={
              <IconButton
                aria-label="close"
                color="inherit"
                size="small"
                onClick={() => {
                  setOpen(false);
                }}
              >
                <CloseIcon fontSize="inherit" onClick={closeHandle}/>
              </IconButton>
            }
            sx={{ mb: 2 }}
          >
            {props.message}
          </Alert>
        </Collapse>
        
      </Box>
    </Container>
  );
}
