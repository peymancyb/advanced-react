import React from 'react';
import storeProvide from './storeProvider';

class Timestamp extends React.Component{

    timeDisplay = (timestamp)=> timestamp.toLocaleDateString([],{hour:'2-digit' , minute: '2-digit'});

    shouldComponentUpdate(nextProps){
        return (this.timeDisplay(this.props.timestamp) !== this.timeDisplay(nextProps.timestamp));
    }
    render(){
        return (
            <div>
                {this.timeDisplay(this.props.timestamp)}
            </div>
        );
    }
}

function extraProps(store) {
    return {
        timestamp: store.getState().timestamp
    };
}
export default storeProvide(extraProps)(Timestamp);