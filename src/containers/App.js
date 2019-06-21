import React, { Component } from "react";
import CardList from "../components/CardList";
import SearchBox from "../components/SearchBox";
import { connect } from "react-redux";
import "./App.css";
import Scroll from "../components/Scroll";
import { setSearchField,setRobots } from "../action"

const mapStateToProps = (state)=>{
    return {
        searchField: state.searchRobots.searchField,
        robots: state.requestRobots.robots,
        isPending: state.requestRobots.isPending,
        error: state.requestRobots.error
    }
}
const mapDispatchToProps = (dispatch)=>{
    return {
        onSearchChange: (event)=>dispatch(setSearchField(event.target.value)),
        onRobotRequest: ()=> dispatch(setRobots())
    }
}

class App extends Component {

    componentDidMount(){
        this.props.onRobotRequest();
    }

    render(){
        const { onSearchChange, searchField, robots, isPending } = this.props
        const filteredArray = robots.filter((robot)=>{
            return robot.name.toLowerCase().includes(searchField.toLowerCase())
        })
        return isPending ? 
                (
                    <div className="tc">
                        <h1 className="f1">ROBOFRIEND</h1>
                        <SearchBox change={onSearchChange}/>
                        <h1>Loading...</h1>
                    </div>
                ):
        
       
            (
                <div className="tc">
                    <h1 className="f1">ROBOFRIEND</h1>
                    <SearchBox change={onSearchChange}/>
                    <Scroll>
                        <CardList robots={ filteredArray }/>
                    </Scroll>
                </div>
            )
    
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)