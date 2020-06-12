import React from 'react';
import { connect } from 'react-redux';
import { Row, Col } from 'react-bootstrap';

class Display extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        const activeTimeline = this.props.timeline.active;
        const title = !!activeTimeline? activeTimeline.name : 'Hola!'
        const summary = !!activeTimeline? activeTimeline.summary : 'A donde vamos a viajar?'
        return(<>
        <Row>
            <Col xs={12}>
                <h3>{title}</h3>
            </Col>
            <Col xs={12}>
                <p>
                    {summary}
                </p>
            </Col>

        </Row>

        </>)
    }
}

const mapStateToProps = state => {
    return {timeline: state.undoableTimeline.present}
}

const mapDispatchToProps = () => {
    return {
        
    }
}

export default connect(mapStateToProps, mapDispatchToProps())(Display)