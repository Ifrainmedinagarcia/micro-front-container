import { Grid, Button } from "@material-ui/core";
import MainLogo from "../ATOMS/MainLogo";

const Home = () => {
  return (
    <Grid
      className="home"
      container
      spacing={5}
      justifyContent="center"
      alignItems="center"
    >
      <Grid item xs={12}>
        <MainLogo />
      </Grid>
      <Grid item xs={1}>
        <Button variant="contained" color="secondary">
          Home
        </Button>
      </Grid>
      <Grid item xs={1}>
        <Button variant="contained" color="secondary">
          MFE1
        </Button>
      </Grid>
      <Grid item xs={1}>
        <Button variant="contained" color="secondary">
          MFE2
        </Button>
      </Grid>
    </Grid>
  );
};

export default Home;
