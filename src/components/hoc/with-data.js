import React, {Component} from 'react'

const withData = (Wrapper, getData) => {
    return class extends Component {

        state = {
            data: false
        };

        componentDidMount() {
            getData()
                .then((data) => this.setState({data}))
        }

        render() {

            const { data } = this.state;

            if(!data) return <div>Loading...</div>;

            return(
                <Wrapper {...this.props} data={this.state.data}/>
            )
        }
    }
};

export default withData