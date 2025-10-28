import React,{Component} from 'react'

class Message extends Component{
    constructor(){
        super();
        this.state={
            message:"Hi what you doing",
        }
        this.question=this.question.bind(this)
        this.answer=this.answer.bind(this)
    }
    question(){
        this.setState({message:"Hi what you doing"});
    }
    answer(){
        this.setState({message:"I'm writing some react code"})
    }
     render() {
    return (
      <div style={styles.container}>
        <h2 style={styles.title}>Message Toggle App</h2>
        <h1 style={styles.text}>{this.state.message}</h1>
        <div style={styles.btnContainer}>
          <button style={styles.btnQuestion} onClick={this.question}>
            Question
          </button>
          <button style={styles.btnAnswer} onClick={this.answer}>
            Answer
          </button>
        </div>
      </div>
    );
  }
}
const styles = {
  container: {
    textAlign: 'center',
    marginTop: '60px',
    fontFamily: 'Arial, sans-serif',
  },
  title: {
    color: '#0078d7',
    marginBottom: '20px',
  },
  text: {
    fontSize: '28px',
    marginBottom: '30px',
  },
  btnContainer: {
    display: 'flex',
    justifyContent: 'center',
    gap: '15px',
  },
  btnQuestion: {
    padding: '10px 20px',
    fontSize: '16px',
    borderRadius: '8px',
    border: 'none',
    background: '#ff9800',
    color: 'white',
    cursor: 'pointer',
    transition: '0.3s',
  },
  btnAnswer: {
    padding: '10px 20px',
    fontSize: '16px',
    borderRadius: '8px',
    border: 'none',
    background: '#28a745',
    color: 'white',
    cursor: 'pointer',
    transition: '0.3s',
  },
};
export default Message