import React from 'react';
import {
  makeStyles,
  Container,
  Box,
  Grid,
  CircularProgress,
  Paper,
} from '@material-ui/core';
import { DataContext } from '../Store/StoreContext';
import Graph from '../Components/Graph';
import SearchAndTable from '../Components/SearchAndTable';

const WorldCases = React.lazy(() => import('../Components/WorldCases'));
const useStyles = makeStyles((theme) => ({
  root: {
    padding: 30,

    '& h2': { color: theme.palette.primary.main, fontFamily: 'Montserrat' },
  },
  image: { marginRight: 10 },
}));

const Home = () => {
  const classes = useStyles();
  return (
    <React.Fragment>
      <Container className={classes.root} maxWidth='lg'>
        <Box
          display='flex'
          flexDirection='row'
          width='400px'
          alignItems='center'
        >
          <img
            width='70px'
            height='70px'
            className={classes.image}
            src='https://images.vexels.com/media/users/3/193092/isolated/preview/bc883ba3bb35fc54dd1aa45844dc6471-covid-19-stroke-icon-by-vexels.png'
          ></img>
          <h2>COVID 19 STATISTICS</h2>
        </Box>
        <Grid container justify='center' alignItems='center' spacing={7}>
          <Grid item xs={12} md={8}>
            <Graph />
          </Grid>
          <Grid item xs={12} md={4}>
            <React.Suspense
              fallback={
                <Box
                  display='flex'
                  flexDirection='row'
                  alignItems='flex-end'
                  justifyContent='center'
                >
                  <CircularProgress />
                </Box>
              }
            >
              <WorldCases />
            </React.Suspense>
          </Grid>
        </Grid>
        <br></br>

        <SearchAndTable />
      </Container>
    </React.Fragment>
  );
};

export default Home;
