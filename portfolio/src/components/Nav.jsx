import { Link } from "react-router-dom";

const Nav = () => {
    return (
        <nav className="nav">
            <Link to='/projects'>Projects</Link>
            <Link to='/'>Home</Link>
        </nav>
    )
}
export default Nav