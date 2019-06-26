import React from 'react';

export default class Bomb extends React.Component{
  state={
    count:0,

  }
  componentDidMount(){
    this.interval=setInterval(()=>{
      this.setState({count:this.state.count+1});
    }, 1000);
  }
  
  render(){
    console.log(this.state.count);
    return(
      <div>
        <p>{this.state.count>=8 ? 'Boom': (this.state.count%2===0? 'tick':'tock') }</p>
      </div>
    )
  }

  componentDidUpdate(){
    if(this.state.count>=8){
      clearInterval(this.interval);
    }
  }
  componentWillUnmount(){
    clearInterval(this.interval);
  }


}