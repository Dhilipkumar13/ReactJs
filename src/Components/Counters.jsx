import React, { Component } from 'react';
import Counter from './Counter';

class Counters extends Component {
    state = { 
        counters:[
            {id:1, value: 1},
            {id:2, value: 2},
            {id:3, value: 3}
        ]
     }
    deleteven = (counterId) =>{
        console.log("Hai");
        const counters = this.state.counters.filter(c => c.id!= counterId );
        this.state.counters = {counters};
    } 
    render() { 
        return (
            <div>
            <h1>Nav Bar: {}</h1>
            {this.state.counters.map(counter => <Counter key={counter.id} value={counter.value}  onDelete ={this.deleteven } >
                <h4>Title #{this.state.counters.id} </h4></Counter> )}
            </div>
        );
    }
}
 
export default Counters;