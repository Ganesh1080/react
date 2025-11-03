import React,{Component} from 'react'

export  class Online extends Component{
    constructor(){
        super();
        this.state={isOnline:false}
    }
    toggle(){
        this.setState((e)=>({
            isOnline:!e.isOnline
        }))
    }
    render(){
        return(
            <>
            <button onClick={()=>this.toggle()}>{this.state.isOnline?'Offline':'Online'}</button>
            <h2 className={this.state.isOnline?'online':'offline'}>
                {this.state.isOnline?'User online':'User offline'}
            </h2>
            </>
        )
    }
}
