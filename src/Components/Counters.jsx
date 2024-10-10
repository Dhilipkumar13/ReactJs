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
            <div>
            <button className='btn btn-warning m-3' onClick={() => this.resetEvent()}> Reset </button>
            <h1>Nav Bar: {}</h1>
            {
                this.state.counters.map(counter => 
                    <Counter key={counter.id} counter= {counter}  
                    onDelete ={ this.deleteven } 
                    onInc ={ this.incEvent }
                    onDec ={ this.decEvent }
                    >
                        <h4>Title #{this.state.counters.id} </h4>
                    </Counter> )
            }
            </div>
        );
    }
}
 
export default Counters;