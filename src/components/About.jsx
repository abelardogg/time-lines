import React from 'react';
import { connect } from 'react-redux';
import {
    setActive
} from '../redux/actions/timeline';

class About extends React.Component {
    constructor(props){
        super(props)
    }

    

    render() {
        return(<>
            <h1>About this project</h1>
            <p>
                on dev
            </p>
        </>)
    }
}

const mapStateToProps = state => {
    

    return {}
}

const mapDispatchToProps = () => {
    return {
        setActive
    }
}

export default connect(mapStateToProps)(About)