import React,{useState, useEffect}from "react";
import "./App.css";
import fire from"./fire";
import Login from"./Login";
import Hero from"./Hero";
const App = () => {
     const [user, setUser] =useState();
     const [email, setEmail] =useState();
     const [password, setPassword] =useState();
     const [emailError, setEmailError] =useState();
     const [passwordError, setPasswordError] =useState();
     const [hasAccount, setHasAccount] =useState(false);

     const clearInput = () =>{
         setEmail();
         setPassword();
     }
     const clearErrors = () =>{
         setEmailError();
         setPasswordError();
     }


     const  handleLogin = () =>{
         clearErrors();
         fire
             .auth()
             .signInWithEmailAndPassword(email,password)
             .catch((err)=> {
                switch (err.code) {
                    case"auth/invalid-email":
                    case"auth/user-disable":
                    case"auth/user-not-found":
                      setEmailError(err.message)
                      break;
                    case"auth/wrong.password":
                      setPasswordError(err.message)
                      break;
                }
             });
     };
     const  handleSignUp = () =>{
         clearErrors();
         fire
             .auth()
             .createUserWithEmailAndPassword(email,password)
             .catch((err)=> {
                 switch (err.code) {
                     case"auth/email-already-in-use":
                     case"auth/invalid-email":
                         setEmailError(err.message);
                         break;
                     case"auth/weak.password":
                         setPasswordError(err.message);
                         break;
                 }
             });
     }
     const  handleLogout = () =>{
         fire.auth.LogOut();
     };
     const authListener = () =>{
         fire.auth().onAuthStateChanged(user =>{
           if(user){
               clearInput();
               setUser(user);
           }else{
               setUser("");
           }
         })
     }

    useEffect(()=>{
authListener();
},[]);



    return(
        <div className="App">
            {user ?(
                <Hero handleLogout={handleLogout}/>
            ):(
                <Login
                    email={email}
                    password={password}
                    emailError={emailError}
                    handleLogin={handleLogin}
                    handleSignUp={handleSignUp}
                    passwordError={passwordError}
                    setPassword={setPassword}
                    setEmail={setEmail}
                    hasAccount={hasAccount}
                    setHasAccount={setHasAccount}
                />
            )}

        </div>
    );
 };
export default App