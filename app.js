class App extends React.Component {
  state = {                    /* initial state: empty string */
    value: "" 
  }

  handleInputChange = (e) => {
    // console.log(e.target.value); shows entered text 
    this.setState({           /* state changes while user enters new letters */
      value: e.target.value 
    })
  }

  handleResetClick = () => {
    this.setState({           /* state changes when user resets the input */
      value: ""
    })
  }

  render() {
    return (
      <React.Fragment>
        <h1>Input value displayed beneath</h1>
        <p>As long as you're typing in the input, the text appears beneath as a header (uppercase).</p>
        {/* input for typing text */}
        <input value={this.state.value} placeholder="type here..." onChange={this.handleInputChange} type="text" />
        {/* reset button with basic styles - clears input and entered text */}
        <button onClick={this.handleResetClick} style={{backgroundColor:"navy", color:"white"}}>Reset</button>
        {/* slot for text from input */}
        <h2 className="title">{this.state.value.toUpperCase()}</h2>
      </React.Fragment>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'))