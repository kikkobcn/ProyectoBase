import Carousel from 'react-bootstrap/Carousel';

export const HomeBody = () => {

    return (
        <div className="container">
            <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block w-100 slide"
                        src="https://t4.ftcdn.net/jpg/02/71/49/59/240_F_271495982_6ufRpUsHA0HNpDDAJnQ1GxNQRwtgPlhL.jpg"
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3>- - - Qué - - -</h3>
                        <p>Crea tu propia red virtual en sencillos pasos</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100 slide"
                        src="https://t4.ftcdn.net/jpg/03/09/12/93/240_F_309129371_KxWT7XPNKzvVcmsv1qHR3FFhQ9uxLJ5W.jpg"
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                        <h3>- - - Dónde - - -</h3>
                        <p>Redes privadas corriendo en Ethereum</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100 slide"
                        src="https://img.freepik.com/foto-gratis/fondo-comunicaciones-red-moderna-ciencia-3d_1048-12787.jpg?size=626&ext=jpg"
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h3>- - - Cómo - - -</h3>
                        <p>
                            Configura el nº de nodos que prefieras en tu propia red fácilmente
                        </p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
            <div className="container mt-3 py-5">
                <h4>Planes</h4>
            </div>
            <div className="container text-center">
                <div className="row row-cols-1 row-cols-md-3">
                    <div className="col mb-3">
                        <div className="card shadow-lg">
                            <div className="card-header">
                                <h5>Gratuito</h5>
                            </div>
                            <div className="card-body">
                                <h4>0€ <small className="text-muted">/mes</small></h4>
                                <ul className="list-unstyled mt-3 mb-4">
                                    <li>1 red privada</li>
                                    <li>3 nodos/red</li>
                                    <li>Soporte 24h</li>
                                </ul>
                                <button className="btn btn-outline-primary">Inscribirme</button>
                            </div>
                        </div>
                    </div>
                    <div className="col mb-3">
                        <div className="card shadow-sm">
                            <div className="card-header">
                                <h5>Profesional</h5>
                            </div>
                            <div className="card-body">
                                <h4>10€ <small className="text-muted">/mes</small></h4>
                                <ul className="list-unstyled mt-3 mb-4">
                                    <li>5 redes privadas</li>
                                    <li>10 nodos/red</li>
                                    <li>Soporte 24h</li>
                                </ul>
                                <button className="btn btn-outline-primary">Comenzar</button>
                            </div>
                        </div>
                    </div>
                    <div className="col mb-3">
                        <div className="card shadow-lg">
                            <div className="card-header">
                                <h5>Empresa</h5>
                            </div>
                            <div className="card-body">
                                <h4>25€ <small className="text-muted">/mes</small></h4>
                                <ul className="list-unstyled mt-3 mb-4">
                                    <li>20 redes privadas</li>
                                    <li>20 nodos/red</li>
                                    <li>Soporte 24h</li>
                                </ul>
                                <button className="btn btn-outline-primary">Comenzar</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
