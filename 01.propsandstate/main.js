/**
 * Props and state
 */
class MyApp extends React.Component {
  constructor(props){
    super(props);

    // we can use plain javascript to maintain internal state
    // (not related to UI)
    this.count = props.initial || 0;

    // But we need to use the React's state to trigger UI updates
    this.state = ({ count: props.initial || 0 });
  }

  render(){
    return (
      <h1>Current count: {this.state.count}</h1>
    );
  }
}

// ReactDOM is a helper module for interacting with the browser DOM
ReactDOM.render(<MyApp initial="5"/>, document.getElementById('app'));
