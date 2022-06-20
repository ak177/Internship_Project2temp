import React from 'react';
import "./Logout.css"
import { GoogleLogin, GoogleLogout } from 'react-google-login';
const clientId = "122636136649-a0djmu12vanl0mh0q28f1q1d3dj380ir.apps.googleusercontent.com";


function Logout(props) {
      const onSignoutSuccess = () => {
    alert("You have been logged out successfully");
    console.clear();
        props.handlelogout(false);
        props.handlelogin(true);




    // setShowloginButton(true);
    // setShowlogoutButton(false);
};
    return (
        <div className='lgt-btn'>
           {/* {console.log(props.login)}
  {console.log(props.logout)} */}
            { props.logout ?
            // <App handlelogin={showloginButton} handlelogout={showlogoutButton}/>:null
                <GoogleLogout
                    clientId={clientId}
                    buttonText="Sign Out"
                    onLogoutSuccess={onSignoutSuccess}
                >
                </GoogleLogout> : null
                // <App/>:null

            }

        </div>
    )
}

export default Logout

// login={showloginButton} logout
