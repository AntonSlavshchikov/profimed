import {Link} from "react-router-dom";

export const Navbar = () =>{
    const navOpen = () =>{
        document.getElementById("top__menu").classList.toggle("active");
        document.getElementById("nav_toggle").classList.toggle("active");
    }

    const navClose = () =>{
        document.getElementById("top__menu").classList.toggle("active");
        document.getElementById("nav_toggle").classList.toggle("active");
    }
    
    return(
        <div className="nav">
            <ul className='top__menu' id="top__menu">
                <li className='nav__link'><Link className='nav__link__text' to='/' onClick={navClose}>Главная</Link></li>
                <li className='nav__link'><Link className='nav__link__text' to='/news' onClick={navClose}>Новости</Link></li>
                <li className='nav__link'><Link className='nav__link__text' to='/services' onClick={navClose}>Услуги</Link></li>
                <li className='nav__link'><Link className='nav__link__text' to='/documents' onClick={navClose}>Документы</Link></li>
                <li className='nav__link'><Link className='nav__link__text' to='/workers' onClick={navClose}>Специалисты</Link></li>
                <li className='nav__link nav__about'><Link className='nav__link__text' to='/about'>О нас</Link>
                    <ul className='sub__menu'>
                        <li><Link to='/vacancy' className='sub__link' onClick={navClose}>Вакансии</Link></li>
                        <li><Link to='/reviews' className='sub__link' onClick={navClose}>отзывы</Link></li>
                    </ul>
                </li>
                <li className='nav__link nav__mob'><Link className='nav__link__text nav__mob' to='/vacancy' onClick={navClose}>Вакансии</Link></li>
                <li className='nav__link nav__mob'><Link className='nav__link__text nav__mob' to='/reviews' onClick={navClose}>отзывы</Link></li>
                <li className='nav__link nav__mob'><Link className='nav__link__text nav__mob' to='/about' onClick={navClose}>О нас</Link></li>
                <a href='/#homeForm' className="reg__button">Записаться</a>
            </ul>
            <button className="nav-toggle" id="nav_toggle" type="button" onClick={navOpen}>
                <span className="nav-toggle__item">Menu</span>
            </button>
        </div>
    );
}