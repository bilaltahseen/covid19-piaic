import React from 'react';
import { makeStyles, Paper, Box } from '@material-ui/core';
import PublicIcon from '@material-ui/icons/Public';
import { DataContext } from '../Store/StoreContext';

const useStyles = makeStyles((theme) => ({
  root: {},
  text: {
    fontSize: '1.6em',
    fontWeight: 400,
    fontFamily: 'Montserrat',
    paddingLeft: 10,
  },
  icon: {
    fontSize: '1.9em',
  },
  aside: {
    '& h3': {
      fontFamily: 'Montserrat',
      fontSize: '1.5em',
      fontWeight: 400,
      color: theme.palette.primary.main,
      marginBottom: -10,
    },
    '& p': {
      fontFamily: 'Montserrat',
      fontSize: '1.6em',
      fontWeight: 500,
      marginBottom: 10,
    },
  },
}));

const WorldCases = () => {
  const classes = useStyles();
  const [state] = React.useContext(DataContext);
  const { TotalConfirmed, TotalDeaths, TotalRecovered } = state.globalData;

  return (
    <React.Fragment>
      <Box paddingTop={5}>
        <Box display='flex' flexDirection='row' alignItems='center'>
          <PublicIcon fontSize='large' />
          <p className={classes.text}>Global Cases</p>
        </Box>
        <Paper elevation={1}>
          <Box
            padding={2}
            display='flex'
            flexDirection='column'
            height={400}
            textAlign='center'
            className={classes.aside}
          >
            <h3>Total Confirmed</h3>
            <p>{TotalConfirmed}</p>
            <br></br>
            <h3>Total Deaths</h3>
            <p>{TotalDeaths}</p>
            <br></br>
            <h3>Total Recovered</h3>
            <p>{TotalRecovered}</p>
          </Box>
        </Paper>
      </Box>
    </React.Fragment>
  );
};

export default WorldCases;
