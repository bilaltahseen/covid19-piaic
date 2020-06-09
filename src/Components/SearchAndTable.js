import React from 'react';
import {
  makeStyles,
  TextField,
  Button,
  Grid,
  useMediaQuery,
  Box,
} from '@material-ui/core';

import SearchIcon from '@material-ui/icons/Search';

import { ArrowBackRounded, ArrowForwardRounded } from '@material-ui/icons';
import CountryCard from './CountryCard';

import { DataContext } from '../Store/StoreContext';

import SeprateSearchCard from '../Components/SeprateSearchCard';

const useStyles = makeStyles((theme) => ({
  root: {},
  input: { height: 40 },
}));

const SearchAndTable = () => {
  const classes = useStyles();
  const [state, dispatch] = React.useContext(DataContext);
  const [countryName, setCountryName] = React.useState('');
  const [showArrows, setArrows] = React.useState(false);
  let [increment, setIncrement] = React.useState(0);
  const capital_letter = (str) => {
    str = str.toLowerCase().split(' ');

    for (var i = 0, x = str.length; i < x; i++) {
      str[i] = str[i][0].toUpperCase() + str[i].substr(1);
    }

    return str.join(' ');
  };
  const serachByCountry = () => {
    if (countryName !== '') {
      dispatch({
        type: 'DIALOG_SEARCH',
        payload: {
          countryName: capital_letter(countryName),
          isActive: true,
        },
      });
    } else {
      return;
    }
  };
  const pagination = (cases) => {
    console.log('Pagination');
    if (cases === 'Forward') {
      setIncrement((increment += 6));
      if (increment >= state.countriesData.length) {
        setIncrement(0);
      }
    } else {
      setIncrement((increment -= 6));
      if (increment < 0) {
        setIncrement(0);
      }
    }
  };
  const matches = useMediaQuery((theme) => theme.breakpoints.down('xs'));
  const mapCards = state.countriesData
    .slice(increment + 0, increment + 6)
    .map((elem, index) => {
      return (
        <Grid item xs={12} md={4}>
          <CountryCard
            Country={elem.Country}
            CountryCode={elem.CountryCode}
            NewConfirmed={elem.NewConfirmed}
            TotalConfirmed={elem.TotalConfirmed}
            NewDeaths={elem.NewDeaths}
            TotalDeaths={elem.TotalDeaths}
            NewRecovered={elem.NewRecovered}
            TotalRecovered={elem.TotalRecovered}
            Date={elem.Date}
          />
        </Grid>
      );
    });

  return (
    <React.Fragment>
      <Grid container justify='center' alignItems='center'>
        {state.dialogCard.isActive && state.dialogCard.data ? (
          <SeprateSearchCard />
        ) : (
          ''
        )}
        <Grid item xs={12} md={12}>
          <Grid
            container
            spacing={matches ? 0 : 5}
            direction='row'
            justify='space-evenly'
            alignItems='center'
          >
            <Grid item xs={9} md={11}>
              <TextField
                label='Search By Country'
                InputProps={{ className: classes.input }}
                fullWidth
                onChange={(event) => setCountryName(event.target.value)}
                value={countryName}
                variant='outlined'
                color='primary'
              />
            </Grid>
            <Grid item xs={2} md={1}>
              <Button
                onClick={serachByCountry}
                className={classes.input}
                variant='outlined'
                color='primary'
              >
                <SearchIcon />
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      {state.dialogCard.isActive && state.dialogCard.data ? (
        ''
      ) : (
        <p style={{ color: 'red' }}>Enter Valid Details*</p>
      )}
      <br></br>
      <Grid container justify='center' alignItems='center' spacing={3}>
        {mapCards}
      </Grid>
      <Box
        display='flex'
        flexDirection='row-reverse'
        alignItems='center'
        justifyContent='space-between'
      >
        <p
          onClick={() =>
            state.countriesData.length > 0 ? pagination('Forward') : ''
          }
          style={{ textAlign: 'right', cursor: 'pointer' }}
        >
          <ArrowForwardRounded />
        </p>
        <p
          onClick={() => (state.countriesData.length > 0 ? pagination('') : '')}
          style={{ textAlign: 'left', cursor: 'pointer' }}
        >
          <ArrowBackRounded />
        </p>
      </Box>
    </React.Fragment>
  );
};

export default SearchAndTable;
