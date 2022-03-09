import { ReactComponent as GithubIcon } from 'assets/img/github.svg';
import './styles.css';

function Navbar() {

    return (
        <header>
            <nav className="container">
                <div className="dsmoviepro-nav-content">
                    <h1>DS MoviePro</h1>
                    <a href="https://github.com/devsuperior">
                        <div className="dsmoviepro-contact-container">
                            <GithubIcon />
                            <p className="dsmoviepro-contact-link">/devsuperior</p>
                        </div>
                    </a>
                </div>
            </nav>
        </header>
    );
}

export default Navbar;