import React from 'react';
import CardList from './CardList';
import Header from './Header';
import './App.css';
import Scroll from './Scroll';

class App extends React.Component {
    constructor(){
        super();
        this.state={
            robots : [],
            searchfield : ''
        }
    }
    OnSearchChange = (event) =>{
        this.setState({searchfield : event.target.value});
    }
    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/users').then(response =>{
            return response.json();
        }).then(user =>{
            this.setState({robots : user});
        })
    }

    render(){
        const filterRobots = this.state.robots.filter(robots => {
            return robots.name.toLowerCase().includes(this.state.searchfield.toLowerCase())
        })
        if (this.state.robots===0) {
            return <h1>LOADING</h1>
        }
        else{
            return(
                <div className='tc'>
                    <h1 className='f1'>RoboFriends</h1>
                    <Header searchChange={this.OnSearchChange}/>
                    <Scroll>
                    <CardList robots={filterRobots} />
                    </Scroll>
                </div>
            )
        }
    }
}

export default App