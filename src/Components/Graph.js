import React from 'react';
import { makeStyles, Box, Paper } from '@material-ui/core';
import {
  LineChart,
  XAxis,
  Tooltip,
  CartesianGrid,
  Line,
  ResponsiveContainer,
  YAxis,
} from 'recharts';
import { DataContext } from '../Store/StoreContext';

const useStyles = makeStyles((theme) => ({
  root: {},
  image: { marginRight: 20 },
  text: {
    fontSize: '1.6em',
    fontWeight: 400,
    fontFamily: 'Montserrat',
  },
}));

const Graph = () => {
  const [state] = React.useContext(DataContext);
  const data = state.pakistanData;

  const classes = useStyles();
  return (
    <React.Fragment>
      <Box paddingTop={5}>
        <Box display='flex' flexDirection='row' alignItems='center'>
          <img
            className={classes.image}
            src='https://www.countryflags.io/PK/flat/64.png'
          />
          <p className={classes.text}>Pakistan's Cases</p>
        </Box>
        <Paper elevation={1}>
          <Box padding={2}>
            <ResponsiveContainer width='100%' height={400}>
              <LineChart
                data={data}
                margin={{ top: 5, right: 20, left: 10, bottom: 5 }}
              >
                <XAxis dataKey='Date' />
                <YAxis dataKey='Confirmed' />
                <Tooltip />
                <CartesianGrid stroke='#f5f5f5' />
                <Line
                  type='monotone'
                  dataKey='Confirmed'
                  stroke='#ff7300'
                  yAxisId={0}
                />
                <Line
                  type='monotone'
                  dataKey='Active'
                  stroke='blue'
                  yAxisId={0}
                />
                <Line
                  type='monotone'
                  dataKey='Deaths'
                  stroke='red'
                  yAxisId={0}
                />
                <Line
                  type='monotone'
                  dataKey='Recovered'
                  stroke='green'
                  yAxisId={0}
                />
              </LineChart>
            </ResponsiveContainer>
          </Box>
        </Paper>
      </Box>
    </React.Fragment>
  );
};

export default Graph;
