import React,{Component} from 'react'

class Login extends Component{
    constructor(){
        super();
        this.state={isLoggedIn:false}
    }
    toggleLogin=()=>{
        this.setState((e)=>({
            isLoggedIn:!e.isLoggedIn
        })
    )
    }

    render(){
        return(
            <>
            <br />
            <br />
            <h1>Login and Log out</h1>
            <button onClick={this.toggleLogin}>
                {this.state.isLoggedIn? 'Logout':'Login'}
            </button>

            <p style={{color:this.state.isLoggedIn?'red':'gray'}}>{this.state.isLoggedIn?'You are logged in':'Please log in '}</p>
            </>
        )
    }
}
export default Login
