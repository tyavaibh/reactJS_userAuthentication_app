import {Component} from "react";
import "./Profile.css";
import DP from "./PassportSize.jpg"

class Profile extends Component{

    state={name:"Vaibhav Tyagi",
            email:this.props.email}

    render(){

        return (

            <>
                <div className={"header"}>
                    <h1>User Authentication Application</h1>
                    <h3>Profile Page!</h3>
                 </div>
            
                <div className={"profileDiv"}>
                    <h3>You're logged in as "{this.props.userId}"</h3>
                    <br /><br />
                    <img src={DP} alt="Display Pic" className={"img1"} />
                    <h3>Name: {this.state.name}</h3>
                    <br /><br />
                    <h3>Email address: {this.state.email}</h3>
                    <br /><br />
                    <button className={"btn_logout"} onClick={this.props.func}>Logout</button>
                </div>
            </>
        )
    }
}

export default Profile;