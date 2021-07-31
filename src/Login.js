import React from "react";

const Login = (props) =>{
    const {email,
           password,
           emailError,
           handleLogin,
           handleSignUp,
           passwordError,
           setPassword,
           hasAccount,
           setHasAccount
    } = props;
    return(
        <section className="login">
       <div className="loginContainer">
           <label>Username</label>
           <input type="text" autoFocus required value="email" onChange={(e)=>setEmail(e.target.value)}/>
           <p className="errorMsg">{emailError}</p>
           <label>Password</label>
           <input type="password" autoFocus required value="password" onChange={(e) =>setPassword(e.target.value)}/>
           <p className="errorMsg">{passwordError}</p>

       </div>
        </section>
    )
}
export default Login;