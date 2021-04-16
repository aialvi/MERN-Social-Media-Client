import { Container, AppBar, Typography, Grow, Grid } from "@material-ui/core";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Container maxWidth="lg">
        <AppBar position="static" color="inherit">
          <Typography variant="h2" align="center"></Typography>
          <img src="/images/memories.jpg" alt="memories" height="600" />
        </AppBar>
      </Container>
    </div>
  );
}

export default App;
