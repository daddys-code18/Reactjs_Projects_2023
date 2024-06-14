import "./NavBar.css"
const NavBar = () => {
    return (
        // import "App.css";
        <nav className="container">
            <div className="logo">
                <img src="/images/logo.png" alt="" />
            </div>
            <ul>
                <li>Home</li>
                <li>About</li>
                <li>Contact</li>
            </ul>
        </nav>
    )
}

export default NavBar
