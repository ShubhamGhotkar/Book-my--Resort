import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import 'bootstrap/dist/css/bootstrap.min.css';
import './navbar-style.css'
import { Link } from 'react-router-dom';
import { useState, useEffect } from "react"



function Header({ Data, URL }) {

  
  const [movie, setMovie] = useState([])
  const [query, setQuery] = useState('');


  useEffect(() => {

    fetch(URL).then((res) => res.json()).then((data) => {
      setMovie(data.results)
    }
    )

  }, [URL])

  const searchMovie = async (e) => {
    e.preventDefault();
    try {

      const URL = `https://api.themoviedb.org/3/search/movie?api_key=c45a857c193f6302f2b5061c3b85e743&language=en-US&query=${query}&page=1`
      const res = await fetch(URL)
      const data = await res.json();
      setMovie(data.results);
      setQuery('')
     

    }

    catch (error) {
      console.log(error)
    }

  }


  const handleChange = (e) => {
    setQuery(e.target.value)
  }



  useEffect(() => {
    const fetchPosts = async () => {
      Data(movie);
    };

    fetchPosts();

  }, [movie])


  return (
    <>
      <header>
        <div className="nav-container">
          {['md'].map((expand) => (
            <Navbar key={expand} bg="dark  " expand={expand} className="mb-3 width-100 " fixed='top'>
              <Container fluid className='mx-5 width-80'>
                <Navbar.Brand href="#" className='text-white mx-5'>MovieDb</Navbar.Brand>
                <Navbar.Toggle className='bg-white' aria-controls={`offcanvasNavbar-expand-${expand}`} />
                <Navbar.Offcanvas
                  id={`offcanvasNavbar-expand-${expand}`}
                  aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
                  placement="end"
                >
                  <Offcanvas.Header closeButton>
                    <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                      Offcanvas
                    </Offcanvas.Title>
                  </Offcanvas.Header>
                  <Offcanvas.Body>

                    <Nav className="justify-content-end flex-grow-1 pe-3 text-dark bg-dark text-decoration-none" >
                    <Link className='text-decoration-none text-white ml-5 mt-2' to="/popular">Popular</Link>
                    <Link className='text-decoration-none text-white ml-5 mt-2' to="/topratedmovie">Top Rated</Link>
                    <Link className='text-decoration-none text-white ml-5 mt-2' to="/upcomingmovie">Upcoming</Link>
                    </Nav>

                    <Form className="d-flex mx-3 " onSubmit={searchMovie} >
                      <Form.Control
                        type="search"
                        placeholder="Movie Name"
                        className="me-2  shadow-none"
                        aria-label="Search"
                        onChange={handleChange}
                      />
                      <Nav.Link href="/search" className='text-white p-2 mx-2'><Button variant='secondary - Secondary' className='search-btn mx-2' type='submit' >Search</Button></Nav.Link>

                    </Form>
                  </Offcanvas.Body>
                </Navbar.Offcanvas>
              </Container>
            </Navbar>
          ))}
        </div>
      </header>

    </>
  );
}



export default Header;
