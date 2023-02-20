import trollface from '../TrollFace.png';
import '../style.css';

function Header() {
    return (
        <header className="header">
            <img className="header-image" alt="troll face" src={trollface}/>
            <div className="header-title">Meme Generator</div>
            <div className="header-slogan">Create your own memes</div>
        </header>
    )
}

export default Header;