import React, {Component} from 'react'
import AppleService from "../../service";

const service = new AppleService();

const withService = (Wrapper) => {
    return class extends Component {
        render() {
            return(
                <Wrapper {...this.props} service={service}/>
            )
        }
    }
};

export default withService