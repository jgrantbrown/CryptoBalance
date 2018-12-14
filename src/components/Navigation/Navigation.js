import React, { Component } from 'react';
import { Container, Row, Col,ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import {Navbar, Nav, NavItem, NavDropdown, MenuItem} from 'react-bootstrap';
import { Route } from 'react-router-dom';


class NavDropdownExample extends React.Component {
  handleSelect(eventKey, event) {
    event.preventDefault();
    alert(`selected ${eventKey}`);
  }

  render() {
    return (
      <Nav bsStyle="tabs" activeKey="1" onSelect={k => this.handleSelect(k)}>
        <NavItem eventKey="1" href="/home">
          NavItem 1 content
        </NavItem>
        <NavItem eventKey="2" title="Item">
          NavItem 2 content
        </NavItem>
        <NavItem eventKey="3" disabled>
          NavItem 3 content
        </NavItem>
        <NavDropdown eventKey="4" title="Dropdown" id="nav-dropdown">
          <MenuItem eventKey="4.1">Action</MenuItem>
          <MenuItem eventKey="4.2">Another action</MenuItem>
          <MenuItem eventKey="4.3">Something else here</MenuItem>
          <MenuItem divider />
          <MenuItem eventKey="4.4">Separated link</MenuItem>
        </NavDropdown>
      </Nav>
    );
  }
}
export default NavDropdownExample;
// render(<NavDropdownExample />);
