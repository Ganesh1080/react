import React,{Component} from "react";

class UserInput extends Component{
    constructor(){
        super();
        this.state={username:"",name:""}
    };
    handleChange=(e)=>{
        this.setState({username:e.target.value})
    }
    handleClick =()=>{
        this.setState({name:this.state.name + this.state.username +" ",username:""})
    }
    render(){
        return(
            <>
            <div className="input-container">
                <input type="text" placeholder="enter your name" required value={this.state.username} onChange={this.handleChange} />
                <button onClick={this.handleClick}>Add</button>
                <h2>Hello, {this.state.name}</h2>

            </div>
            </>
        )
    }
}
export default UserInput;