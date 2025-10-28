import React,{Component} from 'react'

class Counter extends Component{
    constructor(){
        super()
        this.state={count:0};
        this.increment=this.increment.bind(this)
        this.decrement=this.decrement.bind(this)
        this.reset=this.reset.bind(this)
    }

    increment(){
        this.setState((e)=>{
            if(e.count <10){
                return {count:e.count+1}
            }
            return e;
        });
    }

    decrement(){
        this.setState((e)=>{
            if(e.count>0){
                return {count:e.count-1}
            }
            return e;
        })
    }

    reset(){
        this.setState({count:0})
    }

    render(){
        return(
            <div style={styles.container}>
                <h1 style={styles.number}>{this.state.count}</h1>
                <div style={styles.btnContainer}>
                    <button style={styles.btn} onClick={this.decrement}>➖ Decrement</button>
                    <button style={styles.btn}  onClick={this.reset}>🔃 Reset</button>
                    <button style={styles.btn}  onClick={this.increment}>➕ Increment</button>
                </div>
            </div>
        )
    }
};


const styles = {
  container: {
    textAlign: "center",
    marginTop: "50px",
    fontFamily: "Arial, sans-serif",
  },
  number: {
    fontSize: "50px",
    color: "#0078d7",
  },
  btnContainer: {
    display: "flex",
    justifyContent: "center",
    gap: "10px",
    marginTop: "20px",
  },
  btn: {
    padding: "10px 20px",
    fontSize: "16px",
    borderRadius: "8px",
    border: "none",
    background: "#0078d7",
    color: "white",
    cursor: "pointer",
    transition: "0.3s",
  },
};

export default Counter;