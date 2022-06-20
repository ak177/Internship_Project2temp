import React, { useState } from 'react';
import "./login.css"
import { GoogleLogin, GoogleLogout } from 'react-google-login';
import Apper from './Apper'

const clientId = "122636136649-a0djmu12vanl0mh0q28f1q1d3dj380ir.apps.googleusercontent.com";

function Login() {


    const [showloginButton, setShowloginButton] = useState(true);
    const [showlogoutButton, setShowlogoutButton] = useState(false);
    const onLoginSuccess = (res) => {
        console.log('Login Success:', res.profileObj);
        setShowloginButton(false);
        setShowlogoutButton(true);
    };

    const onLoginFailure = (res) => {
        console.log('Login Failed:', res);
    };

    const onSignoutSuccess = () => {
        alert("You have been logged out successfully");
        console.clear();
        setShowloginButton(true);
        setShowlogoutButton(false);
    };

     const handleLogn=(val)=>{
         setShowloginButton(val);
         setShowlogoutButton(!val);

     }
     const handleLogt=(val)=>{
        console.log(val);
     }

    return (
        <div>
            <div className={showloginButton&&`piche-vala`} >
            { showloginButton ?
                
                <GoogleLogin
                className='custom'
                    clientId={clientId}
                    buttonText="Sign In"
                    onSuccess={onLoginSuccess}
                    onFailure={onLoginFailure}
                    cookiePolicy={'single_host_origin'}
                    isSignedIn={true}
                    theme="light"
                   

                /> : null}
               
               </div>
            { showlogoutButton ?
            <Apper handlelogin={showloginButton} handlelogout={showlogoutButton} login={handleLogn} logout={handleLogt}/>:null
                // <GoogleLogout
                //     clientId={clientId}
                //     buttonText="Sign Out"
                //     onLogoutSuccess={onSignoutSuccess}
                // >
                // </GoogleLogout> : null
                // // <App/>:null

            }
             
        </div>
    );
}
export default Login;