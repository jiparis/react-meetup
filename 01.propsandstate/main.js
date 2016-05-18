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

MyApp.defaultProps = {
  initial: 0
};

/**
 * propTypes are used in development mode.
 * Props are validated against these rules, helping us in the development
 * process. Also good for documenting the component public interface.
 */
MyApp.propTypes = {
  initial: React.PropTypes.number,
};

// ReactDOM is a helper module for interacting with the browser DOM
ReactDOM.render(<MyApp initial="5"/>, document.getElementById('app'));
