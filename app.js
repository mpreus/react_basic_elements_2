class App extends React.Component {
  state = {
    value: ""
  }

  handleInputChange = (e) => {
    // console.log(e.target.value); shows entered text 
    this.setState({
      value: e.target.value
    })
  }

  handleResetClick = () => {
    this.setState({
      value: ""
    })
  }

  render() {
    return (
      <React.Fragment>
        <h1>Input value displayed beneath</h1>
        <p>As long as you're typing in the input, the text appears beneath as a header (uppercase).</p>
        <input value={this.state.value} placeholder="type here..." onChange={this.handleInputChange} type="text" />
        <button onClick={this.handleResetClick} style={{backgroundColor:"navy", color:"white"}}>Reset</button>
        <h2 className="title">{this.state.value.toUpperCase()}</h2>
      </React.Fragment>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'))