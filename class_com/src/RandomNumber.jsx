import React, { Component } from 'react';

class RandomNumber extends Component {
  constructor() {
    super();
    this.state = { number: 0 };
    this.generate = this.generate.bind(this);
    this.reset = this.reset.bind(this);
  }

  generate() {
    const random = Math.floor(Math.random() * 100);
    this.setState({ number: random });
  }

  reset() {
    this.setState({ number: 0 });
  }

  render() {
    return (
      <div style={styles.container}>
        <h2>Random Number Generator</h2>
        <h1 style={styles.display}>{this.state.number}</h1>
        <div>
          <button style={styles.btn} onClick={this.generate}>
            Generate
          </button>
          <button style={styles.btn} onClick={this.reset}>
            🔃 Reset
          </button>
        </div>
      </div>
    );
  }
}

const styles = {
  container: {
    textAlign: 'center',
    marginTop: '50px',
    fontFamily: 'Arial, sans-serif',
  },
  display: {
    fontSize: '48px',
    margin: '20px 0',
    color: '#0078d7',
  },
  btn: {
    padding: '10px 20px',
    fontSize: '16px',
    borderRadius: '8px',
    margin: '10px',
    border: 'none',
    background: '#28a745',
    color: 'white',
    cursor: 'pointer',
    transition: '0.3s',
  },
};

export default RandomNumber;
