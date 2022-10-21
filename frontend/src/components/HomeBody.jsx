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
        </div>
    );
}
