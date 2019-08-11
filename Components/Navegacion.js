import Link from "next/link";

const Navegacion = () => (
    <nav className="navbar navbar-expand-lg navbar-dark bg-success">
        <div className="container">
            <Link href="/">
                <a className="navbar-brand">TodoBitCoin</a>
            </Link>
            <div className="collapse navbar-collapse">
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item">
                        <Link href="/">
                            <a className="nav-link">Inicio</a>
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link href="/nosotros">
                            <a className="nav-link">Nosotros</a>
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
);

export default Navegacion;

/*
Modo de meter estilos sin bootstrap
<div>
        <ul>
            <h1>BitcoinApp</h1>
            <li>
                <Link href="/">
                    <a>INICIO</a>
                </Link>
            </li>
            <li>
                <Link href="/nosotros">
                    <a>NOSOTROS</a>
                </Link>
            </li>
        </ul>
        <style jsx>{`
            h1{
                color:white;
            }
            ul {
                background-color: #333;
                list-style:none;
                display:flex;
            }
            ul li {
                padding: .5rem 0;
                margin-right:1rem;
            }
            ul li a {
                font-family:verdana;
                font-size:1.2em;
                color:white;
                text-decoration:none;
            }
        `}
        </style>
    </div>
*/
