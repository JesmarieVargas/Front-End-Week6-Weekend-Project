import { NavLink } from 'react-router-dom';
import { Navbar, Nav } from 'react-bootstrap';

function NavigationBar() {
    return (
        <Navbar bg="primary" expand="md">
            <Navbar.Brand href="/customers">Welcome to React E-Commerce</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav"></Navbar.Toggle>
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link as= {NavLink} to="/" activeclassname="active">
                    HomePage
                    </Nav.Link>
                    
                    <Nav.Link as= {NavLink} to="/newcustomer" activeclassname="active">
                    Add New Customer
                    </Nav.Link>

                    <Nav.Link as= {NavLink} to="/customer" activeclassname="active">
                    View Existing Customers
                    </Nav.Link>

                    <Nav.Link as= {NavLink} to="/newproducts" activeclassname="active">
                    Add New Product
                    </Nav.Link>

                    <Nav.Link as= {NavLink} to="/products" activeclassname="active">
                    View Our Products
                    </Nav.Link>

                    <Nav.Link as= {NavLink} to="/orderform" activeclassname="active">
                    Add New Order
                    </Nav.Link>

                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default NavigationBar;