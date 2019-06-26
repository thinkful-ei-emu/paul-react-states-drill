import React from 'react';

export default class HelloWorld extends React.Component{
  state={
    who:'world',
  }
  handleButtonClick= e=>{
    e.preventDefault();
    this.setState({
      who:e.target.innerHTML[0]==='R'? e.target.innerHTML : (e.target.innerHTML.toLowerCase())
    });
  }
  render(){
    return (
      <div>
        <p>Hello, {this.state.who}!</p>
        <button onClick={this.handleButtonClick}>World</button>
        <button onClick={this.handleButtonClick}>Friend</button>
        <button onClick={this.handleButtonClick}>React</button>
      </div>

    );
  }
}