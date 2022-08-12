import dellaIcon from './della_duck_icon_1.jpg';
import style from './header.module.css';


const Header = () => {

    return (
        <header className={style.header}>
            <img src={dellaIcon} alt='Header Icon' />
            <p>Exo - Liste de produit</p>
        </header>
    );
};

export default Header;
