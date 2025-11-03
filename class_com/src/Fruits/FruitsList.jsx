import React,{Component} from "react";
class FruitsList extends Component{
    render(){
            const {fruits}=this.props
        return(
            <>
            <div className="fruits-con">
                <h1>Fruits List</h1>
                <ul>
                    {fruits.map((fruit,index)=>(
                        <li key={index}>{fruit}</li>
                    ))}
                </ul>
            </div>
            </>
        )
    }
}
export default FruitsList;