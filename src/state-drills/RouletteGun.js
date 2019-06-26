import React from 'react';

export default class RouletteGun extends React.Component{
  static defaultProps={
    bulletInChamber:1,
    bulletsInChamber:8,
  }
  state={
    chamber:null,
    spinningTheChamber:false,
  }

  handleButtonClick= e=>{
    this.setState({
      spinningTheChamber:true,
    });
    this.rolling=setTimeout(()=>{
      this.setState({chamber:Math.ceil(Math.random()*this.props.bulletsInChamber)})
    }, 2000);
  }

  handleOutput= ()=>{
    return (this.state.spinningTheChamber?
      ((!this.state.chamber)? 'spinning the chamber and pulling the trigger! ...': (this.state.chamber===this.props.bulletInChamber)? 'BANG!!!!' : `you're safe!` ): '');
  }

  render(){
    console.log(this.state.chamber);
    console.log(this.props.bulletInChamber);

    return(
      <div> 
        <p>
          {
            this.handleOutput()
          }
        </p>
        <button className='' onClick={this.handleButtonClick}>Pull the trigger!</button>
      </div>
    )
  };

  componentWillUnmount(){
    clearTimeout(this.rolling);
  }

}