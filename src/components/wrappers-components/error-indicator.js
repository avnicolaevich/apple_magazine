import React, {Component} from 'react'

export default class ErrorIndicator extends Component{
    state = {
        error: false
    };

    componentDidCatch() {
        this.setState({
            error: true
        })
    }

    render(){

        if(this.state.error) return <div>Something went wrong</div>;
        return this.props.children
    }
}