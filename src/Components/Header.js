import {Link} from 'react-scroll'
import {useState} from 'react'
import hamburger from '../Images/hamburger-menu.png'
import close from '../Images/close.png'

function Header() {

    const [displayMenu, setDisplayMenu] = useState(false)

    function openMenu() {
        setDisplayMenu(true)
    }

    function closeMenu() {
        setDisplayMenu(false)
    }

    function navItem(text, id) {
        return <Link to={id} smooth={true} className={`font-medium cursor-pointer ${displayMenu ? 
            'text-xl font-semibold' : 'text-sm md:text-base'}`} onClick={closeMenu}
            >{text}</Link>
    }

    return (
        <header className="w-full h-20 bg-amber-300 flex items-center justify-between px-6 md:px-14">
            <a href="#" className="font-bold text-base md:text-xl">David Nguyen</a>

            <img src={hamburger} alt="hamburger menu" className={`md:hidden ${displayMenu ? 'hidden' : ''} h-1/2 w-auto`}
                onClick={openMenu}
            />

            <img src={close} alt="close menu" className={`${displayMenu ? '' : 'hidden'} h-2/5 w-auto`} onClick={closeMenu} onBlur={closeMenu} />

            <nav className={`items-center gap-4 md:flex ${displayMenu ? 'flex flex-col absolute top-20 bg-amber-300 h-fit w-fit px-12 pb-6 pt-3 right-0 rounded-bl-sm z-10' 
            : 'hidden'}`}>
                {navItem('About Me', 'about')}
                {navItem('Experience', 'experience')}
                {navItem('Projects', 'projects')}
                {navItem('Connect', 'connect')}
            </nav>
        </header>
    )
}

export default Header