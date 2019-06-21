import React, { Component } from "react";
import CardList from "../components/CardList";
import SearchBox from "../components/SearchBox";
import "./App.css";
import Scroll from "../components/Scroll";

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
        const { robots, searchfield } = this.state
        const filteredArray = robots.filter((robot)=>{
            return robot.name.toLowerCase().includes(searchfield.toLowerCase())
        })
        return !robots.length ? 
                (
                    <div className="tc">
                        <h1 className="f1">ROBOFRIEND</h1>
                        <SearchBox change={this.onSearchChange}/>
                        <h1>Loading...</h1>
                    </div>
                ):
        
       
            (
                <div className="tc">
                    <h1 className="f1">ROBOFRIEND</h1>
                    <SearchBox change={this.onSearchChange}/>
                    <Scroll>
                        <CardList robots={ filteredArray }/>
                    </Scroll>
                </div>
            )
    
    }
}

export default App