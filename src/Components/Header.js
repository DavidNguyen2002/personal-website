import {Link} from 'react-scroll'

function Header() {

    function navItem(text, id) {
        return <Link to={id} smooth={true} className="font-medium cursor-pointer" >{text}</Link>
    }

    return (
        <header className="w-full h-20 bg-amber-300 flex items-center justify-between px-14">
            <a href="#" className="font-bold text-xl">David Nguyen</a>
            <nav className="flex items-center gap-4">
                {navItem('About Me', 'about')}
                {navItem('Experience', 'experience')}
                {navItem('Projects', 'projects')}
                {navItem('Connect', 'connect')}
            </nav>
        </header>
    )
}

export default Header