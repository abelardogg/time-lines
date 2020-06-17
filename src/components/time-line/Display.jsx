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
            <Col xs={12} id="section-title">
                <h3>{title}</h3>
            </Col>
            <Col xs={12} id="section-summary">
                <p>
                    {summary}
                </p>
            </Col>
            <Col xs={12} id="timeline-display">
                {
                    !!this.props.timeline.active ?
                    <StageList list={this.props.timeline.active.stage}/>
                    :
                    null
                }
            </Col>

        </Row>

        </>)
    }
}

const StageList = (props) => {
    const list = props.list;
    if(!list){
        return null;
    }
    const listEl = list.map((l, ix)=>{
        return <Stage key={ix} title={l.event} date={l.date} description={l.description} />
    });

    return listEl;

}

const Stage = (props) => {
    return(<>
        <Row className='mb-2'>
            <Col xs={12}><h2>{props.title}</h2></Col>
            <Col xs={12}><i className="text-info small-font">{props.date}</i></Col>
            <Col xs={12}><p>{props.description}</p></Col>
        </Row>
    </>);
}

const mapStateToProps = state => {
    return {timeline: state.undoableTimeline.present}
}

const mapDispatchToProps = () => {
    return {
        
    }
}

export default connect(mapStateToProps, mapDispatchToProps())(Display)