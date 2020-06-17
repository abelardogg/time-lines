import React from 'react';
import { connect } from 'react-redux';
import { Row, Col } from 'react-bootstrap';
import Archive from './Archive';
import Display from './Display';
class Timeline extends React.Component {
    constructor(props){
        super(props)
    }    

    render() {
        return(<>
            <Row>
                <Col xs={3} style={{borderRight: '1px solid #ccc'}}>
                    <Archive/>
                </Col>
                <Col xs={9}>
                    <Display/>
                </Col>
            </Row>
            
        </>)
    }
}

const mapStateToProps = state => {
    
    return {tlPresent: state.undoableTimeline.present}
}

const mapDispatchToProps = () => {
    return {
        
    }
}

export default connect(mapStateToProps, mapDispatchToProps())(Timeline)