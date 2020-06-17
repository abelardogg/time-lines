import React from 'react';
import { connect } from 'react-redux';
import { Button, ButtonGroup } from 'react-bootstrap';
import {
    setActive,
    setArchive
} from '../../redux/actions/timeline';
import testTimelinesData from '../../db/timelines.json';

class Archive extends React.Component{
    constructor(props){
        super(props);
    }

    getArchive = () => {
        // TODO implement endpoint call
        return testTimelinesData;
    }

    openTimeLine = (timeline) => {
        this.props.setActive(timeline);
        
    }

    componentWillMount(){
        let archive = this.props.timeline.archive;

        if(archive.length === 0){
            archive = this.getArchive();
            this.props.setArchive(archive);

        }
    }

    render(){
        return (<>
            <h6>Archivo</h6>
            <ButtonGroup vertical style={{width: '100%'}}>
                <ArchiveList archiveList={this.props.timeline.archive} clickHandler={this.openTimeLine} />
            </ButtonGroup>
        </>);
    }
}

const ArchiveList = (props) =>{
    const archive = props.archiveList;
    const archiveListEl = archive.map((a, aix)=>{
        return(
        <Button key={aix} variant="link" onClick={() => props.clickHandler(a)}>{a.name}</Button>
        );
    });

    return archiveListEl;
}


const mapStateToProps = state => {
    return {timeline: state.undoableTimeline.present}
}

const mapDispatchToProps = () => {
    return {
        setActive,
        setArchive
    }
}

export default connect(mapStateToProps, mapDispatchToProps())(Archive)