import Link from 'next/link'
function Nav() {
    return (
        <div>
            <section className = "header">
            <nav className='navbar navbar-expand-lg navbar-light'>
                <Link href="/"><a className="nav-link">Navbar</a></Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item">
                            <Link href="/landings"><a className="nav-link">Landings</a></Link>
                        </li>
                        <li className="nav-item">
                            <Link href="/pages"><a className="nav-link">Pages</a></Link>
                        </li>
                        <li className="nav-item">
                            <Link href="/account"><a className="nav-link">Account</a></Link>
                        </li>
                    </ul>
                </div>
            </nav>  
            </section>
        </div>
        
    )
}

export default Nav
