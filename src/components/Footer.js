import * as React from "react";


import Container from "@mui/material/Container";

import Box from "@mui/material/Box";
import Card  from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";


export default function Footer(props) {
  
  return (
    <Container maxWidth="sm">
      <Box sx={{ width: "100%", mt: 2 }}>
        <Card variant="outlined">
          <React.Fragment>
            <CardContent>

              <p
                style={{ color: "grey", textAlign: "center", display:'flex', justifyContent: 'center' }}
                className="love"
              >
                Made with  <img src='.././heart.svg' style={{width: '1rem', marginLeft: '5px', marginRight: '5px'}}></img> in Indonesia | Gabriel Allba | January 2023
              </p>
            </CardContent>
          </React.Fragment>
        </Card>
      </Box>
    </Container>
  );
}
