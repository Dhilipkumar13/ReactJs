import React, { Component } from 'react';
import Counter from './Counter';

class Counters extends Component {
    
    render() { 
        return (
            <div>
                <button className='btn btn-warning m-3' onClick={this.props.onReset}> Reset </button>
                
                {
                    this.props.counters.map(counter => 
                        <Counter 
                            key={counter.id} 
                            counter={counter}  
                            onDelete={this.props.onDelete} 
                            onInc={this.props.onInc}
                            onDec={this.props.onDec}
                        >
                            <h4>Title #{counter.id} </h4>
                        </Counter> 
                    )
                }
            </div>
        );
    }
}
 
export default Counters;




// import React, { Component } from 'react';
// import Counter from './Counter';

// class Counters extends Component {
    
//     render() { 
//         return (
//             <div>
//             <button className='btn btn-warning m-3' onClick={() => this.props.onReset()}> Reset </button>
//             <h1>Nav Bar: { this.props.onCount }</h1>
//             {
//                 this.props.counters.map(counter => 
//                     <Counter key={counter.id} counter= {this.props.counter}  
//                     onDelete ={ this.props.onDelete } 
//                     onInc ={ this.props.onInc }
//                     onDec ={ this.props.onDec }
//                     >
//                         <h4>Title #{this.props.counters.id} </h4>
//                     </Counter> )
//             }
//             </div>
//         );
//     }
// }
 
// export default Counters;