import React,{Component} from  'react'

class Random extends Component{
    constructor(){
        super();
        this.state={number:0,user:""}
    };
    generate =()=>{
        const num=Math.floor(Math.random()*500)
        this.setState({number:num})
    }
    reset(){
        this.setState({number:0})
    }
    inputUser(e){
        this.setState({user:e.target.value})
        console.log(e)
    }
    render(){
        return(
            <>
            <div className="container">
                <h1>Random Number Generator {this.state.number} </h1>
                <button onClick={this.generate}>Generate</button> &nbsp;
                <button onClick={()=>{this.reset()}}>Reset</button>

                <br />

                <input type="text"  placeholder='Enter name' required onChange={(e)=>this.inputUser(e)}/>
                <h1>My name is : {this.state.user}</h1>
                <button onClick={this.get}>ADD</button>
            </div>
            </>
        )
    }
}

export default Random;


