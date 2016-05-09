import React from 'react';

export default class Main extends React.Component{
  constructor(props){
    super(props);
    this.state = { count: props.initial };
  }

  componentDidMount(){
    this.handle = setInterval(() => {
      this.setState({ count: this.state.count + this.props.step});
      console.log('Updating state');
    }, 1000);
  }

  componentWillUnmount(){
    clearInterval(this.handle);
  }

  resetCount(){
    this.setState( { count: 0 });
  }

  render(){
    return (
      <div>
        <h1>Current count: {this.state.count}</h1>
        <button onClick={() => this.resetCount() }>Reset</button>
      </div>
    );
  }
}

Main.defaultProps = {
  step: 1
};

Main.propTypes = {
  initial: React.PropTypes.number.isRequired,
  step: React.PropTypes.number
};
