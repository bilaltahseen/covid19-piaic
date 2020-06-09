import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';

import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';

import Typography from '@material-ui/core/Typography';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  media: {
    height: 64,
    width: 64,
  },
  table: {
    '& th': { fontWeight: 'bold' },
    '& td': { color: theme.palette.primary.main, fontWeight: 500 },
  },
}));

export default function CountryCard(props) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardMedia
        className={classes.media}
        image={`https://www.countryflags.io/${props.CountryCode}/flat/64.png`}
        title={`${props.Country} Flag`}
      />
      <CardContent>
        <Typography gutterBottom variant='h5' component='h2'>
          {props.Country}
        </Typography>
        <TableContainer>
          <Table className={classes.table} aria-label='simple table'>
            <TableHead>
              <TableRow>
                <TableCell>New Confirmed</TableCell>
                <TableCell>Total Confirmed</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell>{props.NewConfirmed}</TableCell>
                <TableCell>{props.TotalConfirmed}</TableCell>
              </TableRow>
            </TableBody>
            <TableHead>
              <TableRow>
                <TableCell>New Death</TableCell>
                <TableCell>Total Death</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell>{props.NewDeaths}</TableCell>
                <TableCell>{props.TotalDeaths}</TableCell>
              </TableRow>
            </TableBody>
            <TableHead>
              <TableRow>
                <TableCell>New Recovered</TableCell>
                <TableCell>Total Recovered</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell>{props.NewRecovered}</TableCell>
                <TableCell>{props.TotalRecovered}</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </CardContent>
    </Card>
  );
}
