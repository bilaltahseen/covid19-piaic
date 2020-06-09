import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';

import CountryCard from '../Components/CountryCard';

import { DataContext } from '../Store/StoreContext';

export default function SeprateSearchCard() {
  const [open, setOpen] = React.useState(true);
  const [state, dispatch] = React.useContext(DataContext);

  const handleClose = () => {
    dispatch({
      type: 'DIALOG_SEARCH',
      payload: { countryName: '', isActive: false },
    });
  };

  return (
    <div>
      <Dialog
        open={state.dialogCard.isActive}
        onClose={handleClose}
        aria-labelledby='alert-dialog-title'
        aria-describedby='alert-dialog-description'
      >
        <CountryCard
          Country={state.dialogCard.data.Country}
          CountryCode={state.dialogCard.data.CountryCode}
          NewConfirmed={state.dialogCard.data.NewConfirmed}
          TotalConfirmed={state.dialogCard.data.TotalConfirmed}
          NewDeaths={state.dialogCard.data.NewDeaths}
          TotalDeaths={state.dialogCard.data.TotalDeaths}
          NewRecovered={state.dialogCard.data.NewRecovered}
          TotalRecovered={state.dialogCard.data.TotalRecovered}
          Date={state.dialogCard.data.Date}
        />
        <DialogActions>
          <Button onClick={handleClose} color='primary'>
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
