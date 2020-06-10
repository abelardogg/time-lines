import React from 'react';
import { connect } from 'react-redux';
import {
    setActive
} from '../redux/actions/timeLine'

class TimeLine extends React.Component {
    constructor(props){
        super(props)
    }

    changeSection = (name) => {
        this.props.setActive(name);
        console.log(this.props)
    }

    render() {
        return(<>

            <button onClick={() => this.changeSection('mex')}>mex</button>
            <button onClick={() => this.changeSection('space')}>space</button>
            <button onClick={() => this.changeSection('world')}>world</button>
        </>)
    }
}

const mapStateToProps = state => {
    

    return {utl: state.undoableTimeLine}
}

const mapDispatchToProps = () => {
    return {
        setActive
    }
}

export default connect(mapStateToProps, {setActive})(TimeLine)