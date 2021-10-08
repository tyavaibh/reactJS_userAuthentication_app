import {Component} from "react";
import "./Login.css";
import Profile from "./Profile.jsx";
import Signup from "./Signup.jsx";

class Login extends Component{

state={ userId:"*",
        password:"*",
        inp_userId:"",
        inp_password:"",
        bool:false,
        signUp:false,
        email:""
        }

handleChange=(e)=>{
    this.setState({[e.target.name]:e.target.value})
}

handleAuth=()=>{
    const{userId,password,inp_userId,inp_password}=this.state;
    if(userId===inp_userId && password===inp_password){
        this.setState({bool:!this.state.bool});
        

    }else{
        alert("Please enter correct credentials")
    }
    
}

handleLogout=()=>{
    this.setState({bool:!this.state.bool});
    this.setState({inp_userId:""});
    this.setState({inp_password:""});
}

handleSignUp=(e)=>{
    this.setState({signUp:!this.state.signUp})
   
}

    render(){

        if(!this.state.bool && this.state.signUp===false){
            return(
                <>
                    <div className={"header"}>
                        <h1>User Authentication Application</h1>
                        <h3>Login Page!</h3>
                    </div>

                    <div className={"mainDiv"}>

                        <label>User Id: </label>

                        <input className={"inp_user"} type="text" 
                        name="inp_userId" 
                        onChange={this.handleChange}
                        value={this.state.inp_userId}
                        required />

                        <br /><br />
    
                        <label>Password: </label>

                        <input className={"inp_pass"} type="password"
                        name="inp_password" 
                        onChange={this.handleChange}
                        value={this.state.inp_password}
                        required />

                        <br /><br />
    
                        <button 
                        onClick={this.handleAuth}
                        className={"btn_sign_in"}>Sign-in</button>
                        <br /><br /><br /><br />

                        <h3>Don't have an account?</h3>
                        <button className={"btn_signUp"} onClick={this.handleSignUp}>Sign Up!</button>
                    
                    </div>
            
                
                </>)

        }else if (this.state.signUp===true) {

            return (
            <>
            <div className={"header"}>
                <h1>User Authentication Application</h1>
                <h3>Sign_Up Page!</h3>
            </div>

            <Signup handleSignup={this.handleSignUp} handleChange={this.handleChange} />
            </>
            )

        }else{
            return (<Profile userId={this.state.userId} func={this.handleLogout} email={this.state.email}/>)
        }
                    
        
    }
}

export default Login;