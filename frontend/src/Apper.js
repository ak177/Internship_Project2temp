import './Apper.css';
import { GoogleLogin, GoogleLogout } from 'react-google-login';

import { useState } from 'react';
import Logout from './Logout';
import HomeScreen from './screens/HomeScreen';

function Apper(props) {

  // console.log(props.handlelogin)
  // console.log(props.handlelogout)
  

  const [showlogoutButton, setShowlogoutButton] = useState(props.handlelogout);
  const [showloginButton, setShowloginButton] = useState(props.handlelogin);
//   const onSignoutSuccess = () => {
//     alert("You have been logged out successfully");
//     console.clear();
//     setShowloginButton(true);
//     setShowlogoutButton(false);
// };

const setlogin=(val)=>{
 props.login(val)

}
const setlogout=(val)=>{
  props.logout(val)

}
  return (
    <div className="App">
      <HomeScreen />
      <Logout login={showloginButton} logout={showlogoutButton} handlelogout={setlogout} handlelogin={setlogin}/>
      {/* <Logout /> */}



      {/* <GoogleLogout
                    clientId={clientId}
                    buttonText="Sign Out"
                    onLogoutSuccess={onSignoutSuccess}
                >
                  </GoogleLogout> */}
    </div>
  );
}

export default Apper;
