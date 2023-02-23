import { Container, Col, Row } from "react-bootstrap"
import Button from "react-bootstrap/esm/Button"
import {useNavigate} from "react-router-dom"
import Navbar from 'react-bootstrap/Navbar';

const NavSpace = () => {
    return (
            <Navbar className="p-2 d-flex justify-content-evenly" expand="lg" variant="dark" bg="dark">              
              <Navbar.Brand><h1><strong>NEWS-ANSIA.it</strong></h1></Navbar.Brand>
            </Navbar>                       

    )
}

export default NavSpace
