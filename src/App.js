import React from "react";
import { Container, AppBar, Typography, Grow, Grid } from "@material-ui/core";
import "./App.css";
import Posts from "./components/Posts/Posts";
import Form from "./components/Form/Form";

function App() {
  return (
    <div className="App">
      <Container maxWidth="lg">
        <AppBar position="static" color="inherit">
          <Typography variant="h2" align="center"></Typography>
          <img src="/images/memories.jpg" alt="memories" height="600" />
        </AppBar>
        <Grow in>
          <Container>
            <Grid container justify="space-between" alignItems="stretch">
              <Grid item xs={12} sm={7}>
                <Posts />
              </Grid>
              <Grid item xs={12} sm={4}>
                <Form />
              </Grid>
            </Grid>
          </Container>
        </Grow>
      </Container>
    </div>
  );
}

export default App;
