import React, { Component } from 'react';
import Counters from './Components/Counters';
import NavBar from './Components/NavBar';

class App extends Component {
    state = { 
        counters:[
            {id:1, value: 7},
            {id:2, value: 2},
            {id:3, value: 3}
        ]
     }
    
    productCount = () => {
       // console.log(this.state.counters.length);
        return this.state.counters.length;
    }
    incEvent = (counterId) => {
        const counters = this.state.counters.map(c => {
            if (c.id === counterId)  return {...c,value: c.value + 1 }  
            else return c });
        this.setState({counters});
    }

    decEvent = (counterId) => {
        const counters = this.state.counters.map(c => {
            if (c.id === counterId)  return {...c,value: c.value - 1 }  
            else return c });
        this.setState({counters});
    }

    deleteven = (counterId) =>{
      //  console.log("Hai");
        const counters = this.state.counters.filter(c => c.id!== counterId );
        this.setState({counters});
    }; 

    resetEvent = counterId =>{
        const counters = this.state.counters.map( c => { return{...c, value : 0}
    });
        this.setState({counters});
    }

    render() { 
        return (
            <React.StrictMode>
            <NavBar 
                counter = { this.state.counters}
                onCount ={this.productCount}/>
            <Counters  
                counters = {this.state.counters}
                onDelete ={ this.deleteven } 
                onReset = { this.resetEvent }
                onInc ={ this.incEvent }
                onDec ={ this.decEvent }
                />
            </React.StrictMode>
        );
    }
}
 
export default App;