import Header from './Header';
import './App.css';
import React, { Component } from 'react'

export class App extends Component {
  // App Constructor
  constructor(props) {
    super(props);
    this.state = {stocks: [], ssymbol: "", scategory: "", sshares: "", splatform: "", currId: ""};
  }
  // handleEdit: switch "Add" button to "Save" + track the ID of stock to edit 
  handleEdit(event) {
    document.getElementById("add-btn").innerHTML = "Save";
    this.setState({currId: event.target.id});
    event.preventDefault();
  }
  // handleDelete: removes stock object from array tracked in state
  handleDelete(event){
    event.preventDefault();
    let filteredArray = this.state.stocks.filter(stock => stock.id != event.target.id);
    this.setState({stocks: filteredArray});
  }
  // handleReset: resets the input fields to empty 
  handleReset() {
    this.setState({ssymbol: "", scategory: "", sshares: "", splatform: ""});
  }
  // handleSubmit: updates the tracked stocks array 
  handleSubmit(event) {
    let stockObject = {
      id: 1 + Math.random(), 
      symbol: this.state.ssymbol, 
      category: this.state.scategory, 
      shares: this.state.sshares, 
      platform: this.state.splatform
    };
    if (document.getElementById("add-btn").innerHTML == "Add") {
      this.setState({stocks: [...this.state.stocks, stockObject]});
    } 
    if (document.getElementById("add-btn").innerHTML == "Save") {
      let newObject = {
        id: this.state.currId, 
        symbol: this.state.ssymbol, 
        category: this.state.scategory, 
        shares: this.state.sshares, 
        platform: this.state.splatform
      };
      let filteredArray = this.state.stocks.filter(stock => stock.id != this.state.currId);
      this.setState({stocks: [...filteredArray, newObject]});
      this.setState({currId: ""});
      document.getElementById("add-btn").innerHTML = "Add";
    }
    document.getElementById("add-btn").addEventListener("click", this.handleReset());
    event.preventDefault();
  }
  // handleChange: keeps track of the input values specifed by user 
  handleChange(event) {
    let eventId = event.target.id;
    switch (eventId) {
      case "stock-symbol":
        this.setState({ssymbol: event.target.value});
        break;
      case "stock-category":
        this.setState({scategory: event.target.value});
        break;
      case "stock-shares":
        this.setState({sshares: event.target.value});
        break;
      case "stock-platform":
        this.setState({splatform: event.target.value});
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
          {/* Renders an unordered list of the stocks array */}
          <ul id="stock-list">
            {this.state.stocks.map(item => {
              return(
                <li key={item.id}>
                  <p className="symbol" >{item.symbol}</p>
                  <p className="category">{item.category}</p>
                  <p className="shares">{item.shares}</p>
                  <p className="platform">{item.platform}</p>
                  <button 
                    id={item.id} 
                    className="edit-btn" 
                    onClick={this.handleEdit.bind(this)}
                  >Edit</button>
                  <button 
                    id={item.id} 
                    className="delete-btn" 
                    onClick={this.handleDelete.bind(this)}
                  >Delete</button>
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