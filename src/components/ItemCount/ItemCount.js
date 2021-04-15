import './ItemCount.scss'

import React, {Component} from 'react';

class Counter extends Component {
    constructor() {
        super()
        this.state = {
            count: 1
        }
    }
    increment = () => {
        this.setState({ count: this.state.count + 1 });
      };
    
    decrement = () => {
        if(this.state.count > 1){
        this.setState({ count: this.state.count - 1 });
        }
      };
    
    render(){

        return(
                <div className="card m-0 p-0 w-100">
                    <h5 className="card-title">{this.props.name}</h5>
                    <div className="card-body d-flex justify-content-center align-items-baseline">
                        <button type="button" className="btn btn-primary" onClick={this.decrement}>-</button>
                        <span className="mx-3">{this.state.count}</span>
                        <button type="button" className="btn btn-primary" onClick={this.increment}>+</button>
                    </div>
                </div>
        )
    }
}

export default Counter;