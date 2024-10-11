import React, { Component } from 'react';

class Counter extends Component {
    
    render() { 

        const { counter , onInc , onDec , onDelete } = this.props ;

        return (
            <div>
                <h2 className={this.getBadgeClasses()}>Count: {counter.value}</h2>
                <button className='btn btn-primary m-2' onClick={() => onInc(counter.id)}>Increment</button>
                <button className='btn btn-secondary m-2' onClick={() => onDec(counter.id)}>Decrement</button>
                <button className='btn btn-danger m-2' onClick={() => onDelete(counter.id)}>Delete</button>
            </div>
        );
    } 

    getBadgeClasses = () => {
        return 'badge m-2 badge-' + (this.props.counter.length === 0 )? 'warning' : 'primary';
    }
}
 
export default Counter;




// import React,{Component} from 'react';


// class Counter extends Component {
    
//     render() { 

//     return (
//         <div>
//                 <h2 className={this.getBadgeClasses()}>Count: {this.props.counter.value}</h2>
//                 <button className='btn btn-primary m-2' onClick={() => this.props.onInc(this.props.counter.id)}>Increment</button>
//                 <button className='btn btn-secondary m-2' onClick={() => this.props.onDec(this.props.counter.id)}>Decrement</button>
//                 <button className='btn btn-danger m-2' onClick={()=> this.props.onDelete(this.props.counter.id) }>Delete</button>
//         </div>
//     );

//     } 
//     getBadgeClasses = () => {

//         return 'badge m-2 badge-' + (this.props.counter.length === 0) ? 'warning' : 'primary';

//     }
   
//     find = () => 
//     {
//         return this.props.counter.count === 0?<h2> Zero</h2>:this.props.counter.count;
//     }
// }
 
// export default Counter;