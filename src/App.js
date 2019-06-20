import React, { Component } from "react";
import CardList from "./CardList";
import SearchBox from "./SearchBox";
import "./App.css";

class App extends Component {
    constructor(){
        super()
        this.state = {
            robots: [],
            searchfield: ""
        }
    }

    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response=>response.json())
        .then(user=>this.setState({robots: user}))

    }

    onSearchChange = (event)=>{
        return(
            this.setState({
                searchfield: event.target.value
            })
        )
    }

    render(){
        const filteredArray = this.state.robots.filter((robot)=>{
            return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase())
        })
        if(this.state.robots.length === 0){
                return(
                    <div className="tc">
                        <h1 className="f1">ROBOFRIEND</h1>
                        <SearchBox change={this.onSearchChange}/>
                        <h1>Loading...</h1>
                    </div>
                )
        }
        else{ 
            return(
                <div className="tc">
                    <h1 className="f1">ROBOFRIEND</h1>
                    <SearchBox change={this.onSearchChange}/>
                    <CardList robots={ filteredArray }/>
                </div>
        )
    }
    }
}

export default App