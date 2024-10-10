import React,{Component} from 'react';


class Counter extends Component {
    state = { 
        value :this.props.counter.value
     } 
    render() { 

    return (
        <div>
                <h2 className={this.getBadgeClasses()}>Count: {this.state.value}</h2>
                <button className='btn btn-primary m-2' onClick={() => this.addCount()}>Increment</button>
                <button className='btn btn-secondary m-2' onClick={() => this.decrementCount()}>Decrement</button>
                <button className='btn btn-danger m-2' onClick={()=> this.props.onDelete(this.props.counter.id) }>Delete</button>
        </div>
    );

    } 
    getBadgeClasses = () => {

        return  'badge m-2 badge-' + (this.state.count === 0) ? 'warning' : 'primary';

    }

    addCount = () => {
       this.setState({value : this.state.value + 1 })
    }

    decrementCount = () => {
        this.setState({value : this.state.value - 1 })
    }
    
    find = () => 
    {
        return this.state.count === 0?<h2> Zero</h2>:this.state.count;
    }
}
 
export default Counter;