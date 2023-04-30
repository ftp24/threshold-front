import { Link } from "react-router-dom"
export default function Navbar() {
    return (
        <div>

            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <Link className=" navbar-brand" style={{paddingLeft:'20px'}} to="/">Threshold Cryptography</Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item">
                            <Link className="nav-link" to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/encryption">Encryption</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/decryption">Decryption</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}