/**
 * Props and state
 */
class MyApp extends React.Component {

  constructor(props){
    super(props);
    this.state = ({ count: props.initial });
  }

  /**
   * Called just after the component is rendered (HTML DOM is available)
   * refs are available at this step
   */
  componentDidMount(){
    this.handle = setInterval(() => {
      this.setState({ count: this.state.count + this.props.step});
      console.log('Updating state');
    }, 1000);
  }

  /**
   * Called just before removing from the DOM. Used for cleaning things up.
   */
  componentWillUnmount(){
    clearInterval(this.handle);
  }

  // Other usefull lifecycle events

  /**
   * Just before initial render
   */
  componentWillMount(){}

  /**
   * props have changed. Last chance for calling setState.
   */
  componentWillReceiveProps(nextProps){}

  /**
   * Override default behavior.
   */
  shouldComponentUpdate(nextProps, nextState){}

  /**
   * Called just before rendering after an update.
   */
  componentWillUpdate(nextProps, nextState){}

  /**
   * Called just after rendering in an update.
   */
  componentDidUpdate(prevProps, prevState){}

  render(){
    return (
      <h1>Current count: {this.state.count}</h1>
    );
  }
}

// Used to specify default properties being passed to our component
MyApp.defaultProps = {
  initial: 0,
  step: 3
};

/**
 * propTypes are used in development mode.
 * Props are validated against these rules, helping us in the development
 * process. Also good for documenting the component public interface.
 */
MyApp.propTypes = {
  initial: React.PropTypes.number.isRequired,
  step: React.PropTypes.number
};

ReactDOM.render(
  <MyApp />
  , document.getElementById('app'));
