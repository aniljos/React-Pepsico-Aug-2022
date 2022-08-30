import React, {Component} from 'react';


class Counter extends Component{

    state = {
        count: 0
    };

    constructor(props){

        super(props);
        this.state.count = this.props.initCount;
    }

    inputRef = React.createRef(null);



    //Event Handler => Arrow function
    inc = () => {
        console.log("inc clicked");
        //this.props.initCount++; // props is read-only
        //this.state.count++; // does not re-render the UI

        const updatedCount = this.state.count + 1;

        //setState is asynchronous
        //setState(slice of the updated state, callback(invoked after the state is updated))
        this.setState({
            count : updatedCount
        }, () => {

            console.log("Count", this.state.count);
        });


        
    }

    decr = () => {

        const updatedCount = this.state.count - 1;
        this.setState({
            count : updatedCount
        });
    }
    change = (evt) => {

        const value = evt.target.value;

        this.setState({
            count: Number(value)
        });
    }

    update = () => {
        
        const value = this.inputRef.current.value;

        if(value){

            this.setState({
                count : Number(value)
            });
        }

    }

    //returns the JSX
    render(){
        return (
            <div>
                <h4>Counter: {this.state.count}</h4>
                <p>This is a class component</p>
                <div>
                    <button onClick={this.inc}>Inc</button> &nbsp;
                    <button onClick={this.decr}>Decr</button>
                </div>
                <br/>
                <div>
                    <input type="number" 
                            placeholder='Count'
                            value={this.state.count}
                            onChange={this.change}/>
                </div>

                <div>
                    <input type="number" ref={this.inputRef}/> &nbsp;
                    <button onClick={this.update}>Update</button>
                </div>
            </div>
        )
    }
}

export default Counter;