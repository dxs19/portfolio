import { Link } from "react-router-dom";

const Nav = () => {
    return (
        <nav>
            <Link to='/projects'>Projects</Link>
            <Link to='/contact'> Contacts</Link>
            <Link to='/'>Home</Link>
        </nav>
    )
}
export default Nav