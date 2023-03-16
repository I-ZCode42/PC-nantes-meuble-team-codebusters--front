import Panierblack from './buttons/Panierblack';
import Searchblack from './buttons/Searchblack';
import Menublack from './buttons/Menublack';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


const nav = {
  marginLeft: "55em",
}


function Navbarblack () {

    return (
      <Navbar bg="white" variant="white">
      <Container style={{marginRight: "8em"}}>
        <Navbar.Brand href="#home"><Menublack/></Navbar.Brand>
        <Nav style={nav} className="me-auto">
          <Nav.Link href="#home"><Searchblack/></Nav.Link>
          <Nav.Link href="#features"><Panierblack/></Nav.Link>
          <Nav.Link href="#pricing"><Panierblack/></Nav.Link>
          <Nav.Link href="#pricing"><Panierblack/></Nav.Link>
        </Nav>
      </Container>
    </Navbar>
    );

}

export default Navbarblack;