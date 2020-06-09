import React from 'react';
import { DataContext } from './Store/StoreContext';
import { Box, CircularProgress } from '@material-ui/core';
const Home = React.lazy(() => import('./Screens/Home'));

const App = () => {
  const [state] = React.useContext(DataContext);
  return (
    <div>
      <React.Suspense
        fallback={
          <Box
            display='flex'
            flexDirection='column'
            alignItems='center'
            height='100vh'
            justifyContent='center'
          >
            <CircularProgress />
            <h1>Covid-19 Tracker</h1>
          </Box>
        }
      >
        {state.error ? (
          <Box
            display='flex'
            flexDirection='column'
            alignItems='center'
            height='100vh'
            justifyContent='center'
          >
            <CircularProgress />
            <h1>{state.error.message}</h1>
          </Box>
        ) : (
          <Home />
        )}
      </React.Suspense>
    </div>
  );
};

export default App;
