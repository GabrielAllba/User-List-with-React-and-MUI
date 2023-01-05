import * as React from "react";
import Container from "@mui/material/Container";

import Box from "@mui/material/Box";
import Card from "@mui/material/Card";

import CardContent from "@mui/material/CardContent";

import Typography from "@mui/material/Typography";


const card = (
  <React.Fragment>
    <CardContent>

      <Typography variant="h5" component="div">
        User Management
      </Typography>
      <Typography color="text.secondary">
        Created with React and Material UI
      </Typography>
      
    </CardContent>
 
  </React.Fragment>
);

export default function Header() {
  return (
    <Container maxWidth="sm">
      <Box sx={{ minWidth: 275, mt: 2 }}>
        <Card variant="outlined">{card}</Card>
      </Box>
    </Container>
  );
}
