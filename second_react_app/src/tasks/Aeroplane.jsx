import React,{Component} from "react";
export class Aeroplane extends Component{
    constructor(){
        super();
        this.state={aeroplane:false}
    }
    start(){
        this.setState({aeroplane:true})
        console.log("start")
    }
    land(){
        this.setState({aeroplane:false})
    }
    render(){
            if(this.state.aeroplane){
                return(
                    <>
                    <p>Aeroplane is Flying ✈️</p>
                     <button onClick={()=>this.land()}>Landed </button>
                    </>
                )
            }else{
                return(
                    <>
                    <p>Aeroplane is Landed 🛬</p>
                    <button onClick={()=>this.start()}>Start </button>
                    </>
                )
            }
    }
}

