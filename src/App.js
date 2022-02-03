import React, { Component } from 'react';
import "./App.css"
class App extends Component {
  state = {
    num:0
    } 
    increment = () =>{
      this.setState({num : this.state.num+1});
    }
    decrement = () =>{
      this.setState({num : this.state.num-1});
    }
    render() { 
    return (
      <div className="App">
        <div className='showcase'>
          <h1>{this.state.num}</h1>
          <button onClick={this.increment}>ADD</button>
          <button onClick={this.decrement}>SUB</button>
        </div>

      </div>
    );
  }
}
 
export default App;
