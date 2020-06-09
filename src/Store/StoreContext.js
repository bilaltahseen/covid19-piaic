import React, { createContext, useReducer } from 'react';
import Axios from 'axios';

export const DataContext = createContext();

const initialState = {
  countriesData: [],
  globalData: [],
  pakistanData: [],
  filteredData: null,
  error: null,
  dialogCard: { isActive: false, data: {} },
};
const reducer = (state, action) => {
  switch (action.type) {
    case 'GET_COUNTRIES':
      return {
        ...state,
        countriesData: action.payload.Countries,
        globalData: action.payload.Global,
      };
    case 'PAKISTAN_DATA':
      return {
        ...state,
        pakistanData: action.payload,
      };
    case 'ERROR_MSG':
      return { ...state, error: action.payload };

    case 'DIALOG_SEARCH':
      const filteredData = state.countriesData.filter(
        (elem) => elem.Country === action.payload.countryName
      );
      console.log('Dialog Search', filteredData);
      return {
        ...state,
        dialogCard: {
          data: filteredData[0],
          isActive: action.payload.isActive,
        },
      };
    default:
      return;
  }
};

const DataProvider = (props) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const multipleRequests = () => {
    const request1 = Axios.get('https://api.covid19api.com/summary');
    const request2 = Axios.get(
      'https://api.covid19api.com/dayone/country/pakistan'
    );
    Axios.all([request1, request2])
      .then(
        Axios.spread((...responses) => {
          dispatch({ type: 'GET_COUNTRIES', payload: responses[0].data });
          dispatch({ type: 'PAKISTAN_DATA', payload: responses[1].data });
        })
      )
      .catch((error) => dispatch({ type: 'ERROR_MSG', payload: error }));
  };
  React.useEffect(multipleRequests, []);
  return (
    <DataContext.Provider value={[state, dispatch]}>
      {props.children}
    </DataContext.Provider>
  );
};

export default DataProvider;
