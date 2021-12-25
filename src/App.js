import Header from './Header';
import './App.css';
import React, { Component } from 'react'

export class App extends Component {
  // Javascript Code Here 
  constructor(props) {
    super(props);
    this.stocks = [];
    this.state = {ssymbol: "", scategory: "", sshares: "", splatform: ""};
  }
  handleSubmit(event) {
    let stockObject = {
      id: 1 + Math.random(), 
      symbol: this.state.ssymbol, 
      category: this.state.scategory, 
      shares: this.state.sshares, 
      platform: this.state.splatform
    };
    this.stocks.push(stockObject);
    console.log(this.stocks);
    event.preventDefault();
  }
  handleChange(event) {
    let eventId = event.target.id;
    switch (eventId) {
      case "stock-symbol":
        this.setState({ssymbol: event.target.value});
        console.log("Updated stock-symbol:", event.target.value);
        break;
      case "stock-category":
        this.setState({scategory: event.target.value});
        console.log("Updated stock-category:", event.target.value);
        break;
      case "stock-shares":
        this.setState({sshares: event.target.value});
        console.log("Updated stock-shares:", event.target.value);
        break;
      case "stock-platform":
        this.setState({splatform: event.target.value});
        console.log("Updated stock-shares:", event.target.value);
        break;
      default: 
        console.log("No value added.");
    }
    event.preventDefault();
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Header name="Maya"/>
        </header>
        <div className="App-body">
          <form className="input_container" onSubmit={this.handleSubmit.bind(this)}>
            <div className="inputs">
              <input 
                type="text" 
                id="stock-symbol" 
                placeholder="stock symbol" 
                value={this.state.ssymbol} 
                onChange={this.handleChange.bind(this)}
              ></input>
              <input 
                type="text" 
                id="stock-category" 
                placeholder="stock category" 
                value={this.state.scategory} 
                onChange={this.handleChange.bind(this)}
              ></input>
              <input 
                type="text" 
                id="stock-shares" 
                placeholder="stock shares" 
                value={this.state.sshares} 
                onChange={this.handleChange.bind(this)}
              ></input>
              <input 
                type="text" 
                id="stock-platform" 
                placeholder="stock platform" 
                value={this.state.splatform} 
                onChange={this.handleChange.bind(this)}
              ></input>
              <button id="add-btn">Add</button>
            </div>
          </form>
          <ul id="stock-list">
            {this.stocks.map(item => {
              return(
                <li id={item.id}>
                  <p>{item.symbol},
                     {item.category},
                     {item.shares},
                     {item.platform}
                  </p>
                  <button>Edit</button>
                  <button>Delete</button>
                </li>
              )
            })}
          </ul>
        </div>
      </div>
    );
  }
}

export default App;