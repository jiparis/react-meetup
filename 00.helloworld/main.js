/**
 * Basic React single-component application
 */
class MyApp extends React.Component {
  /**
   * render() is where we tell react how to draw this component
   * React will optimize this so that only the diffs are actually
   * rendered in the browser.
   * @return a React.DOM.* object tree
   */
  render(){
    return (
      <h1>Hello from React!</h1>
    )
  }
}

// ReactDOM is a helper module for interacting with the browser DOM
ReactDOM.render(<MyApp />, document.getElementById('app'));
