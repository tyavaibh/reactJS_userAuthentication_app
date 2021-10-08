import {Component} from "react";
import "./SignUp.css"

class Signup extends Component{


    render(){

        return(

            <>
                <div className={"mainDiv2"}>
                    <label>Email:</label>
                    <input 
                    className={"inp_email"}
                    type="text" 
                    name="email" 
                    value={this.props.email} 
                    onChange={this.props.handleChange} />

                    <br /><br />

                    <label>UserId:</label>
                    <input type="text" 
                    className={"inp_user2"}
                    name="userId" 
                    value={this.props.userId} 
                    onChange={this.props.handleChange} />

                    <br /><br />

                    <label>Password:</label>
                    <input type="password"
                    className={"inp_pass2"}
                    name="password" 
                    value={this.props.password}
                    onChange={this.props.handleChange} />
                    
                    <br /><br />

                    <button onClick={this.props.handleSignup}
                    className={"btn_sign_in2"}>Submit</button>

                </div>
            </>
        )

    }
}

export default Signup;