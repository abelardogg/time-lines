import React from 'react';
//import { connect } from 'react-redux';
import { Navbar, Nav } from 'react-bootstrap';
import { NavLink } from 'react-router-dom'


class Navigator extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Navbar bg="dark" variant="dark" className='mb-2'>
                <Navbar.Brand href="/">
                    Time Lines
                </Navbar.Brand>
                <Nav defaultActiveKey="/">
                    <NavLink exact to='/' className='nav-link'>home</NavLink>
                    <NavLink to='/about' className='nav-link'>about</NavLink>
                </Nav>
            </Navbar>
        )
    }
}

export default Navigator;
