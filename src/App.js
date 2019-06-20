import React, { Component } from "react";
import CardList from "./CardList";
import SearchBox from "./SearchBox";
import { robots } from "./robots";

class App extends Component {
    constructor(){
        super()
        this.state = {
            robots: robots,
            searchfield: ""
        }
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
        return(
            <div className="tc">
                <h1>ROBOFRIEND</h1>
                <SearchBox change={this.onSearchChange}/>
                <CardList robots={ filteredArray }/>
            </div>
        )
    }
}

export default App