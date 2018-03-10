import React from 'react';
import PropTypes from 'prop-types';

const storeProvider = (extraProps = () => ({})) => (Component) =>{
    return class extends React.PureComponent{
        static displayName = `${Component.name}Container`;
        static contextTypes = {
            store: PropTypes.object
        };


        onStoreChange = () => {
            if(this.subscriptionId){
                this.forceUpdate();
            }
            // this.setState(this.props.store.getState());
        }
        componentDidMount(){
            this.subscriptionId = this.context.store.subscribe(this.onStoreChange);
            // this.props.store. ();
        }
        componentWillUnmount(){
            this.props.store.unsubscribe(this.subscriptionId);
            this.subscriptionId = null;
        }




        render(){
            return <Component
                {...this.props}
                {...extraProps(this.context.store , this.props)}
                store={this.context.store}/>;
        }

    }

};

export default storeProvider;








// const WithStore = (props, {store}) => <Component {...props} store={store}/>;
// WithStore.contextTypes = {
//     store: PropTypes.object
// };
// WithStore.displayName = `${Component.name}Container`;
// return WithStore;