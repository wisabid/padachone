import React, {useEffect} from 'react';
import { SnackbarProvider, useSnackbar } from 'notistack';
import InfoIcon from '@material-ui/icons/Info';

function MyApp({message}) {
  const { enqueueSnackbar } = useSnackbar();
  

  const handleClick = (variant) => {
    enqueueSnackbar(message, { variant } );
  };
  

  useEffect(() => {
    handleClick('info');
  }, [])

  return (
    <span>
      <InfoIcon fontSize="small" onClick={() => handleClick('info')} style={{top: '0.125em',position: 'relative'}}/>
    </span>
  );
}

export default function IntegrationNotistack({message}) {
  return (
    <SnackbarProvider maxSnack={3}>
      <MyApp message={message}/>
    </SnackbarProvider>
  );
}