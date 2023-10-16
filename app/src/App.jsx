import React, { useEffect } from 'react';
// import { Alert } from 'react-native';
import Provider from './context/Provider'
import Routes from './Routes'

// import {request, PERMISSIONS} from 'react-native-permissions'

function App() {
  // useEffect(() => {
  //   async function AllowInternet () {
  //     const status = await request(PERMISSIONS.ANDROID.INTERNET);
  //     Alert.alert(status)
  //   }
  //   AllowInternet()
  // })

  return (
    <Provider>
      <Routes />
    </Provider>
  );
}

export default App;