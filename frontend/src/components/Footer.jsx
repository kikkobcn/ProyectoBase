import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export const Footer = () =>{

  return (
<Container className='bg-dark'>
  <Row className='mt-4'>
    <Col className='col-footer'>
      <a href="https://facebook.com" className="btn rrss btn-sm text-light"  role="button" aria-disabled="true"><i className="bi bi-facebook"></i></a>
      <a href="https://instagram.com" className="btn rrss btn-sm text-light" role="button" aria-disabled="true"><i className="bi bi-instagram"></i></a>
      <a href="https://twitter.com" className="btn rrss btn-sm text-light"  role="button" aria-disabled="true"><i className="bi bi-twitter"></i></a>
    </Col>
    <Col className='col-footer'>
      <div>
        <a href="" className='text-light'>Quienes Somos </a>
      </div>
    </Col>
    <Col className='col-footer'>
      <div>
        <a href="" className='text-light'>Privacidad</a>
        </div>
    </Col>
    <Col className='col-footer'>
      <div>
        <a href="" className='text-light'>Términos y Condiciones</a>
        </div>
    </Col>
    
  </Row>
  <Row>
    <Col>1 of 3</Col>
    <Col>2 of 3</Col>
    <Col>3 of 3</Col>
  </Row>
</Container>
  )
}